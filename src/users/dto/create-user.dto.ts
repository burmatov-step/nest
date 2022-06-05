import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'email пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный емайл"})
    readonly email: string

    @ApiProperty({example: '12345', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4, и длиннее 16'})
    readonly password: string
}


