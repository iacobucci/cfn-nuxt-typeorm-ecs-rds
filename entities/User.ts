import { SharedOneToMany, SharedManyToOne, SharedManyToMany, SharedEntity, SharedPrimaryGeneratedColumn, SharedColumn, SharedBaseEntity } from "~/utils/typeorm";
import { Message } from "./Message";
import { JoinTable } from "typeorm";

@SharedEntity()
export class User extends SharedBaseEntity {
	@SharedPrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@SharedColumn({ type: "varchar", length: 100 })
	public firstName: string = "";

	@SharedColumn({ type: "varchar", length: 100 })
	public lastName: string = "";

	@SharedOneToMany(() => Message, message => message.from)
	public sentMessages: Message[];

	@SharedOneToMany(() => Message, message => message.to)
	public receivedMessages: Message[];

	@SharedManyToMany(() => User)
	@JoinTable({ name: "user_friends" })
	public friends: User[];

	constructor() {
		super();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
