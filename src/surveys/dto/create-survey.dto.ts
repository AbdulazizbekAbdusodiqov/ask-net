import { ApiProperty } from "@nestjs/swagger";

export class CreateSurveyDto {
  @ApiProperty({ example: "So'rov nomi" })
  title_uzb: string;

  @ApiProperty({ example: "Survey name" })
  title_rus: string;

  @ApiProperty({ example: "So'rov haqida ma'lumot" })
  description_uzb: string;

  @ApiProperty({ example: "Описание анкеты" })
  description_rus: string;

  @ApiProperty({ example: "67af298404962fc0b91e09cb" })
  client_id: string;

  @ApiProperty({ example: 1 })
  location: number;

  @ApiProperty({ example: 10 })
  radius: number;

  @ApiProperty({ example: 100 })
  reward_per_participant: number;

  @ApiProperty({ example: 1000 })
  total_budget: number;

  @ApiProperty({ example: 18 })
  start_age: number;

  @ApiProperty({ example: 60 })
  finish_age: number;

  @ApiProperty({ example: "2025-05-01T00:00:00.000Z" })
  start_date: Date;

  @ApiProperty({ example: "2025-06-01T00:00:00.000Z" })
  finish_date: Date;

  @ApiProperty({ example: "uz" })
  target_lang: string;

  @ApiProperty({ example: "active" })
  status: string;

  @ApiProperty({ type: [String], example: ["67af298404962fc0b91e09cb"] })
  clients: string[];  // Client ID array as references

  @ApiProperty({ example: "67af298404962fc0b91e09cb" })
  statictis: string;  // Statistic ID as reference

  @ApiProperty({ example: "67af298404962fc0b91e09cb" })
  question: string;  // Question ID as reference
}
