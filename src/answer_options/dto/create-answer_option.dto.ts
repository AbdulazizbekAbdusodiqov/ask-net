import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerOptionDto {
  @ApiProperty({ example: 1 })
  question_id: number;

  @ApiProperty({ example: "Ha" })
  option_uzb: string;

  @ApiProperty({ example: "Да" })
  option_rus: string;

  @ApiProperty({ example: "67af298404962fc0b91e09cb" })
  surveys: string; 
}
