import { ForbiddenException, Injectable } from '@nestjs/common';
import { DbConnectionService } from 'src/db-connection/db-connection.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { AuthDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: DbConnectionService) {}

  async signup(dto: AuthDto) {
    try {
      const _hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          hash: _hash,
        },
        select: {
          id: true,
          email: true,
          name: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return `Email Already used`;
        }
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    delete user.hash;
    return user;
  }
}
