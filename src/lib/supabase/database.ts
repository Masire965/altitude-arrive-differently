export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      booking_requests: {
        Row: {
          id: string;
          reference: string;
          full_name: string;
          email: string;
          phone: string;
          nationality: string;
          airline: string;
          flight_number: string;
          arrival_airport: string;
          departure_airport: string;
          travel_date: string;
          travel_time: string;
          service_type: string;
          additional_notes: string;
          source_path: string;
          referrer: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          reference: string;
          full_name: string;
          email: string;
          phone: string;
          nationality?: string;
          airline: string;
          flight_number: string;
          arrival_airport: string;
          departure_airport: string;
          travel_date: string;
          travel_time: string;
          service_type: string;
          additional_notes?: string;
          source_path?: string;
          referrer?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["booking_requests"]["Insert"]>;
        Relationships: [];
      };
      contact_inquiries: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          subject: string;
          message: string;
          source_path: string;
          referrer: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone?: string;
          subject?: string;
          message: string;
          source_path?: string;
          referrer?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_inquiries"]["Insert"]>;
        Relationships: [];
      };
      corporate_inquiries: {
        Row: {
          id: string;
          company_name: string;
          full_name: string;
          email: string;
          phone: string;
          requirements: string;
          source_path: string;
          referrer: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_name: string;
          full_name: string;
          email: string;
          phone: string;
          requirements?: string;
          source_path?: string;
          referrer?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["corporate_inquiries"]["Insert"]>;
        Relationships: [];
      };
      newsletter_subscriptions: {
        Row: {
          id: string;
          email: string;
          source_path: string;
          referrer: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          source_path?: string;
          referrer?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["newsletter_subscriptions"]["Insert"]>;
        Relationships: [];
      };
      service_pages: {
        Row: {
          id: string;
          slug: string;
          title: string;
          eyebrow: string;
          summary: string;
          hero_image: string;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: never;
        Update: never;
        Relationships: [];
      };
      coverage_airports: {
        Row: {
          id: string;
          country: string;
          airport_code: string;
          airport_name: string;
          city: string;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: never;
        Update: never;
        Relationships: [];
      };
      testimonials: {
        Row: {
          id: string;
          full_name: string;
          role: string;
          organization: string;
          quote: string;
          sort_order: number;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: never;
        Update: never;
        Relationships: [];
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          category: string;
          title: string;
          summary: string;
          cover_image: string;
          published_at: string | null;
          is_published: boolean;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: never;
        Update: never;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}