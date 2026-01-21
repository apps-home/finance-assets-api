import { Inject, Injectable } from '@nestjs/common'
import { Category } from '../../domain/category.entity'
import { CategoryRepository } from '../../domain/category.repository'
import { FinanceAssets } from '@lib/db'

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(@Inject('prismaFinanceAssets') private prisma: FinanceAssets) {}

  async list(params: any): Promise<Category[]> {
    throw new Error('Method not implemented.')
  }

  async create(category: Category): Promise<void> {
    await this.prisma.assetCategory.create({
      data: {
        id: category.id,
        name: category.name,
        currency: category.currency,
        userId: category.userId,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt
      }
    })
  }

  async findById(id: string): Promise<Category | null> {
    throw new Error('Method not implemented.')
  }

  async update(category: Category): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
