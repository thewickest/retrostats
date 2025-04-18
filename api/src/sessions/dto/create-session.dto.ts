import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty()
  @IsNumber()
  gameId: number;
  @ApiProperty()
  @IsNumber()
  userId: number;
  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  initDate: Date;
  @ApiProperty()
  @IsNumber()
  duration: number;
  @ApiProperty()
  @IsNumber()
  score: number;
}
