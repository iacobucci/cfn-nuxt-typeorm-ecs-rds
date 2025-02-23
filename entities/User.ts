import { OneToMany, ManyToOne, ManyToMany, Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Message } from "./Message";
import { JoinTable } from "typeorm";

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@Column({ type: "varchar", length: 100 })
	public firstName: string = "";

	@Column({ type: "varchar", length: 100 })
	public lastName: string = "";

	@OneToMany(() => Message, message => message.from)
	public sentMessages: Message[];

	@OneToMany(() => Message, message => message.to)
	public receivedMessages: Message[];

	@ManyToMany(() => User)
	@JoinTable({ name: "user_following" })
	public following: User[];

	constructor() {
		super();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
