import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Statistic, StatisticSchema } from './schemas/statistic.schema';
import { Survey, SurveySchema } from 'src/surveys/schema/survey.entity';

@Module({  imports: [
    MongooseModule.forFeature([
      {
        name: Statistic.name,
        schema: StatisticSchema,
      },      {
        name: Survey.name,
        schema: SurveySchema,
      },

    ]),
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
