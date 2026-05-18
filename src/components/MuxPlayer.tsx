import { useState } from "react";
import { motion } from "motion/react";
import MuxPlayer from "@mux/mux-player-react/lazy";
import "./MuxPlayer.css";
export default function HeroVideo() {
  const [isReady, setIsReady] = useState(false);
  const playbackId = "NmIVbhSW6KkORqf01PBs01ChLDURgMUxxJ1601qrg01QGmM";

  return (
    <div className=" z-[-1] absolute top-0 w-full h-full overflow-hidden  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" w-full h-full p-0 m-0  inset-0 "
      >
        <MuxPlayer
          playbackId={playbackId}
          autoPlay
          muted
          loop
          playsInline
          accentColor="#ea580c"
          metadata={{ video_title: "Hero BG", viewer_user_id: "anon" }}
          onCanPlay={() => setIsReady(true)}
          className="
            muxPlayer
            w-full h-full lg:h-auto
          "
        />
      </motion.div>
    </div>
  );
}