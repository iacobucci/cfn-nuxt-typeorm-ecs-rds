import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
	//@ts-ignore
	@PrimaryGeneratedColumn({ type: "int", isGenerated: true, generationStrategy: "increment" })
	public id: number = 0;

	//@ts-ignore
	@Column({ type: "varchar", length: 100 })
	public firstName: string = "";

	//@ts-ignore
	@Column({ type: "varchar", length: 100 })
	public lastName: string = "";

	constructor() {
		super();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
