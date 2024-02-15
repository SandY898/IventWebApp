// src/modules/role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skills } from './project.model';
import { SkillsService } from './project.service';
import { SkillsController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Skills])],
    providers: [SkillsService],
    controllers: [SkillsController],
})
export class SkillsModule {}
