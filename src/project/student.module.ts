// src/modules/role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './project.model';
import { StudentService } from './project.service';
import { StudentController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    providers: [StudentService],
    controllers: [StudentController],
})
export class StudentModule {}
