import { Exclude } from 'class-transformer';
import {
  BaseEntity as TypeOrmBaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User extends TypeOrmBaseEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column({ length: 25 })
  firstName?: string;

  @Column({ length: 25 })
  lastName?: string;

  @Column({ length: 50, nullable: true })
  email?: string;

  @Exclude({ toPlainOnly: true })
  @Column({ length: 255, select: false })
  password?: string;

  @ManyToOne(() => User, (user: User) => user.userID, { nullable: true })
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @CreateDateColumn({ type: 'timestamptz', select: false })
  createdAt: Date;

  @ManyToOne(() => User, (user: User) => user.userID, { nullable: true })
  @JoinColumn({ name: 'modifiedBy' })
  modifiedBy: User;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true, select: false })
  modifiedAt: Date;

  @Column({ type: 'timestamptz', nullable: true, select: false })
  deletedAt: Date;
  

  @ManyToOne(() => User, (user: User) => user.userID, { nullable: true })
  @JoinColumn({ name: 'deletedBy' })
  deletedBy: User;

}
