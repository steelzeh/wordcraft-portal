import { Database as DB } from '@/lib/database.types';

declare global {
  type Database = DB;
  type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
  type Functions<T extends keyof Database['public']['Functions']> = Database['public']['Functions'][T]['Returns'] extends (infer U)[]
    ? U
    : never;

  type Project = Tables<Project>;
  type ProjectLang = Tables<ProjectLang>;
  type ProjectLangPercentage = Functions<'fetch_project_languages_with_percentage'>;

  type TranslationAssets = Functions<'fetch_translations_by_project'>;
}
