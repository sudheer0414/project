/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return ' hellow from nestjs!';
  }
}
