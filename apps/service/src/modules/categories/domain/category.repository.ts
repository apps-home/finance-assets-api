import { Category } from './category.entity'

export abstract class CategoryRepository {
  abstract list(params: any): Promise<Category[]>
  abstract create(category: Category): Promise<void>
  abstract findById(id: string): Promise<Category | null>
  abstract update(category: Category): Promise<void>
  abstract delete(id: string): Promise<void>
}
