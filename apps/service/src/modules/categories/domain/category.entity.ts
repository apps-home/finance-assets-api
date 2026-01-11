import { Optional } from 'src/core/utils/Optional'

export interface CategoryProps {
  id: string
  name: string
  currency: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export class Category implements CategoryProps {
  private _props: CategoryProps

  constructor(props: CategoryProps) {
    this._props = props
  }

  static create(
    props: Optional<CategoryProps, 'id' | 'createdAt' | 'updatedAt'>
  ): Category {
    return new Category({
      id: props.id || crypto.randomUUID(),
      name: props.name,
      currency: props.currency,
      userId: props.userId,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date()
    })
  }

  get props(): CategoryProps {
    return this._props
  }

  get id(): string {
    return this._props.id
  }

  get name(): string {
    return this._props.name
  }

  get currency(): string {
    return this._props.currency
  }

  get userId(): string {
    return this._props.userId
  }

  get createdAt(): Date {
    return this._props.createdAt
  }

  get updatedAt(): Date {
    return this._props.updatedAt
  }
}
