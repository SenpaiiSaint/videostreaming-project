import { NextResponse } from "next/server";
import videos from "@/data/simulatedVideos.json";

export async function GET() {
    return NextResponse.json(videos);
}

