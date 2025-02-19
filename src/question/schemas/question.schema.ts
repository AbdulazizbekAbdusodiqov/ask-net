import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Survey } from "src/surveys/schema/survey.entity";

export type QuestionDocument = HydratedDocument<Question>;
@Schema({ versionKey: false})

export class Question {
    @Prop()
    survey_id: number;
    @Prop()
    field_type: string;
    @Prop()
    question_uzb: string;
    @Prop()
    question_rus: string;
    @Prop()
    input_method: string;
    @Prop()
    parent_question_id: number;
    @Prop()
    image: string; 
    @Prop({type: [{type: mongoose.Schema.ObjectId,ref: "Survey",},],})
    surveys: Survey[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

