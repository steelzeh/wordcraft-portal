import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { StatusCode } from '@/utils/status-codes';
import { z } from 'zod';
import { ITranslation, ITranslationAsset } from '@/utils/mocks/translations.mock';

export const dynamic = 'force-dynamic';

const schema = z.object({
  project_id: z.string().min(1),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const valid = schema.safeParse({
    project_id: searchParams.get('project_id'),
  });

  if (!valid.success) {
    return NextResponse.json(valid, { status: StatusCode.BAD_REQUEST });
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data, error } = await supabase.rpc('fetch_translations_by_project', { p_project_id: valid.data.project_id }).select();

  if (error) {
    return NextResponse.json({ message: error.message, code: error.code }, { status: 400 });
  }

  const groupedTranslations = new Map<string, Functions<'fetch_translations_by_project'>[]>();

  // Populate the map with the grouped translations
  data.forEach(item => {
    if (!groupedTranslations.has(item.key)) {
      groupedTranslations.set(item.key, []);
    }
    groupedTranslations.get(item.key)?.push(item);
  });

  // Convert the map to the desired format
  const transformed: ITranslationAsset[] = [];
  groupedTranslations.forEach((translations, key) => {
    let keyId = '';

    const translationEntries: ITranslation[] = translations.map(translationData => {
      if (!keyId) keyId = translationData.key_id;

      return {
        id: translationData.asset_id,
        lang: translationData.code,
        lang_id: translationData.language_id,
        translation: translationData.translation,
        char_limit: undefined, // Specify char_limit if available
        verified: false, // Specify verified status if available
        created_at: translationData.created_at_asset,
      };
    });

    transformed.push({
      id: keyId,
      key: key,
      translations: translationEntries,
    });
  });

  return NextResponse.json(transformed);
}

export async function POST(request: Request) {
  const schema = z.object({
    key_id: z.string(),
    language_id: z.string(),
    translation: z.string().optional().nullable(),
  });

  const body = await request.json();
  const valid = schema.safeParse({ ...body });

  if (!valid.success) {
    return NextResponse.json(valid, { status: StatusCode.BAD_REQUEST });
  }

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data, error } = await supabase
    .from('translation_asset')
    .insert({ translation: valid.data.translation, key_id: valid.data.key_id, language_id: valid.data.language_id })
    .select();

  if (!data) {
    return NextResponse.json({ message: 'Nothing inserted?', code: StatusCode.BAD_REQUEST }, { status: StatusCode.BAD_REQUEST });
  }

  return NextResponse.json(data[0]);
}
