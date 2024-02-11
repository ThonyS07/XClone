import { redirect } from "next/navigation";
import { AuthButtonServer } from "@/components/auth-buttonServer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Post } from "@/types/posts";

import { cookies } from "next/headers";

import PostsList from "@/components/posts-list";
import { Database } from "@/types/db";
const Home = async () => {
	const supabase = createServerComponentClient<Database>({ cookies });
	//  const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session === null) {
		redirect("/login");
	}
	let {
		data:posts,
		error,
		status,
	} = await supabase
		.from("posts")
		.select("*, user:users(name, avatar_url, user_name)")
			.order("created_at", { ascending: false });
	
	console.log(posts);
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
				<PostsList posts={posts as Post[]} />
			</section>
			<AuthButtonServer />
		</main>
	);
};
export default Home;
