import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { SurveysModule } from './surveys/surveys.module';


@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
        TelegrafModule.forRoot({
      botName: BOT_NAME,
      token: process.env.BOT_TOKEN!,
    }),
  MongooseModule.forRoot(process.env.MONGO_URI!),
  AdminModule,
  AuthModule,
  BotModule,
  SurveysModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
