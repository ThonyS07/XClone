import { type Database } from "./db";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];
type UserEntity =
	Database["public"]["Views"]["users"]["Row"] ;

export type Post = PostEntity & {
	user: UserEntity;
};
