import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, QuestionModule],
  controllers: [],
  providers: [PrismaService, UserService],
})
export class AppModule {}
