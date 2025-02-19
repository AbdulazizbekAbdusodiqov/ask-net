import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {
  @ApiProperty({ example: 1 })
  survey_id: number;

  @ApiProperty({ example: "ko'p variantli" })
  field_type: string;

  @ApiProperty({ example: "Ismingiz nima?" })
  question_uzb: string;

  @ApiProperty({ example: "Как вас зовут?" })
  question_rus: string;

  @ApiProperty({ example: "matn" })
  input_method: string;

  @ApiProperty({ example: 0 })
  parent_question_id: number;

  @ApiProperty({ example: "rasm.png" })
  image: string;

  @ApiProperty({ type: [String], example: ["67af298404962fc0b91e09cb"] })
  surveys: string[];  // Survey ID array as references
}
