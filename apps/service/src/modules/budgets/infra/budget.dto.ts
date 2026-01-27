import { PartialType } from '@nestjs/mapped-types'
import { Expose, Transform } from 'class-transformer'
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator'

export class CreateBudgetDTO {
  @Expose()
  @IsString({ message: 'categoryId must be a string' })
  categoryId: string

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'month must be an integer' })
  @Min(1)
  @Max(12)
  month: number

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'year must be an integer' })
  @Min(2024)
  year: number

  @Expose()
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'amount must be an integer' })
  @Min(0)
  amount: number

  @Expose()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'exchangeRate must be an integer' })
  @Min(0)
  exchangeRate?: number | null
}

export class UpdateBudgetDTO extends PartialType(CreateBudgetDTO) {}

export class FindAllBudgetsParamsDTO {
  @Expose()
  @IsOptional()
  @Transform(({ value }) => value?.toString().trim())
  @IsString({ message: 'categoryId must be a string' })
  categoryId?: string

  @Expose()
  @IsOptional()
  @Transform(({ value }) => value?.toNumber())
  @IsInt({ message: 'month must be an integer' })
  @Min(1)
  @Max(12)
  month?: number

  @Expose()
  @IsOptional()
  @Transform(({ value }) => value?.toNumber())
  @IsInt({ message: 'year must be an integer' })
  @Min(2024)
  year?: number
}
