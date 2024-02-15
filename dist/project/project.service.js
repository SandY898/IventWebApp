"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectMemberService = exports.ProjectService = exports.StudentService = exports.SkillsService = exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_model_1 = require("./project.model");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async findAll() {
        return this.roleRepository.find();
    }
    async findOne(id) {
        return this.roleRepository.findOne({ where: { role_id: id } });
    }
    async deleteOne(id) {
        const result = await this.roleRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Role with ID ${id} not found`);
        }
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
let SkillsService = class SkillsService {
    constructor(skillRepository) {
        this.skillRepository = skillRepository;
    }
    async findAll() {
        return this.skillRepository.find();
    }
    async findOne(id) {
        return this.skillRepository.findOne({ where: { skills_id: id } });
    }
    async deleteOne(id) {
        const result = await this.skillRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Skill with ID ${id} not found`);
        }
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Skills)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillsService);
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async findAll() {
        return this.studentRepository.find();
    }
    async findOne(id) {
        return this.studentRepository.findOne({ where: { stud_id: id } });
    }
    async deleteOne(id) {
        const result = await this.studentRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async update(id, projectData) {
        const existingProject = await this.projectRepository.findOne({ where: { project_id: id } });
        if (!existingProject) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
        if (projectData.p_name !== undefined) {
            existingProject.p_name = projectData.p_name;
        }
        if (projectData.description !== undefined) {
            existingProject.description = projectData.description;
        }
        if (projectData.skills !== undefined) {
            existingProject.skills = projectData.skills;
        }
        const updatedProject = await this.projectRepository.save(existingProject);
        return updatedProject;
    }
    async findAll() {
        return this.projectRepository.find();
    }
    async findOne(id) {
        return this.projectRepository.findOne({ where: { project_id: id } });
    }
    async create(projectData) {
        const project = this.projectRepository.create(projectData);
        return this.projectRepository.save(project);
    }
    async deleteOne(id) {
        const result = await this.projectRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectService);
let ProjectMemberService = class ProjectMemberService {
    constructor(projectMemberRepository) {
        this.projectMemberRepository = projectMemberRepository;
    }
    async findAll() {
        return this.projectMemberRepository.find();
    }
    async findOne(id) {
        return this.projectMemberRepository.findOne({ where: { member_id: id } });
    }
    async deleteOne(id) {
        const result = await this.projectMemberRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Project Member with ID ${id} not found`);
        }
    }
};
exports.ProjectMemberService = ProjectMemberService;
exports.ProjectMemberService = ProjectMemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.ProjectMember)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectMemberService);
//# sourceMappingURL=project.service.js.map