import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './schemas/question.schema';
import { AnswerOption, AnswerOptionSchema } from 'src/answer_options/schemas/answer_option.schema';
import { Survey, SurveySchema } from 'src/surveys/schema/survey.entity';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: Question.name,
          schema: QuestionSchema,
        },
        {
          name: AnswerOption.name,
          schema: AnswerOptionSchema,
        },        
        {
          name: Survey.name,
          schema: SurveySchema,
        },
  
      ]),
    ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
