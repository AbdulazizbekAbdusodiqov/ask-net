import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Client } from 'src/client/schemas/client.schema';
import { Survey } from './schema/survey.entity';
import { Statistic } from 'src/statistics/schemas/statistic.schema';
import { Question } from 'src/question/schemas/question.schema';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<Survey>,
    @InjectModel(Client.name) private clientModel: Model<Client>,
    @InjectModel(Statistic.name) private statisticModel: Model<Statistic>,
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) { }

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = new this.surveyModel(createSurveyDto);
    await survey.save();
    return survey;
  }

  async findAll() {
    return this.surveyModel.find().populate('clients').populate('statictis').populate('question');
  }

  async findOne(id: string) {
    return this.surveyModel.findById(id).populate('clients').populate('statictis').populate('question');
  }

  async update(id: string, updateSurveyDto: UpdateSurveyDto) {
    return this.surveyModel.findByIdAndUpdate(id, updateSurveyDto, { new: true });
  }

  async remove(id: string) {
    return this.surveyModel.findByIdAndDelete(+id);
  }
}
