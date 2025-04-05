"use client";

import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";

interface Video {
  id: string;
  title: string;
  url: string;
}

export default function HomePage() {
  const { data: session } = useSession();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then(setVideos);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Video Streaming Platform</h1>
        {!session ? (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        ) : (
          <div>
            <span className="mr-4">
              Hello, {session.user?.name || session.user?.email}
            </span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </motion.div>
  );
}
