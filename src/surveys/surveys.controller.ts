import { Get, Post, Delete, Put, Controller, Body, HttpCode } from '@nestjs/common';

// Local models
import { MetaSurveyDto, SurveyDto }  from './surveys.model';

// Data mocks
import { META_SURVEYS, SURVEYS } from './surveys.mock';



@Controller('surveycreator')
export class SurveysController {

  localMetaSurveys: MetaSurveyDto[] = META_SURVEYS;
  localSurveys: SurveyDto[] = SURVEYS;

  @Get('surveys')
  getClientSurveys(): MetaSurveyDto[] {
    return this.localMetaSurveys;
  }

  @Post('survey')
  createMetaSurvey(@Body() metaSurvey: MetaSurveyDto): MetaSurveyDto {
    metaSurvey.created = String(Date.now());
    metaSurvey.id = String(Number(this.localMetaSurveys[this.localMetaSurveys.length-1].id) + 1);

    this.localMetaSurveys.push(metaSurvey);
    return metaSurvey;
  }

  @Delete('survey')
  deleteSurvey(@Body() id: number): MetaSurveyDto[] {
    console.log('Delete survey by id: ', id);
    this.localMetaSurveys.splice(this.localMetaSurveys.findIndex(metaSurvey => metaSurvey.id === String(id)), 1);
    return this.localMetaSurveys;
  }

  @Put('survey')
  editSurvey(@Body() survey: SurveyDto): SurveyDto {
    console.log('Edit survey by id: ', survey.id);
    const surveyIdx = this.localSurveys.findIndex(sur => sur.id === String(survey.id));
    this.localSurveys[surveyIdx] = survey;
    return this.localSurveys[surveyIdx];
  }

}
