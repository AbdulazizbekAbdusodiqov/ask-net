import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './schemas/question.schema';
import { Survey } from 'src/surveys/schema/survey.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
    @InjectModel(Survey.name) private surveyModel: Model<Survey>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = new this.questionModel(createQuestionDto);
    await question.save();
    return question;
  }

  async findAll() {
    return this.questionModel.find().populate('surveys');
  }

  async findOne(id: string) {
    return this.questionModel.findById(id).populate('surveys');
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto, { new: true });
  }

  async remove(id: string) {
    return this.questionModel.findByIdAndDelete(id);
  }
}
