/* eslint-disable prettier/prettier */
 
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
 
/* eslint-disable prettier/prettier */

// import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { UsersService } from './users.service';

// @Controller('kumar')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get()
//   getAll() {
//     return this.usersService.findAll();
//   }

//   @Post()
//   create(@Body() body: { name: string; email:string;}) {
     
//     return this.usersService.create(body);
//   }

//   @Put(':id')
//   update(
//     @Param('id') id: string,
//     @Body() body: { name?: string; email: string;},
//   ) {
//     return this.usersService.update(Number(id), body);
//   }

//   @Delete(':id')
//   delete(@Param('id') id: string) {
//     return this.usersService.delete(Number(id));
//   }

//    @Delete()
//   deleteAll() {
// // eslint-di    sable-next-line @typescript-eslint/no-unsafe-return
//     return this.usersService.findAll();
//   }

// }
/*
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: {name:string,email:string,age:number}) {
    console.log('Request body :',body)
    return this.userService.createUser(body.name, body.email,body.age);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; email: string,age:number }) {
    return this.userService.updateUser(+id, body.name, body.email,body.age);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
*/
//senario: code for multiple tables-crud operations

/*
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: {name:string,email:string,age:number}) {
    console.log('Request body :',body)
    return this.userService.createUser(body.name, body.email,body.age);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; email: string,age:number }) {
    return this.userService.updateUser(+id, body.name, body.email,body.age);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
*/
//senario: code for multiple tables-crud operations

// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { UserService } from './users.service';


// @Controller('kumar')
// export class UsersController {
//   constructor(private readonly userService: UsersService) {}

//   @Post()
//   create(@Body() body: {name:string,email:string}) {
//     console.log('Request body :',body)
//     return this.userService.createkumar(body.name, body.email);
//   }

//   @Get()
//   findAll() {
//     return this.userService.getAllUsers();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.userService.getUserById(+id);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() body: { name: string; email: string }) {
//     return this.userService.updateUser(+id, body.name, body.email,body.age);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.deleteUser(+id);
//   }
// }
//senario: code for multiple tables-crud operations


import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('data')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':type')
  create(@Param('type') type: string, @Body() body: any) {
    return this.userService.create(type, body);
  }

  @Get(':type')
  findAll(@Param('type') type: string) {
    return this.userService.findAll(type);
  }

  @Get(':type/:id')
  findOne(@Param('type') type: string, @Param('id') id: string) {
    return this.userService.findOne(type, +id);
  }

  @Put(':type/:id')
  update(@Param('type') type: string, @Param('id') id: string, @Body() body: any) {
    return this.userService.update(type, +id, body);
  }

  @Delete(':type/:id')
  remove(@Param('type') type: string, @Param('id') id: string) {
    return this.userService.remove(type, +id);
  }
}