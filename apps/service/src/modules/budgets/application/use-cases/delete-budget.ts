import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { BudgetRepository } from '../../domain/budget.repository'

type DeleteBudgetResponse = Either<Error, void>

@Injectable()
export class DeleteBudgetUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(id: string): Promise<DeleteBudgetResponse> {
    const budget = await this.budgetRepository.findById(id)

    if (!budget) {
      return left(new Error('Budget not found'))
    }

    await this.budgetRepository.delete(id)

    return right(void 0)
  }
}
