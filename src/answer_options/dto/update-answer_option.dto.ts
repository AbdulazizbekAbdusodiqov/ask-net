import { PartialType } from '@nestjs/swagger';
import { CreateAnswerOptionDto } from './create-answer_option.dto';

export class UpdateAnswerOptionDto extends PartialType(CreateAnswerOptionDto) {}
