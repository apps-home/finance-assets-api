import { Prisma } from '@lib/db'
import { Category } from '../../domain/category.entity'

export class PrismaCategoryMapper {
  static toDomain(raw: Prisma.AssetCategoryGetPayload<{}>): Category {
    return Category.create({
      id: raw.id,
      name: raw.name,
      currency: raw.currency,
      userId: raw.userId,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt
    })
  }

  static toPrisma(category: Category) {
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
