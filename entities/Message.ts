import { User } from "./User";
import { SharedManyToOne, SharedEntity, SharedPrimaryGeneratedColumn, SharedColumn, SharedBaseEntity } from "~/utils/typeorm";

@SharedEntity()
export class Message extends SharedBaseEntity {
	@SharedPrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@SharedManyToOne(() => User, user => user.sentMessages, { onDelete: "CASCADE" })
	public from: User;

	@SharedManyToOne(() => User, user => user.receivedMessages, { onDelete: "CASCADE" })
	public to: User;

	@SharedColumn({ type: "bool", default: false })
	public seen: boolean;

	@SharedColumn({ type: "date", default: () => "CURRENT_TIMESTAMP" })
	public date: Date;

	@SharedColumn({ type: "varchar", length: 100 })
	public content: string;

	constructor() {
		super();
	}

	public representation(): string {
		return `${this.from.fullName()} -> ${this.to.fullName()}: ${this.content}`;
	}
}
