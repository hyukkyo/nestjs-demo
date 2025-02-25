import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// PartialType은 CreateUserDto의 모든 필수 속성들을 선택으로 만들어줌
