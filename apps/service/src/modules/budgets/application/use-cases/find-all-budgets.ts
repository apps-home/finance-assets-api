import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { BudgetProps } from '../budget.entity'
import { BudgetMapper } from '../budget.mapper'
import { BudgetRepository } from '../budget.repository'

export interface FindAllBudgetsParams {
  categoryId?: string
  month?: number
  year?: number
}

type FindAllBudgetsResponse = Either<Error, BudgetProps[]>

@Injectable()
export class FindAllBudgetsUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(params: FindAllBudgetsParams): Promise<FindAllBudgetsResponse> {
    const budgets = await this.budgetRepository.list(params)

    return right(budgets.map(BudgetMapper.toHTTP))
  }
}
