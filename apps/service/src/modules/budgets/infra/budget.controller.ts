import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateBudgetDto } from '../domain/dto/create-budget.dto'
import { UpdateBudgetDto } from '../domain/dto/update-budget.dto'
import { CreateBudgetUseCase } from '../domain/use-cases/create-budget'

@Controller('budget')
export class BudgetController {
  constructor(private readonly createBudgetUseCase: CreateBudgetUseCase) {}

  @Post()
  async create(@Body() data: CreateBudgetDto) {
    const result = await this.createBudgetUseCase.execute(data)

    if (result.isLeft()) {
      throw new Error('Failed to create budget')
    }

    return { message: 'Budget created successfully' }
  }

  @Get()
  async findAll() {
    return `This action returns all budget`
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return `This action returns a #${id} budget`
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() _data: UpdateBudgetDto) {
    return `This action updates a #${id} budget`
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} budget`
  }
}
