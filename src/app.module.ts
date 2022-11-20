import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DbConnectionService } from './db-connection/db-connection.service';
import { DbConnectionModule } from './db-connection/db-connection.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [AuthModule, DbConnectionModule, BlogsModule],
  controllers: [],
  providers: [DbConnectionService],
})
export class AppModule {}
