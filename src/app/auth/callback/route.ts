import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import {type NextRequest, NextResponse} from "next/server";


export const dinamyc= "force-dynamic"
export const GET = async (request: NextRequest) => {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
    }
 
    return NextResponse.redirect(requestUrl.origin)
}