import { Optional } from 'src/core/utils/Optional'

export interface BudgetProps {
  id: string
  categoryId: string
  month: number
  year: number
  amount: number
  exchangeRate?: number | null
  createdAt: Date
  updatedAt: Date
}

export class Budget implements BudgetProps {
  private _props: BudgetProps

  constructor(props: BudgetProps) {
    this._props = props
  }

  static create(
    props: Optional<BudgetProps, 'id' | 'createdAt' | 'updatedAt'>
  ): Budget {
    return new Budget({
      id: props.id || crypto.randomUUID(),
      categoryId: props.categoryId,
      month: props.month,
      year: props.year,
      amount: props.amount,
      exchangeRate: props.exchangeRate,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date()
    })
  }

  update(
    props: Partial<Omit<BudgetProps, 'id' | 'createdAt' | 'updatedAt'>>
  ): void {
    this._props = {
      ...this._props,
      ...props,
      updatedAt: new Date()
    }
  }

  get id(): string {
    return this._props.id
  }

  get categoryId(): string {
    return this._props.categoryId
  }

  get month(): number {
    return this._props.month
  }

  get year(): number {
    return this._props.year
  }

  get amount(): number {
    return this._props.amount
  }

  get exchangeRate(): number | null | undefined {
    return this._props.exchangeRate
  }

  get createdAt(): Date {
    return this._props.createdAt
  }

  get updatedAt(): Date {
    return this._props.updatedAt
  }
}
