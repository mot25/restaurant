import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodType } from './dto/Food.dto';

@Controller('food')
export class FoodController {

    constructor(
        private foodService: FoodService
    ) { }

    @Get()
    getAllFoods() {
        return this.foodService.getAll()
    }

    @Get(':id')
    getFoodById(@Param('id') id: string) {
        return this.foodService.getById(id)
    }

    @Post('create')
    createFood(@Body() dto: CreateFoodType) {
        return this.foodService.createFood(dto)
    }

}
