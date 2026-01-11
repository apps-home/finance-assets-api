import { Module } from '@nestjs/common'
import { BudgetRepository } from './domain/budget.repository'
import { CreateBudgetUseCase } from './domain/use-cases/create-budget'
import { BudgetController } from './infra/budget.controller'
import { PrismaBudgetRepository } from './infra/repositories/prisma.budget.repository'

@Module({
  controllers: [BudgetController],
  providers: [
    { provide: BudgetRepository, useClass: PrismaBudgetRepository },
    CreateBudgetUseCase
  ]
})
export class BudgetModule {}
