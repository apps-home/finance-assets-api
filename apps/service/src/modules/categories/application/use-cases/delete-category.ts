import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { CategoryRepository } from '../../domain/category.repository'

type DeleteCategoryResponse = Either<Error, void>

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<DeleteCategoryResponse> {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      return left(new Error('Category not found'))
    }

    await this.categoryRepository.delete(id)

    return right(void 0)
  }
}
