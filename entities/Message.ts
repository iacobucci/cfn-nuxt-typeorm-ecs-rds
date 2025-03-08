import { User } from "./User";
import { ManyToOne, Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Message extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number = 0;

	@ManyToOne(() => User, user => user.sentMessages, { onDelete: "CASCADE" })
	from: User;

	@ManyToOne(() => User, user => user.receivedMessages, { onDelete: "CASCADE" })
	to: User;

	@Column({ type: "bool", default: false })
	seen: boolean;

	@Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
	date: Date;

	@Column({ type: "varchar", length: 100 })
	content: string;

	constructor() {
		super();
	}

	representation(): string {
		return `${this.from.fullName()} -> ${this.to.fullName()}: ${this.content}`;
	}
}
