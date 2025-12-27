import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// This endpoint is called by Vercel Cron every 3 days to keep Supabase active
export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Simple query to keep the database active
    const { count, error } = await supabase
      .from("programs")
      .select("*", { count: "exact", head: true });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Database pinged successfully",
      programCount: count,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to ping database" },
      { status: 500 }
    );
  }
}
