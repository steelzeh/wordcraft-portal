'use client';

import { useSearchParams } from 'next/navigation';

export default function AuthMessages() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const message = searchParams.get('message');
  return (
    <>
      {error && <p className="text-error mt-4">{error}</p>}
      {message && <p className="text-error mt-4">{message}</p>}
    </>
  );
}
