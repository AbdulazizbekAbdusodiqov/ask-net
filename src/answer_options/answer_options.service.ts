import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnswerOptionDto } from './dto/create-answer_option.dto';
import { UpdateAnswerOptionDto } from './dto/update-answer_option.dto';
import { AnswerOption } from './schemas/answer_option.schema';
import { Question } from 'src/question/schemas/question.schema';

@Injectable()
export class AnswerOptionsService {
  constructor(
    @InjectModel(AnswerOption.name) private answerOptionModel: Model<AnswerOption>,
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async create(createAnswerOptionDto: CreateAnswerOptionDto) {
    const answerOption = new this.answerOptionModel(createAnswerOptionDto);
    await answerOption.save();
    return answerOption;
  }

  async findAll() {
    return this.answerOptionModel.find().populate('questions');
  }

  async findOne(id: string) {
    return this.answerOptionModel.findById(id).populate('questions');
  }

  async update(id: string, updateAnswerOptionDto: UpdateAnswerOptionDto) {
    return this.answerOptionModel.findByIdAndUpdate(id, updateAnswerOptionDto, { new: true });
  }

  async remove(id: string) {
    return this.answerOptionModel.findByIdAndDelete(id);
  }
}
