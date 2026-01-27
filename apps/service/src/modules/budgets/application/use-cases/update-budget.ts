import { Injectable } from '@nestjs/common'
import { Either, left, right } from 'src/core/utils/Either'
import { Budget } from '../budget.entity'
import { BudgetRepository } from '../budget.repository'
import { UpdateBudgetPayload } from '../dto/update-budget.dto'

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

    const updatedBudget = Budget.create({
      id: existingBudget.id,
      categoryId: data.categoryId ?? existingBudget.categoryId,
      month: data.month ?? existingBudget.month,
      year: data.year ?? existingBudget.year,
      amount: data.amount ?? existingBudget.amount,
      exchangeRate: data.exchangeRate ?? existingBudget.exchangeRate,
      createdAt: existingBudget.createdAt,
      updatedAt: new Date()
    })

    await this.budgetRepository.save(updatedBudget)

    return right(void 0)
  }
}
