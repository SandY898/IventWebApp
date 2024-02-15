// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, Skills, Student, Project, ProjectMember } from './project.model';
import {RoleModule} from "./role.module";
import {SkillsModule} from "./skills.module";
import {StudentModule} from "./student.module";
import {ProjectsModule} from "./projects.module";
import {ProjectmembersModule} from "./projectmembers.module"; // Import your models

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'hack',
      synchronize: true, // Set to false in production
      logging: true, // Set to false in production
      entities: [Role, Skills, Student, Project, ProjectMember],
    }),
    RoleModule,
      SkillsModule,
      StudentModule,
      ProjectsModule,
      ProjectmembersModule,
  ],
})
export class DatabaseModule {}
