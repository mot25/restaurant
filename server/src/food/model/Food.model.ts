import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateFoodType } from "../dto/Food.dto";

@Table({ tableName: 'food', createdAt: false, updatedAt: false })
export class FoodModel extends Model<FoodModel, CreateFoodType> {
    @Column({ type: DataType.NUMBER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false })
    name: string

    @Column({ type: DataType.DATE, allowNull: false })
    expirationDate: Date
}