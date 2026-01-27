import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { CategoryMapper } from '../../domain/category.mapper'
import { CategoryRepository } from '../../domain/category.repository'
import { CreateCategoryPayload } from '../../domain/dto/create-category.dto'

type CreateCategoryResponse = Either<Error, void>

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryPayload): Promise<CreateCategoryResponse> {
    const category = CategoryMapper.toDomain(data)

    await this.categoryRepository.save(category)

    return right(void 0)
  }
}
