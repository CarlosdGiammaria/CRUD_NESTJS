import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  // Al actualizar, los campos pueden venir o no (?), pero si vienen deben ser string
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
