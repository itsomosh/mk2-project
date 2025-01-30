import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpotify, FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaShoppingCart } from 'react-icons/fa';

const tracks = [
  {
    title: "The Plan ft. IddiSinger",
    url: "https://youtu.be/T5NLcN5FV_8"
  },
  {
    title: "Trust None",
    url: "https://youtu.be/T5hAAhg23bI"
  },
  {
    title: "MK10 VOL.III TRAILER",
    url: "https://youtu.be/06KTKEBt3ns"
  },
  {
    title: "MK10 VOL.III",
    url: "https://youtu.be/OLKLb4P2ETU"
  },
  {
    title: "CHAOS ft. HR The Messenger & Hassano",
    url: "https://youtu.be/b78cQks8BKE"
  },
  {
    title: "Doing Well",
    url: "https://youtu.be/5IsOiJkU8wI"
  },
  {
    title: "IMANI",
    url: "https://youtu.be/J93oLiInwVQ"
  },
  {
    title: "Deep Down",
    url: "https://youtu.be/NuGkxjcZgyk"
  },
  {
    title: "EQUAL ft. V Trap",
    url: "https://youtu.be/25koIox-l1k"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">MK TENA</h1>
          <div className="social-links flex space-x-4">
            <a href="https://open.spotify.com/artist/2HaOR22reVpfXDk5N4sYVw" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaSpotify className="text-2xl" />
            </a>
            <a href="https://www.youtube.com/@MusaKiama" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/musa_kiama" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://web.facebook.com/MusaKiama" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://www.tiktok.com/@musa_kiama" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
              <FaTiktok className="text-2xl" />
            </a>
            <a href="https://x.com/Musa_Kiama" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://mk10.hustlesasa.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaShoppingCart className="text-2xl" />
            </a>
          </div>
        </nav>
      </header>

      <div className="hero-section">
        <div className="hero-image"></div>
        <main className="content-wrapper container mx-auto px-6 pt-24">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Sound Engineer | Music Producer</h2>
              <p className="text-xl text-gray-400">Crafting stories through sound</p>
            </motion.div>

            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                className="vinyl-record"
                animate={{ 
                  rotate: isOpen ? 360 : 0,
                  transition: { duration: 2, repeat: isOpen ? Infinity : 0, ease: "linear" }
                }}
              >
                <div className="vinyl-grooves"></div>
                <div className="vinyl-label">
                  MK TENA
                </div>
                <div className="vinyl-shine"></div>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="track-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {tracks.map((track, index) => (
                    <motion.a
                      key={index}
                      href={track.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 bg-opacity-50 p-4 rounded-lg hover:bg-gray-700 transition-colors backdrop-blur-sm"
                      whileHover={{ scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold">{track.title}</h3>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
