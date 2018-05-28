import { Module } from '@nestjs/common';

// Local controllers
import { SurveysController } from './surveys.controller';

@Module({
  imports: [],
  controllers: [SurveysController],
  components: [],
})
export class SurveysModule {}
