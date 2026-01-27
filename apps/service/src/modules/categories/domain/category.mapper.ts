import { Category } from './category.entity'

export interface CategoryDomainDTO {
  name: string
  currency: string
  userId: string
}

export class CategoryMapper {
  static toDomain(raw: CategoryDomainDTO): Category {
    return Category.create({
      name: raw.name,
      currency: raw.currency,
      userId: raw.userId
    })
  }
}
