export class MetaSurveyDto {
  id: string;
  name: string;
  description: string;
  date_created: string;
  product_level: string;
  client: Client;

  constructor(rawData: any) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.description = rawData.description;
    this.date_created = rawData.date_created;
    this.product_level = rawData.product_level;
    this.client = new Client(rawData.client);
  }
}

/** Survey is class that represents full survey data, by its metadata and all questions data */
export class SurveyDto extends MetaSurveyDto {
  questions: any[]; // TODO

  constructor(rawData) {
    super(rawData);
    this.questions = rawData.questions;
  }
}

class Client {
  name: string;

  constructor(rawData) {
    this.name = rawData.name;
  }
}
