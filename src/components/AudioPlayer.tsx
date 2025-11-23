import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { weddingConfig } from '../data/weddingConfig';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMinimized, setIsMinimized] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay prevented:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  if (!weddingConfig.backgroundMusic?.url) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingConfig.backgroundMusic.url}
        loop
        onEnded={() => setIsPlaying(false)}
      />

      {/* Minimized player button */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-wedding-rose text-white rounded-full shadow-lg flex items-center justify-center hover:bg-wedding-pink transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <FaPause className="text-lg" />
            ) : (
              <FaPlay className="text-lg ml-1" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded player */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-800">
                {weddingConfig.backgroundMusic.title || 'Nhạc nền'}
              </h3>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                Thu nhỏ
              </button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-wedding-rose text-white rounded-full flex items-center justify-center hover:bg-wedding-pink transition-colors"
              >
                {isPlaying ? (
                  <FaPause className="text-sm" />
                ) : (
                  <FaPlay className="text-sm ml-1" />
                )}
              </button>

              <div className="flex-1 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-gray-600 hover:text-wedding-rose transition-colors"
                >
                  {isMuted ? (
                    <FaVolumeMute className="text-sm" />
                  ) : (
                    <FaVolumeUp className="text-sm" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-wedding-rose"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AudioPlayer;

