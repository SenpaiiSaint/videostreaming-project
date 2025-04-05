"use client";

import { motion } from "framer-motion";

interface Video {
    id: string;
    title: string;
    url: string;
}

export default function VideoCard({ video }: { video: Video }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
            <a 
            href={`/video/${video.id}`} 
            className="text-blue-600 hover:underline"
            >
                Watch Now
            </a>
        </motion.div>
    );
}