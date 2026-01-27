import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { CategoryProps } from '../../domain/category.entity'
import { CategoryMapper } from '../../domain/category.mapper'
import { CategoryRepository } from '../../domain/category.repository'

type FindCategoryByIdResponse = Either<Error, CategoryProps>

@Injectable()
export class FindCategoryByIdUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<FindCategoryByIdResponse> {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      return left(new Error('Category not found'))
    }

    return right(CategoryMapper.toHTTP(category))
  }
}
