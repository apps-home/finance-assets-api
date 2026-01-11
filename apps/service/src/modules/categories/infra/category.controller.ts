import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateCategoryDto } from '../domain/dto/create-category.dto'
import { UpdateCategoryDto } from '../domain/dto/update-category.dto'
import { CreateCategoryUseCase } from '../domain/use-cases/create-category'

@Controller('category')
export class CategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @Post()
  async create(@Body() data: CreateCategoryDto) {
    return await this.createCategoryUseCase.execute(data)
  }

  @Get()
  async findAll() {
    return `This action returns all category`
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} category`
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() _data: UpdateCategoryDto) {
    return `This action updates a #${id} category`
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} category`
  }
}
