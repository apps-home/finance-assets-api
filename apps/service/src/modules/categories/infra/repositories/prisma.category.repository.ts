import { FinanceAssets } from '@lib/db'
import { Inject, Injectable } from '@nestjs/common'
import { Category } from '../../domain/category.entity'
import { CategoryRepository } from '../../domain/category.repository'
import { PrismaCategoryMapper } from './prisma.category.mapper'

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(@Inject('prismaFinanceAssets') private prisma: FinanceAssets) {}

  async list(params: any): Promise<Category[]> {
    const categories = await this.prisma.assetCategory.findMany({
      where: {
        ...(params.userId && { userId: params.userId })
      },
      orderBy: { createdAt: 'desc' }
    })

    return categories.map(PrismaCategoryMapper.toDomain)
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
    const category = await this.prisma.assetCategory.findUnique({
      where: { id }
    })

    if (!category) return null

    return PrismaCategoryMapper.toDomain(category)
  }

  async save(category: Category): Promise<void> {
    await this.prisma.assetCategory.upsert({
      where: { id: category.id },
      create: {
        name: category.name,
        currency: category.currency,
        userId: category.userId,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt
      },
      update: {
        name: category.name,
        currency: category.currency,
        updatedAt: category.updatedAt
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.assetCategory.delete({
      where: { id }
    })
  }
}
