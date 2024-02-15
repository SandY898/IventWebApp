// src/modules/role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Project])],
    providers: [ProjectService],
    controllers: [ProjectController],
})
export class ProjectsModule {}
