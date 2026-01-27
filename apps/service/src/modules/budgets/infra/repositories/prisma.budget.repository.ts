import { FinanceAssets } from '@lib/db'
import { Inject, Injectable } from '@nestjs/common'
import { FindAllBudgetsParams } from '../../application/use-cases/find-all-budgets'
import { Budget } from '../../domain/budget.entity'
import { BudgetRepository } from '../../domain/budget.repository'
import { PrismaBudgetMapper } from './prisma.budget.mapper'

@Injectable()
export class PrismaBudgetRepository implements BudgetRepository {
  constructor(@Inject('prismaFinanceAssets') private prisma: FinanceAssets) {}

  async list(params: FindAllBudgetsParams): Promise<Budget[]> {
    const records = await this.prisma.assetRecord.findMany({
      where: {
        ...(params.categoryId && { categoryId: params.categoryId }),
        ...(params.month && { month: params.month }),
        ...(params.year && { year: params.year })
      },
      orderBy: [{ year: 'desc' }, { month: 'desc' }]
    })

    return records.map(PrismaBudgetMapper.toDomain)
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
    const record = await this.prisma.assetRecord.findUnique({
      where: { id }
    })

    if (!record) {
      return null
    }

    return PrismaBudgetMapper.toDomain(record)
  }

  async delete(id: string): Promise<void> {
    await this.prisma.assetRecord.delete({
      where: { id }
    })
  }
}
