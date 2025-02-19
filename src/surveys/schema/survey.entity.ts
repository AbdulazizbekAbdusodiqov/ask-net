import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date, HydratedDocument } from "mongoose";
import { Client } from "src/client/schemas/client.schema";
import { Question } from "src/question/schemas/question.schema";
import { Statistic } from "src/statistics/schemas/statistic.schema";

export type SurveysDocument = HydratedDocument<Survey>;

@Schema()
export class Survey {
  @Prop()
  title_uzb: string;
  @Prop()
  title_rus: string;
  @Prop()
  description_uzb: string;
  @Prop()
  description_rus: string;
  @Prop()
  client_id: string;
  @Prop()
  location: number;
  @Prop()
  radius: number;
  @Prop()
  reward_per_participant: number;
  @Prop()
  total_budget: number;
  @Prop()
  start_age: number;
  @Prop()
  finish_age: number;
  @Prop({ type: Date })
 start_date: Date;
 @Prop({ type: Date })
 finish_date: Date;
 @Prop()
 target_lang: string;
 @Prop()
 status: string;

  @Prop({type: [{type: mongoose.Schema.ObjectId,ref: "Client",},],})
  clients: Client[];
  @Prop({type : mongoose.Schema.ObjectId, ref: "Statistic"})
  statictis:Statistic;
  @Prop({type : mongoose.Schema.ObjectId, ref: "Question"})
  question:Question;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
