import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './Components/profile/profile.module';
import { UserModule } from './Components/user/user.module';
import { LawsuitModule } from './Components/lawsuit/lawsuit.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    ProfileModule,
    UserModule,
    LawsuitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
