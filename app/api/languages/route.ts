import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Database } from '@/lib/database.types';
import { z } from 'zod';
import { StatusCode } from '@/utils/status-codes';

export const dynamic = 'force-dynamic';

const schema = z.object({
  project_id: z.string().min(1),
});

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { searchParams } = new URL(request.url);

  const valid = schema.safeParse({
    project_id: searchParams.get('project_id'),
  });

  if (!valid.success) {
    return NextResponse.json(valid, { status: StatusCode.BAD_REQUEST });
  }

  const { data, error } = await supabase.from('project_language').select().eq('project_id', valid.data.project_id);

  if (error) {
    return NextResponse.json({ message: error.message, code: error.code }, { status: 400 });
  }

  return NextResponse.json(data);
}
