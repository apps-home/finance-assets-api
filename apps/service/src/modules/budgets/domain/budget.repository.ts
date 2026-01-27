import { Budget } from './budget.entity'

export abstract class BudgetRepository {
  abstract list(params: any): Promise<Budget[]>
  abstract save(budget: Budget): Promise<void>
  abstract findById(id: string): Promise<Budget | null>
  abstract delete(id: string): Promise<void>
}
