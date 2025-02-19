import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Survey } from "src/surveys/schema/survey.entity";

export type StatisticDocument = HydratedDocument<Statistic>;

@Schema({ versionKey: false })

export class Statistic {

  @Prop()
  survey_id: number;

  @Prop()
  total_responses: number;
  @Prop()
  average_rating: number;

  @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: "Survey", },], })
  surveys: Survey[];
}
export const StatisticSchema = SchemaFactory.createForClass(Statistic);