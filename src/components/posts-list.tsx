import React from 'react'
import PostCard from "@/components/post_card";
import { type Post } from "@/types/posts";
const PostsList = ({ posts }: { posts: Post[]|null}) => {
	return (
		<div>
			{posts?.map((post) => {
				const { id, user, content } = post;

				const {
					name: userFullName,
					user_name: userName,
					avatar_url: avatarUrl
				} = user;
				return (
					<PostCard
						key={id}
						userFullName={userFullName}
						content={content}
						avatarUrl={avatarUrl}
						userName={userName}
					/>
				);
			})}
		</div>
	);
};

export default PostsList
