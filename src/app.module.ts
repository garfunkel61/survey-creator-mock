import { Module } from '@nestjs/common';

// Local controllers
import { AppController } from './app.controller';

// Local services
import { AppService } from './app.service';

// Local modules
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [SurveysModule],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}
