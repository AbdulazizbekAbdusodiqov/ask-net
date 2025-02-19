import { ApiProperty } from "@nestjs/swagger";

export class CreateStatisticDto {
  @ApiProperty({ example: 1 })
  survey_id: number;

  @ApiProperty({ example: 100 })
  total_responses: number;

  @ApiProperty({ example: 4.5 })
  average_rating: number;

  @ApiProperty({ type: [String], example: ["67af298404962fc0b91e09cb"] })
  surveys: string[];
}
