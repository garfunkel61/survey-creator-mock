export class MetaSurveyDto {
  id: string;
  readonly name: string;
  created: string;
  readonly type: string;
  readonly client: string;
}

export class SurveyDto extends MetaSurveyDto {
  questions: any[];
}
