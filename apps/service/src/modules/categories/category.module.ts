import { Module } from '@nestjs/common'
import { CategoryRepository } from './domain/category.repository'
import { CreateCategoryUseCase } from './domain/use-cases/create-category'
import { CategoryController } from './infra/category.controller'
import { PrismaCategoryRepository } from './infra/repositories/prisma.category.repository'

@Module({
  controllers: [CategoryController],
  providers: [
    { provide: CategoryRepository, useClass: PrismaCategoryRepository },
    CreateCategoryUseCase
  ]
})
export class CategoryModule {}
