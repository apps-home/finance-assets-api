import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { Budget } from '../budget.entity'
import { BudgetRepository } from '../budget.repository'

type FindBudgetByIdResponse = Either<Error, Budget>

@Injectable()
export class FindBudgetByIdUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(id: string): Promise<FindBudgetByIdResponse> {
    const budget = await this.budgetRepository.findById(id)

    if (!budget) {
      return left(new Error('Budget not found'))
    }

    return right(budget)
  }
}
