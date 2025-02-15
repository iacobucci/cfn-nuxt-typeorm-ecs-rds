import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "~/shared/typeorm";

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int"})
	public id: number = 0;

	@Column({ type: "varchar", length: 100 })
	public firstName: string = "";

	@Column({ type: "varchar", length: 100 })
	public lastName: string = "";

	constructor() {
		super();
	}

	public fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
