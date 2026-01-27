import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { CategoryMapper } from '../category.mapper'
import { CategoryRepository } from '../category.repository'
import { CreateCategoryDto } from '../dto/create-category.dto'

type CreateCategoryResponse = Either<Error, void>

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryDto): Promise<CreateCategoryResponse> {
    const category = CategoryMapper.toDomain(data)

    await this.categoryRepository.create(category)

    return right(void 0)
  }
}
