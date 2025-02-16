import { User } from "./User";
import { SharedEntity, SharedPrimaryGeneratedColumn, SharedColumn, SharedBaseEntity } from "~/util/typeorm";

@SharedEntity()
export class Message extends SharedBaseEntity {
	@SharedPrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@SharedColumn()
	public from: User;

	@SharedColumn()
	public to: User;

	@SharedColumn({ type: "varchar", length: 100 })
	public message: string = "";

	constructor() {
		super();
	}

	public representation(): string {
		return `${this.from.fullName()} -> ${this.to.fullName()}: ${this.message}`;
	}
}
