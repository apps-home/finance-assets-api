import { Module } from '@nestjs/common'
import { InfraModule } from './infra/infra.module'
import { BudgetModule } from './modules/budgets/budget.module'
import { CategoryModule } from './modules/categories/category.module'

@Module({
  imports: [InfraModule, CategoryModule, BudgetModule]
})
export class AppModule {}
