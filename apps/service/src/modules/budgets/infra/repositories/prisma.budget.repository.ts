import { Inject, Injectable } from '@nestjs/common'
import { Budget } from '../../domain/budget.entity'
import { BudgetRepository } from '../../domain/budget.repository'
import { FinanceAssets } from '@lib/db'

@Injectable()
export class PrismaBudgetRepository implements BudgetRepository {
  constructor(@Inject('prismaFinanceAssets') private prisma: FinanceAssets) {}

  async list(params: any): Promise<Budget[]> {
    throw new Error('Method not implemented.')
  }

  async save(budget: Budget): Promise<void> {
    await this.prisma.assetRecord.upsert({
      where: {
        categoryId_month_year: {
          categoryId: budget.categoryId,
          month: budget.month,
          year: budget.year
        }
      },
      create: {
        id: budget.id,
        categoryId: budget.categoryId,
        month: budget.month,
        year: budget.year,
        amount: budget.amount,
        exchangeRate: budget.exchangeRate,
        createdAt: budget.createdAt,
        updatedAt: budget.updatedAt
      },
      update: {
        amount: budget.amount,
        exchangeRate: budget.exchangeRate,
        updatedAt: budget.updatedAt
      }
    })
  }

  async findById(id: string): Promise<Budget | null> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
