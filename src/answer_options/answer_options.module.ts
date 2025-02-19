import { Module } from '@nestjs/common';
import { AnswerOptionsService } from './answer_options.service';
import { AnswerOptionsController } from './answer_options.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerOption, AnswerOptionSchema } from './schemas/answer_option.schema';
import { Question, QuestionSchema } from 'src/question/schemas/question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AnswerOption.name,
        schema: AnswerOptionSchema,
      },
      {
        name: Question.name,
        schema: QuestionSchema,
      },

    ]),
  ],
  controllers: [AnswerOptionsController],
  providers: [AnswerOptionsService],
})
export class AnswerOptionsModule {}
