"use client";
import {
	type Session,
	createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { GitHubIcon } from "./icons";
import { useRouter } from "next/navigation";


export const AuthButton = ({ session }: { session: Session | null }) => {
	const supabase = createClientComponentClient();
    const router = useRouter()
	const handleSignIn = () =>
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: "http://localhost:3000/auth/callback",
			},
		});
	const handleSignOut = () => {
        supabase.auth.signOut();
        router.refresh()
	};
	return (
		<div>
			{" "}
			{session === null ? (
				<button
					type='button'
					onClick={handleSignIn}
					className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'>
					<GitHubIcon />
					Sign in with Github
				</button>
			) : (
				<button onClick={handleSignOut}>SignOut</button>
			)}
		</div>
	);
};
