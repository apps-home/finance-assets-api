import { PartialType } from '@nestjs/mapped-types'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim()
    }
    return undefined
  })
  name: string

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim()
    }
    return undefined
  })
  currency: string
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}

export class FindAllCategoriesParamsDTO {}
