// src/services/project.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Project,
  ProjectMember,
  Role,
  Skills,
  Student,
} from './project.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role | undefined> {
    return this.roleRepository.findOne({ where: { role_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
  }
}

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skills)
    private readonly skillRepository: Repository<Skills>,
  ) {}

  async findAll(): Promise<Skills[]> {
    return this.skillRepository.find();
  }

  async findOne(id: number): Promise<Skills | undefined> {
    return this.skillRepository.findOne({ where: { skills_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.skillRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Skill with ID ${id} not found`);
    }
  }
}

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student | undefined> {
    return this.studentRepository.findOne({ where: { stud_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
  }
}

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async update(id: number, projectData: Project): Promise<Project | undefined> {
    const existingProject = await this.projectRepository.findOne({ where: { project_id: id } });

    if (!existingProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    // Обновляем только те свойства, которые присутствуют в projectData
    if (projectData.p_name !== undefined) {
      existingProject.p_name = projectData.p_name;
    }

    if (projectData.description !== undefined) {
      existingProject.description = projectData.description;
    }

    if (projectData.skills !== undefined) {
      existingProject.skills = projectData.skills;
    }

    // Сохраняем обновленный проект в базе данных
    const updatedProject = await this.projectRepository.save(existingProject);

    return updatedProject;
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project | undefined> {
    return this.projectRepository.findOne({ where: { project_id: id } });
  }

  async create(projectData: Project): Promise<Project> {
    const project = this.projectRepository.create(projectData);
    return this.projectRepository.save(project);
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  }
}

@Injectable()
export class ProjectMemberService {
  constructor(
    @InjectRepository(ProjectMember)
    private readonly projectMemberRepository: Repository<ProjectMember>,
  ) {}

  async findAll(): Promise<ProjectMember[]> {
    return this.projectMemberRepository.find();
  }

  async findOne(id: number): Promise<ProjectMember | undefined> {
    return this.projectMemberRepository.findOne({ where: { member_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.projectMemberRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project Member with ID ${id} not found`);
    }
  }
}
