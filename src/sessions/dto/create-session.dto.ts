import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class CreateSessionDto {
  @IsNumber()
  gameId: number;
  @IsNumber()
  userId: number;
  @Type(() => Date)
  @IsDate()
  initDate: string;
  @IsNumber()
  duration: number;
  @IsNumber()
  score: number;
}
