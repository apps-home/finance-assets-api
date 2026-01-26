import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { Budget } from '../budget.entity'
import { BudgetRepository } from '../budget.repository'

export interface FindAllBudgetsParams {
  categoryId?: string
  month?: number
  year?: number
}

type FindAllBudgetsResponse = Either<Error, Budget[]>

@Injectable()
export class FindAllBudgetsUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(params: FindAllBudgetsParams): Promise<FindAllBudgetsResponse> {
    const budgets = await this.budgetRepository.list(params)

    return right(budgets)
  }
}
