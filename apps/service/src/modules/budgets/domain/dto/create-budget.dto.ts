export class CreateBudgetDto {
  categoryId: string
  month: number
  year: number
  amount: number
  exchangeRate?: number | null
}
