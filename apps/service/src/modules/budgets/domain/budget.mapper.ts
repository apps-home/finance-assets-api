import { Budget } from './budget.entity'

export interface BudgetDomainDTO {
  categoryId: string
  month: number
  year: number
  amount: number
  exchangeRate?: number | null
}

export class BudgetMapper {
  static toDomain(raw: BudgetDomainDTO): Budget {
    return Budget.create({
      categoryId: raw.categoryId,
      month: raw.month,
      year: raw.year,
      amount: raw.amount,
      exchangeRate: raw.exchangeRate
    })
  }
}
