// role.controller.ts
import { Controller, Get, Post, Param, ParseIntPipe, Body, Put } from '@nestjs/common';
import {
  ProjectMemberService,
  ProjectService,
  RoleService,
  SkillsService,
  StudentService,
} from './project.service';
import { Project, ProjectMember, Role, Skills, Student } from './project.model';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Role | undefined> {
    return this.roleService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.roleService.deleteOne(id);
  }
}
// skills.controller.ts

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillService: SkillsService) {}

  @Get()
  findAll(): Promise<Skills[]> {
    return this.skillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Skills | undefined> {
    return this.skillService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.skillService.deleteOne(id);
  }
}

// student.controller.ts

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Student | undefined> {
    return this.studentService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.studentService.deleteOne(id);
  }
}

// project.controller.ts

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() projectData: Project): Promise<Project> {
    const createdProject = await this.projectService.create(projectData);

    return createdProject;
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Project | undefined> {
    return this.projectService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectService.deleteOne(id);
  }

  @Put(':id') // Используйте Put вместо Post для обновления ресурса
  async update(@Param('id', ParseIntPipe) id: number, @Body() projectData: Project): Promise<Project | undefined> {
    const updatedProject = await this.projectService.update(id, projectData);
    return updatedProject;
  }

}

// project.controller.ts

@Controller('projectmembers')
export class ProjectMemberController {
  constructor(private readonly projectmembersService: ProjectMemberService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const projectMember = await this.projectmembersService.findOne(id);

    if (!projectMember) {
      // Handle the case where the project member is not found
      return null;
    }

    // Extract the desired fields from the project member
    const { member_id, joindate, project, student } = projectMember;
    const { project_id } = project;
    const { stud_id } = student;

    // Return the simplified response
    return {
      member_id,
      joindate,
      project_id,
      stud_id,
    };
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectmembersService.deleteOne(id);
  }
}

