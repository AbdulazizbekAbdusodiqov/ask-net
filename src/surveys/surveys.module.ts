import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from './schema/survey.entity';
import { Question, QuestionSchema } from 'src/question/schemas/question.schema';
import { Statistic, StatisticSchema } from 'src/statistics/schemas/statistic.schema';
import { Client, ClientSchema } from 'src/client/schemas/client.schema';

@Module({  
  imports: [
      MongooseModule.forFeature([
        {
          name: Survey.name,
          schema: SurveySchema,
        },
        {
          name: Question.name,
          schema: QuestionSchema,
        },
        {
          name: Statistic.name,
          schema: StatisticSchema,
        },        
        {
          name: Client.name,
          schema: ClientSchema,
        },
  
      ]),
    ],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
