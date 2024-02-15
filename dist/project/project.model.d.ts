export declare class Role {
    role_id: number;
    role_name: string;
}
export declare class Skills {
    skills_id: number;
    skill_name: string;
}
export declare class Student {
    stud_id: number;
    fname: string;
    sname: string;
    email: string;
    date_reg: Date;
    login: string;
    pass: string;
}
export declare class Project {
    project_id: number;
    p_name: string;
    description: string;
    skills: string;
    startdate: Date;
    endgate: Date;
    published: number;
    status: string;
    role: Role;
    skills_relation: Skills;
}
export declare class ProjectMember {
    member_id: number;
    project: Project;
    student: Student;
    joindate: Date;
    role: Role;
}
