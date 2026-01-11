import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { Category } from '../../domain/category.entity'
import { CategoryRepository } from '../../domain/category.repository'

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

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
