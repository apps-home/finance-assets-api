import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { BudgetRepository } from '../../domain/budget.repository'
import { UpdateBudgetPayload } from '../../domain/dto/update-budget.dto'

type UpdateBudgetResponse = Either<Error, void>

@Injectable()
export class UpdateBudgetUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(
    id: string,
    data: UpdateBudgetPayload
  ): Promise<UpdateBudgetResponse> {
    const existingBudget = await this.budgetRepository.findById(id)

    if (!existingBudget) {
      return left(new Error('Budget not found'))
    }

    try {
      existingBudget.update(data)
    } catch (error: any) {
      return left(new Error('Failed to update budget: ' + error.message))
    }

    await this.budgetRepository.save(existingBudget)

    return right(void 0)
  }
}
