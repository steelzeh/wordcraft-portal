import { NextResponse } from 'next/server';
import { z } from 'zod';
import { StatusCode } from '@/utils/status-codes';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const schema = z.object({
    id: z.string(),
    translation: z.string().optional().nullable(),
    verified: z.boolean().optional(),
    char_limit: z.string().min(1).optional().nullable(),
  });

  const body = await request.json();
  const valid = schema.safeParse({ ...body, id: params.id });

  if (!valid.success) {
    return NextResponse.json(valid, { status: StatusCode.BAD_REQUEST });
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data, error } = await supabase
    .from('translation_asset')
    .update({ translation: valid.data.translation })
    .eq('id', valid.data.id)
    .select();

  if (error) {
    return NextResponse.json({ message: error.message, code: error.code }, { status: 400 });
  }

  return NextResponse.json(data);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const schema = z.object({
    id: z.string(),
  });

  const valid = schema.safeParse({ id: params.id });

  if (!valid.success) {
    return NextResponse.json(valid, { status: StatusCode.BAD_REQUEST });
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data, error } = await supabase.from('translation_asset').delete().eq('id', params.id).select();

  if (error) {
    return NextResponse.json({ message: error.message, code: error.code }, { status: 400 });
  }

  return NextResponse.json(data);
}
