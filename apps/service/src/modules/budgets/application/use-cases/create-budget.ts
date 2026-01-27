import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { BudgetMapper } from '../budget.mapper'
import { BudgetRepository } from '../budget.repository'
import { CreateBudgetPayload } from '../dto/create-budget.dto'

type CreateBudgetResponse = Either<Error, void>

@Injectable()
export class CreateBudgetUseCase {
  constructor(private budgetRepository: BudgetRepository) {}

  async execute(data: CreateBudgetPayload): Promise<CreateBudgetResponse> {
    const budget = BudgetMapper.toDomain(data)

    await this.budgetRepository.save(budget)

    return right(void 0)
  }
}
