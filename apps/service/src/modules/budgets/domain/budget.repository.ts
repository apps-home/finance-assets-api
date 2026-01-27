import { FindAllBudgetsParams } from '../application/use-cases/find-all-budgets'
import { Budget } from './budget.entity'

export abstract class BudgetRepository {
  abstract list(params: FindAllBudgetsParams): Promise<Budget[]>
  abstract save(budget: Budget): Promise<void>
  abstract findById(id: string): Promise<Budget | null>
  abstract delete(id: string): Promise<void>
}
