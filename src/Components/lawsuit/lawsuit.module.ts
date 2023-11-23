import { Module } from '@nestjs/common';
import { LawsuitService } from './lawsuit.service';
import { LawsuitController } from './lawsuit.controller';

@Module({
  controllers: [LawsuitController],
  providers: [LawsuitService],
})
export class LawsuitModule {}
