import { User } from "./User";
import { ManyToOne, Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Message extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@ManyToOne(() => User, user => user.sentMessages, { onDelete: "CASCADE" })
	public from: User;

	@ManyToOne(() => User, user => user.receivedMessages, { onDelete: "CASCADE" })
	public to: User;

	@Column({ type: "bool", default: false })
	public seen: boolean;

	@Column({ type: "date", default: () => "CURRENT_TIMESTAMP" })
	public date: Date;

	@Column({ type: "varchar", length: 100 })
	public content: string;

	constructor() {
		super();
	}

	public representation(): string {
		return `${this.from.fullName()} -> ${this.to.fullName()}: ${this.content}`;
	}
}
