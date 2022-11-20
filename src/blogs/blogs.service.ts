import { Injectable } from '@nestjs/common';
import { DbConnectionService } from 'src/db-connection/db-connection.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: DbConnectionService) {}

  async CreateBlog() {
    return `create blog`;
  }

  async DeleteBlog() {
    return `delete blog`;
  }

  async UpdateBlog() {
    return `update blog`;
  }

  async getAllBlog() {
    return `get all blog`;
  }

  async getBlogById(id: string) {
    return `get blogById ${id}`;
  }
}
