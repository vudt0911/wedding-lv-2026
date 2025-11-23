import { useEffect, useRef, useState } from "react";
import { FiMusic, FiVolumeX } from "react-icons/fi";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true); // Mặc định là muted (tắt)
  const [isLoaded, setIsLoaded] = useState(false);

  // Sử dụng file MP3 từ thư mục src/data (cùng cấp với weddingConfig.ts)
  const src = new URL('../data/song.mp3', import.meta.url).href;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Preload audio
    audio.preload = 'auto';
    audio.volume = 0.6;
    audio.muted = true; // Mặc định muted

    // Khi audio đã load xong
    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      // Nếu đang muted, bật nhạc
      audio.muted = false;
      setMuted(false);
      
      // Thử phát nếu chưa phát
      if (audio.paused) {
        audio.play().catch((error) => {
          console.log('Play failed:', error);
        });
      }
    } else {
      // Nếu đang phát, tắt nhạc (mute)
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src={src}
        preload="auto"
        muted={true}
      />
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-pink-400 shadow-[0_15px_35px_rgba(244,114,182,0.7)] transition hover:scale-105 active:scale-95"
        aria-label={muted ? "Bật nhạc" : "Tắt nhạc"}
      >
        {muted ? (
          <FiVolumeX className="text-2xl text-white" />
        ) : (
          <FiMusic className="text-2xl text-white" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
