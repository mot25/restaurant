import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FoodModel } from './model/Food.model';
import { CreateFoodType } from './dto/Food.dto';

@Injectable()
export class FoodService {

    constructor(
        @InjectModel(FoodModel) private foodRepositories: typeof FoodModel
    ) { }


    getAll() {
        return this.foodRepositories.findAll()
    }

    getById(id: string) {
        return this.foodRepositories.findByPk(id)
    }

    createFood(dto: CreateFoodType) {
        return this.foodRepositories.create(dto)
    }
}
