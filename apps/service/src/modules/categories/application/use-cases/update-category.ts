import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { CategoryRepository } from '../../domain/category.repository'
import { UpdateCategoryPayload } from '../../domain/dto/update-category.dto'

type UpdateCategoryResponse = Either<Error, void>

@Injectable()
export class UpdateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    id: string,
    data: UpdateCategoryPayload
  ): Promise<UpdateCategoryResponse> {
    const existingCategory = await this.categoryRepository.findById(id)

    if (!existingCategory) {
      return left(new Error('Category not found'))
    }

    try {
      existingCategory.update(data)
    } catch (error: any) {
      return left(new Error('Failed to update category: ' + error.message))
    }

    await this.categoryRepository.save(existingCategory)

    return right(void 0)
  }
}
