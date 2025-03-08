import { OneToMany, ManyToOne, ManyToMany, Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Message } from "./Message";
import { Post } from "./Post";
import { JoinTable } from "typeorm";

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number = 0;

	@Column({ type: "varchar", length: 100 })
	username: string = "";

	@OneToMany(() => Message, message => message.from)
	sentMessages: Message[];

	@OneToMany(() => Message, message => message.to)
	receivedMessages: Message[];

	@OneToMany(() => Post, (post) => post.author)
	posts: Post[];

	@ManyToMany(() => Post, (post) => post.likedBy)
	likedPosts: Post[];

	@ManyToMany(() => User, (user) => user.friends)
	@JoinTable({ name: "user_friends" })
	friends: User[];

	@ManyToMany(() => User, (user) => user.followers)
	@JoinTable({ name: "user_following" })
	following: User[];

	@ManyToMany(() => User, (user) => user.following)
	followers: User[];

	constructor() {
		super();
	}
}
