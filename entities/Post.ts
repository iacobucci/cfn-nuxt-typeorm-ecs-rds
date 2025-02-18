import { User } from "./User";
import { SharedManyToMany, SharedEntity, SharedPrimaryGeneratedColumn, SharedColumn, SharedBaseEntity, SharedOneToMany } from "~/utils/typeorm";

@SharedEntity()
export class Post extends SharedBaseEntity {
	@SharedPrimaryGeneratedColumn({ type: "int" })
	public id: number = 0;

	// @SharedManyToMany
	public tagged: User[];

	@SharedColumn({ type: "varchar", length: 100 })
	public content: string = "";

	constructor() {
		super();
	}
}
