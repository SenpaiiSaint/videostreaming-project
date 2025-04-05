"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VideoPlayer from "@/components/VideoPlayer";

interface Video {
  id: string;
  title: string;
  url: string;
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((vids: Video[]) => {
        const found = vids.find((v) => v.id === id);
        setVideo(found ?? null);
      });
  }, [id]);

  if (!video)
    return (
      <motion.div
        className="p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: 0.5 }}
      >
        Loading...
      </motion.div>
    );

    return (
        <motion.div
            className="min-h-screen p-8 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
            <VideoPlayer url={video.url} />
        </motion.div>
    );
}
