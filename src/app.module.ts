import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DbConnectionService } from './db-connection/db-connection.service';
import { DbConnectionModule } from './db-connection/db-connection.module';

@Module({
  imports: [AuthModule, DbConnectionModule],
  controllers: [],
  providers: [DbConnectionService],
})
export class AppModule {}
