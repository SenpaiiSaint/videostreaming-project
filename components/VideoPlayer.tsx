"use client";

import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactPlayer url={url} controls width="100%" height="480px" />
    </motion.div>
  );
}
