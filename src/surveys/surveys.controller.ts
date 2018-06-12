import { Get, Post, Delete, Put, Controller, Body, Param, HttpCode } from '@nestjs/common';

// Local models
import { MetaSurveyDto, SurveyDto }  from './surveys.model';

// Data mocks
import { META_SURVEYS, SURVEYS } from './surveys.mock';

@Controller()
export class SurveysController {

  localMetaSurveys: MetaSurveyDto[] = META_SURVEYS;
  localSurveys: SurveyDto[] = SURVEYS;

  @Get('surveys')
  getMetaSurveys(): MetaSurveyDto[] {
    return this.localMetaSurveys;
  }

  @Post('surveys')
  createMetaSurvey(@Body() metaSurvey: MetaSurveyDto): MetaSurveyDto {
    metaSurvey.date_created = String(new Date());
    metaSurvey.id = this.localMetaSurveys.length ?
      String(Number(this.localMetaSurveys[this.localMetaSurveys.length-1].id) + 1) : String(1);
    this.localMetaSurveys.push(metaSurvey);

    const newSurvey = {
      id: metaSurvey.id,
      name: metaSurvey.name,
      description: '',
      date_created: metaSurvey.date_created,
      product_level: metaSurvey.product_level,
      client: metaSurvey.client,
      questions: []
    };
    this.localSurveys.push(newSurvey);

    return metaSurvey;
  }

  @Get('surveys/:id')
  getSurveyById(@Param() params): SurveyDto {
    const surveyIdx = this.localSurveys.findIndex(sur => sur.id === String(params.id));
    return this.localSurveys[surveyIdx];
  }

  @Delete('surveys/:id')
  deleteSurvey(@Param() params): MetaSurveyDto[] {
    console.log('Delete survey by id: ', params.id);
    this.localMetaSurveys.splice(this.localMetaSurveys.findIndex(metaSurvey => metaSurvey.id === String(params.id)), 1);
    return this.localMetaSurveys;
  }

  @Put('surveys/:id')
  editSurvey(@Body() survey: SurveyDto): SurveyDto {
    console.log('Edit survey by id: ', survey.id);
    const surveyIdx = this.localSurveys.findIndex(sur => sur.id === String(survey.id));
    this.localSurveys[surveyIdx] = survey;
    return this.localSurveys[surveyIdx];
  }

}
