import { redirect, RedirectType } from 'next/navigation';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import supabase from '@/supabase/supabase';
import AuthMessages from '@/components/shared/authMessages';

export default async function Login() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/projects', RedirectType.replace);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex w-full items-center justify-center">
            <Logo />
          </div>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/auth/sign-in" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="johnsmith@email.com"
                  className="input input-bordered w-full"
                  //className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/forgot" className="text-primary font-semibold hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="*******"
                  required
                  className="input input-bordered w-full"
                  //className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <AuthMessages />

            <div>
              <button className="btn btn-primary w-full">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="text-primary font-semibold leading-6 hover:text-indigo-500">
              Create account now
            </a>
          </p>
        </div>
      </div>
    </>
  );

  // return (
  //   <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
  //     <Link href="/" className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
  //       >
  //         <polyline points="15 18 9 12 15 6" />
  //       </svg>{' '}
  //       Back
  //     </Link>
  //
  //     <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground" action="/auth/sign-in" method="post">
  //       <label className="text-md" htmlFor="email">
  //         Email
  //       </label>
  //       <input className="rounded-md px-4 py-2 bg-inherit border mb-6" name="email" placeholder="you@example.com" required/>
  //       <label className="text-md" htmlFor="password">
  //         Password
  //       </label>
  //       <input className="rounded-md px-4 py-2 bg-inherit border mb-6" type="password" name="password" placeholder="••••••••" required/>
  //       <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
  //         Sign In
  //       </button>
  //       <button formAction="/auth/sign-up" className="border border-gray-700 rounded px-4 py-2 text-white mb-2">
  //         Sign Up
  //       </button>
  //       <Messages />
  //     </form>
  //   </div>
  // )
}
