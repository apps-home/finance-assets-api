import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { CreateCategoryUseCase } from '../application/use-cases/create-category'
import { DeleteCategoryUseCase } from '../application/use-cases/delete-category'
import { FindAllCategoriesUseCase } from '../application/use-cases/find-all-categories'
import { FindCategoryByIdUseCase } from '../application/use-cases/find-category-by-id'
import { UpdateCategoryUseCase } from '../application/use-cases/update-category'
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto'

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly findAllCategoriesUseCase: FindAllCategoriesUseCase,
    private readonly findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase
  ) {}

  @Post()
  async create(@Body() data: CreateCategoryDTO) {
    const result = await this.createCategoryUseCase.execute(data)

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case Error:
          throw new BadRequestException(error.message)
        default:
          throw new InternalServerErrorException('Unexpected error')
      }
    }

    return { message: 'Category created successfully' }
  }

  @Get()
  async findAll(@Query() params: any) {
    const result = await this.findAllCategoriesUseCase.execute(params)

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case Error:
          throw new BadRequestException(error.message)
        default:
          throw new InternalServerErrorException('Unexpected error')
      }
    }

    return result.value
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.findCategoryByIdUseCase.execute(id)

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case Error:
          throw new BadRequestException(error.message)
        default:
          throw new InternalServerErrorException('Unexpected error')
      }
    }

    return result.value
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCategoryDTO) {
    const result = await this.updateCategoryUseCase.execute(id, data)

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case Error:
          throw new BadRequestException(error.message)
        default:
          throw new InternalServerErrorException('Unexpected error')
      }
    }

    return { message: 'Category updated successfully' }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.deleteCategoryUseCase.execute(id)

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case Error:
          throw new BadRequestException(error.message)
        default:
          throw new InternalServerErrorException('Unexpected error')
      }
    }

    return { message: 'Category deleted successfully' }
  }
}
