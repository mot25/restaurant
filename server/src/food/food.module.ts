import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodModel } from './model/Food.model';

@Module({
  providers: [FoodService],
  controllers: [FoodController],
  imports: [
    SequelizeModule.forFeature([FoodModel])
  ]
})
export class FoodModule { }
