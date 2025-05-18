"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail, Share2 } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export function SocialShare({ url, title, description = "" }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);
  
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const mailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`;
  
  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <div className="fixed z-40 bottom-6 right-6">
      <div className="relative">
        {/* Boutons de partage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-0 flex flex-col gap-3 items-center mb-2"
        >
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1877F2] text-white p-3 rounded-full shadow-md hover:brightness-110 transition-all"
            onClick={(e) => e.stopPropagation()}
            aria-label="Partager sur Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA1F2] text-white p-3 rounded-full shadow-md hover:brightness-110 transition-all"
            onClick={(e) => e.stopPropagation()}
            aria-label="Partager sur Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A66C2] text-white p-3 rounded-full shadow-md hover:brightness-110 transition-all"
            onClick={(e) => e.stopPropagation()}
            aria-label="Partager sur LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={mailUrl}
            className="bg-[#D44638] text-white p-3 rounded-full shadow-md hover:brightness-110 transition-all"
            onClick={(e) => e.stopPropagation()}
            aria-label="Partager par email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
        
        {/* Bouton principal */}
        <button
          onClick={toggleOpen}
          className={`p-4 rounded-full shadow-lg text-white transition-all ${
            isOpen ? "bg-gray-700 rotate-45" : "bg-primary hover:bg-primary-medium"
          }`}
          aria-label="Partager"
        >
          <Share2 size={24} />
        </button>
      </div>
    </div>
  );
}

export default SocialShare;