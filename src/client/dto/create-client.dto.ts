import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString } from "class-validator";

export class CreateClientDto {
  @IsString()
  @ApiProperty({
    example: "Komron Mamataliyev",
  })
  full_name: string;

  @IsString()
  @ApiProperty({
    example: "KoKo",
  })
  company: string;

  @IsPhoneNumber('UZ')
  @ApiProperty({
    example: "+998900340604",
  })
  phone_number: string;

  @IsString()
  @ApiProperty({
    example: "very good company",
  })
  description: string;
}
