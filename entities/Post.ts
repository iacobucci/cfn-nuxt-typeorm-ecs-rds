import { User } from "./User";
import { ManyToMany, Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number = 0;

	@Column({ type: "varchar", length: 100 })
	content: string = "";

	@ManyToOne(() => User, (user) => user.posts)
	@JoinColumn()
	author: User;

	@ManyToMany(() => User, (user) => user.likedPosts)
	@JoinTable()
	likedBy: User[];

	constructor() {
		super();
	}
}
