// src/modules/role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectMember } from './project.model';
import { ProjectMemberService } from './project.service';
import { ProjectMemberController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ProjectMember])],
    providers: [ProjectMemberService],
    controllers: [ProjectMemberController],
})
export class ProjectmembersModule {}
