import { User } from "./User";
import { ManyToMany, Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";

@Entity()
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	// @ManyToMany
	public tagged: User[];

	@Column({ type: "varchar", length: 100 })
	public content: string = "";

	constructor() {
		super();
	}
}
