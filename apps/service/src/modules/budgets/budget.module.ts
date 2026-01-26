import { Module } from '@nestjs/common'
import { BudgetRepository } from './domain/budget.repository'
import { CreateBudgetUseCase } from './domain/use-cases/create-budget'
import { DeleteBudgetUseCase } from './domain/use-cases/delete-budget'
import { FindAllBudgetsUseCase } from './domain/use-cases/find-all-budgets'
import { FindBudgetByIdUseCase } from './domain/use-cases/find-budget-by-id'
import { UpdateBudgetUseCase } from './domain/use-cases/update-budget'
import { BudgetController } from './infra/budget.controller'
import { PrismaBudgetRepository } from './infra/repositories/prisma.budget.repository'

@Module({
  controllers: [BudgetController],
  providers: [
    { provide: BudgetRepository, useClass: PrismaBudgetRepository },
    CreateBudgetUseCase,
    FindAllBudgetsUseCase,
    FindBudgetByIdUseCase,
    UpdateBudgetUseCase,
    DeleteBudgetUseCase
  ]
})
export class BudgetModule {}

