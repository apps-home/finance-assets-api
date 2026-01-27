import { PartialType } from '@nestjs/mapped-types'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  name: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  currency: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  userId: string
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}

export class FindAllCategoriesParamsDTO {}
