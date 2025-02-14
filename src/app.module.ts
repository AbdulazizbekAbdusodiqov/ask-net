import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
