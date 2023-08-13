import { ApiProperty } from "@nestjs/swagger"

export class CreateFoodType {

    @ApiProperty({ example: 'Банан' })
    name: string
    @ApiProperty({ example: 'Sun Aug 13 2023 18:18:43 GMT+0200 (Eastern European Standard Time)' })
    expirationDate: Date
}