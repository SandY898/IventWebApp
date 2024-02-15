import { Repository } from 'typeorm';
import { Project, ProjectMember, Role, Skills, Student } from './project.model';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class SkillsService {
    private readonly skillRepository;
    constructor(skillRepository: Repository<Skills>);
    findAll(): Promise<Skills[]>;
    findOne(id: number): Promise<Skills | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    update(id: number, projectData: Project): Promise<Project | undefined>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project | undefined>;
    create(projectData: Project): Promise<Project>;
    deleteOne(id: number): Promise<void>;
}
export declare class ProjectMemberService {
    private readonly projectMemberRepository;
    constructor(projectMemberRepository: Repository<ProjectMember>);
    findAll(): Promise<ProjectMember[]>;
    findOne(id: number): Promise<ProjectMember | undefined>;
    deleteOne(id: number): Promise<void>;
}
