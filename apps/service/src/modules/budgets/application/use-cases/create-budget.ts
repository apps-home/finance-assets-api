import { Injectable } from '@nestjs/common'
import { Either, right } from 'src/core/utils/Either'
import { BudgetMapper } from '../../domain/budget.mapper'
import { BudgetRepository } from '../../domain/budget.repository'
import { CreateBudgetPayload } from '../../domain/dto/create-budget.dto'

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
