import { IsString } from 'class-validator';
export class CreateTaskDto {
  // IsString comprueba de que sean tipo texto 
  @IsString()
  title: string;

  @IsString()
  description: string;

}
