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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectMember = exports.Project = exports.Student = exports.Skills = exports.Role = void 0;
const typeorm_1 = require("typeorm");
let Role = class Role {
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Role.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Role.prototype, "role_name", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)('role_sprav')
], Role);
let Skills = class Skills {
};
exports.Skills = Skills;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Skills.prototype, "skills_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Skills.prototype, "skill_name", void 0);
exports.Skills = Skills = __decorate([
    (0, typeorm_1.Entity)('skills_sprav')
], Skills);
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "stud_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "fname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "sname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Student.prototype, "date_reg", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Student.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "pass", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)('students')
], Student);
let Project = class Project {
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "p_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'без описания' }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Project.prototype, "startdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], Project.prototype, "endgate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Project.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'under_approval' }),
    __metadata("design:type", String)
], Project.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Role)
], Project.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Skills, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'skills_id' }),
    __metadata("design:type", Skills)
], Project.prototype, "skills_relation", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)('projects')
], Project);
let ProjectMember = class ProjectMember {
};
exports.ProjectMember = ProjectMember;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectMember.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Project, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'project_id', }),
    __metadata("design:type", Project)
], ProjectMember.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Student, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'stud_id', }),
    __metadata("design:type", Student)
], ProjectMember.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], ProjectMember.prototype, "joindate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role, { nullable: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Role)
], ProjectMember.prototype, "role", void 0);
exports.ProjectMember = ProjectMember = __decorate([
    (0, typeorm_1.Entity)('projectmembers')
], ProjectMember);
//# sourceMappingURL=project.model.js.map