import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Question } from "src/question/schemas/question.schema";

export type AnswerOptionDocument = HydratedDocument<AnswerOption>;
@Schema({ versionKey: false})

export class AnswerOption {
    @Prop()
    question_id: number;    
    @Prop()
    option_uzb: number;    
    @Prop()
    option_rus: number;

      @Prop({type: [{type: mongoose.Schema.ObjectId,ref: "Question",},],})
      surveys: Question[];
}
export const AnswerOptionSchema = SchemaFactory.createForClass(AnswerOption);
