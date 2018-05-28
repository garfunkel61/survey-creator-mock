import { Get, Controller, Body, HttpCode } from '@nestjs/common';
// import * as userFeed from '../dto/get-user-feed.dto';

// Data mocks
import { surveysList } from './surveys.mock';

@Controller('surveys')
export class SurveysController {
  @Get('')
  getClientSurveys() {
    return surveysList;
  }
}
