import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common'
import { CreateBudgetDto } from '../domain/dto/create-budget.dto'
import { UpdateBudgetDto } from '../domain/dto/update-budget.dto'
import { CreateBudgetUseCase } from '../domain/use-cases/create-budget'
import { DeleteBudgetUseCase } from '../domain/use-cases/delete-budget'
import {
    FindAllBudgetsParams,
    FindAllBudgetsUseCase
} from '../domain/use-cases/find-all-budgets'
import { FindBudgetByIdUseCase } from '../domain/use-cases/find-budget-by-id'
import { UpdateBudgetUseCase } from '../domain/use-cases/update-budget'

@Controller('budgets')
export class BudgetController {
  constructor(
    private readonly createBudgetUseCase: CreateBudgetUseCase,
    private readonly findAllBudgetsUseCase: FindAllBudgetsUseCase,
    private readonly findBudgetByIdUseCase: FindBudgetByIdUseCase,
    private readonly updateBudgetUseCase: UpdateBudgetUseCase,
    private readonly deleteBudgetUseCase: DeleteBudgetUseCase
  ) {}

  @Post()
  async create(@Body() data: CreateBudgetDto) {
    const result = await this.createBudgetUseCase.execute(data)

    if (result.isLeft()) {
      throw new HttpException(result.value.message, HttpStatus.BAD_REQUEST)
    }

    return { message: 'Budget created successfully' }
  }

  @Get()
  async findAll(@Query() params: FindAllBudgetsParams) {
    const result = await this.findAllBudgetsUseCase.execute(params)

    if (result.isLeft()) {
      throw new HttpException(result.value.message, HttpStatus.BAD_REQUEST)
    }

    return result.value.map((budget) => budget.props)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.findBudgetByIdUseCase.execute(id)

    if (result.isLeft()) {
      throw new HttpException(result.value.message, HttpStatus.NOT_FOUND)
    }

    return result.value.props
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateBudgetDto) {
    const result = await this.updateBudgetUseCase.execute(id, data)

    if (result.isLeft()) {
      throw new HttpException(result.value.message, HttpStatus.NOT_FOUND)
    }

    return { message: 'Budget updated successfully' }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.deleteBudgetUseCase.execute(id)

    if (result.isLeft()) {
      throw new HttpException(result.value.message, HttpStatus.NOT_FOUND)
    }

    return { message: 'Budget deleted successfully' }
  }
}

