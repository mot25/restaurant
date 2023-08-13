import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodModel } from './food/model/Food.model';

@Module({
  imports: [
    FoodModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'restaurant',
      password: 'root',
      username: 'postgres',
      port: 5432,
      host: 'localhost',
      autoLoadModels: true,
      synchronize: true,
      models: [
        FoodModel
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
