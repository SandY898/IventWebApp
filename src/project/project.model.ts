import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

// Role Entity
@Entity('role_sprav')
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column({ nullable: false })
  role_name: string;
}

// Skills Entity
@Entity('skills_sprav')
export class Skills {
  @PrimaryGeneratedColumn()
  skills_id: number;

  @Column({ nullable: false })
  skill_name: string;
}

// Student Entity
@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  stud_id: number;

  @Column({ nullable: false })
  fname: string;

  @Column({ nullable: false })
  sname: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true, type: 'date' })
  date_reg: Date;

  @Column({ nullable: false, unique: true })
  login: string;

  @Column({ nullable: false })
  pass: string;
}

// Project Entity
@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({ nullable: false })
  p_name: string;

  @Column({ nullable: true, default: 'без описания' })
  description: string;

  @Column({ nullable: true })
  skills: string;

  @Column({ nullable: true, type: 'date' })
  startdate: Date;

  @Column({ nullable: true, type: 'date' })
  endgate: Date;

  @Column({ nullable: true, default: 0 })
  published: number;

  @Column({ nullable: true, default: 'under_approval' })
  status: string;

  @ManyToOne(() => Role, { nullable: true })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Skills, { nullable: true })
  @JoinColumn({ name: 'skills_id' })
  skills_relation: Skills;
}

// ProjectMember Entity
@Entity('projectmembers')
export class ProjectMember {
  @PrimaryGeneratedColumn()
  member_id: number;

  @ManyToOne(() => Project, { nullable: false, eager: true  })
  @JoinColumn({ name: 'project_id' ,})
  project: Project;

  @ManyToOne(() => Student, { nullable: false , eager: true })
  @JoinColumn({ name: 'stud_id', })
  student: Student;

  @Column({ nullable: true, type: 'date' })
  joindate: Date;

  @ManyToOne(() => Role, { nullable: true, eager: true  })
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
