import { ProjectMemberService, ProjectService, RoleService, SkillsService, StudentService } from './project.service';
import { Project, Role, Skills, Student } from './project.model';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class SkillsController {
    private readonly skillService;
    constructor(skillService: SkillsService);
    findAll(): Promise<Skills[]>;
    findOne(id: number): Promise<Skills | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(projectData: Project): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project | undefined>;
    deleteOne(id: number): Promise<void>;
    update(id: number, projectData: Project): Promise<Project | undefined>;
}
export declare class ProjectMemberController {
    private readonly projectmembersService;
    constructor(projectmembersService: ProjectMemberService);
    findOne(id: number): Promise<any>;
    deleteOne(id: number): Promise<void>;
}
