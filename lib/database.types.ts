export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      default_languages: {
        Row: {
          code: string
          created_at: string
          id: string
          localized: string
          name: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          localized: string
          name: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          localized?: string
          name?: string
        }
        Relationships: []
      }
      organization: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      organization_member: {
        Row: {
          created_at: string
          id: string
          is_owner: boolean
          org_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_owner?: boolean
          org_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_owner?: boolean
          org_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_member_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organization"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_member_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project: {
        Row: {
          created_at: string
          id: string
          name: string
          org_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          org_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          org_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organization"
            referencedColumns: ["id"]
          }
        ]
      }
      project_language: {
        Row: {
          code: string
          created_at: string
          id: string
          is_base: boolean
          language_id: string
          name: string
          project_id: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          is_base?: boolean
          language_id: string
          name: string
          project_id: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          is_base?: boolean
          language_id?: string
          name?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_language_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "default_languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_language_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
      }
      translation_asset: {
        Row: {
          created_at: string
          id: string
          key_id: string
          language_id: string
          translation: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          key_id: string
          language_id: string
          translation?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          key_id?: string
          language_id?: string
          translation?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "translation_asset_key_id_fkey"
            columns: ["key_id"]
            referencedRelation: "translation_key"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "translation_asset_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "project_language"
            referencedColumns: ["id"]
          }
        ]
      }
      translation_key: {
        Row: {
          created_at: string
          id: string
          key: string
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          project_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "translation_key_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "translation_key_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      fetch_project_languages_with_percentage: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          language_name: string
          translated_count: number
          total_count: number
          translation_percentage: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
