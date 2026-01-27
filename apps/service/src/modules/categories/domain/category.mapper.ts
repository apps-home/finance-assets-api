import { Category, CategoryProps } from './category.entity'

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

  static toHTTP(category: Category): CategoryProps {
    return {
      id: category.id,
      name: category.name,
      currency: category.currency,
      userId: category.userId,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt
    }
  }
}
