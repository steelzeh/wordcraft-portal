import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import {redirect, RedirectType} from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function App() {
  redirect('/login', RedirectType.replace);
}
