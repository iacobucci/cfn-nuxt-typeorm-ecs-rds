import { SharedEntity, SharedPrimaryGeneratedColumn, SharedColumn, SharedBaseEntity } from "~/util/typeorm";

@SharedEntity()
export class User extends SharedBaseEntity {
	@SharedPrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	@SharedColumn({ type: "varchar", length: 100 })
	public firstName: string = "";

	@SharedColumn({ type: "varchar", length: 100 })
	public lastName: string = "";

	constructor() {
		super();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	static ciao() { return "ciao" }
}
