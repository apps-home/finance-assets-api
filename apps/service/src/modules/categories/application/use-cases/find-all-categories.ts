import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { CategoryProps } from '../../domain/category.entity'
import { CategoryMapper } from '../../domain/category.mapper'
import { CategoryRepository } from '../../domain/category.repository'

export interface FindAllCategoriesParams {}

type FindAllCategoriesResponse = Either<Error, CategoryProps[]>

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    params: FindAllCategoriesParams
  ): Promise<FindAllCategoriesResponse> {
    const categories = await this.categoryRepository.list(params)

    return right(categories.map(CategoryMapper.toHTTP))
  }
}
