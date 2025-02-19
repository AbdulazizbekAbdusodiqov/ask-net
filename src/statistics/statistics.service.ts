import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { Statistic } from './schemas/statistic.schema';
import { Survey } from 'src/surveys/schema/survey.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Statistic.name) private statisticModel: Model<Statistic>,
    @InjectModel(Survey.name) private surveyModel: Model<Survey>,
  ) {}

  async create(createStatisticDto: CreateStatisticDto) {
    const statistic = new this.statisticModel(createStatisticDto);
    await statistic.save();
    return statistic;
  }

  async findAll() {
    return this.statisticModel.find().populate('surveys');
  }

  async findOne(id: string) {
    return this.statisticModel.findById(id).populate('surveys');
  }

  async update(id: string, updateStatisticDto: UpdateStatisticDto) {
    return this.statisticModel.findByIdAndUpdate(id, updateStatisticDto, { new: true });
  }

  async remove(id: string) {
    return this.statisticModel.findByIdAndDelete(id);
  }
}
