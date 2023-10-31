import { redirect, RedirectType } from 'next/navigation';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import supabase from '@/supabase/supabase';

export default async function Signup() {
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

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/auth/sign-up" method="POST">
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
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
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
                />
              </div>
            </div>

            <div>
              <button className="btn btn-primary w-full">Create account</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
