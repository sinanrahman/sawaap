import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "motion/react";

// Fallback folder icon if needed
const FolderOpenIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
  </svg>
);

const SawaapFolder = ({ className = "" }) => (
  <div className={`relative w-48 h-32 md:w-64 md:h-48 z-10 ${className}`}>
    <div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-[#145a2d] to-[#1e9952] rounded-t-2xl rounded-b-xl shadow-inner">
      <div className="absolute -top-4 md:-top-5 left-0 w-[40%] h-6 bg-[#1e9952] rounded-t-xl"></div>
    </div>
    <div className="absolute bottom-0 w-full h-[75%] bg-gradient-to-br from-[#29CD71] to-[#127a36] rounded-xl shadow-[0_-10px_40px_rgba(41,205,113,0.5)] flex items-center justify-center border-t border-[#29CD71] z-20">
       <img src="/logo.png" alt="Sawaap Logo" className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
    </div>
  </div>
);

const CARDS_DATA = [
  // Top row
  { text: 'Bills in WhatsApp', icon: '📄', initX: -220, initY: -180, initRot: -6, delay: 0 },
  { text: 'Files inside Downloads', icon: '📂', initX: 10, initY: -200, initRot: -2, delay: 0.1 },
  { text: 'Receipts lost in Gallery', icon: '📸', initX: 240, initY: -160, initRot: 8, delay: 0.2 },
  // Second row
  { text: 'Address shared months ago', icon: '📍', initX: -360, initY: -110, initRot: -8, delay: 0.3 },
  { text: 'Voice notes you forgot', icon: '📞', initX: -100, initY: -120, initRot: -3, delay: 0.4 },
  { text: 'Password sent in chat', icon: '🔐', initX: 150, initY: -110, initRot: 3, delay: 0.5 },
  { text: 'Shopping screenshots', icon: '🛒', initX: 360, initY: -90, initRot: 5, delay: 0.6 },
  // Third row
  { text: 'PDF buried in Chats', icon: '📑', initX: -260, initY: -50, initRot: -5, delay: 0.7 },
  { text: 'Payment confirmations', icon: '💳', initX: -20, initY: -60, initRot: -1, delay: 0.8 },
  { text: 'GST invoice somewhere', icon: '🧾', initX: 260, initY: -40, initRot: 4, delay: 0.9 },
  // Fourth row
  { text: 'Booking tickets lost', icon: '🎟', initX: -320, initY: 10, initRot: -6, delay: 1.0 },
  { text: 'Office documents mixed with memes', icon: '💼', initX: -30, initY: 0, initRot: -2, delay: 1.1 },
  { text: 'Certificates somewhere else', icon: '🎓', initX: 300, initY: 20, initRot: 4, delay: 1.2 },
  // Fifth row
  { text: 'Important videos in chat', icon: '🎥', initX: -240, initY: 70, initRot: -3, delay: 1.3 },
  { text: 'Great ideas disappear in chats', icon: '🧠', initX: -10, initY: 75, initRot: 0, delay: 1.4 },
  { text: 'Saved messages never found again', icon: '⭐', initX: 250, initY: 85, initRot: 5, delay: 1.5 },
];

const InteractiveCard = ({ data, progress, isOrganized, sliderActive }) => {
  // We use percentages for X and Y so it scales with screen size
  const yOffset = React.useMemo(() => Math.random() * 10 - 5, []);

  const x = useTransform(progress, [0, 1], [`${data.initX}px`, `0px`]);
  const y = useTransform(progress, [0, 1], [`${data.initY}px`, `-50px`]); // -50px is the vertical center of the folder icon
  const rotate = useTransform(progress, [0, 1], [data.initRot, data.initRot + (data.initX > 0 ? 180 : -180)]);
  const dynamicScale = useTransform(progress, [0, 0.8, 1], [1, 0.6, 0]); // Shrink down into the folder
  
  const dotOpacity = useTransform(progress, [0, 0.5], [1, 0]);
  const borderProgress = useTransform(progress, [0, 1], ['rgba(41,205,113,0.3)', 'rgba(41,205,113,0.9)']);
  const bgProgress = useTransform(progress, [0, 1], ['rgba(15,15,15,0.85)', 'rgba(20,20,20,0.95)']);
  const textProgress = useTransform(progress, [0, 1], ['#e5e7eb', '#29CD71']);

  if (isOrganized) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: data.delay * 0.5, type: "spring", bounce: 0.4 }}
      style={{ x, y, rotate }}
      className="absolute top-0 left-0"
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05, zIndex: 99 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ borderColor: borderProgress, backgroundColor: bgProgress, color: textProgress, scale: dynamicScale }}
          className="flex items-center gap-2 md:gap-3 backdrop-blur-md border rounded-full px-3 py-2 md:px-5 md:py-3 cursor-grab active:cursor-grabbing hover:z-50 transition-colors shadow-[0_0_15px_rgba(41,205,113,0.05)] whitespace-nowrap"
        >
          <motion.div style={{ opacity: dotOpacity }} className="flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#29CD71] shadow-[0_0_8px_rgba(41,205,113,0.8)]" />
          </motion.div>
          <span>{data.icon}</span>
          <span>{data.text}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function InteractiveProblemSection() {
  const [isOrganized, setIsOrganized] = useState(false);
  const [sliderActive, setSliderActive] = useState(false);
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(300);
  const HANDLE_WIDTH = 56; // ~3.5rem

  useEffect(() => {
    // Responsive slider width
    const updateWidth = () => {
      setSliderWidth(window.innerWidth < 640 ? 280 : 350);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const dragX = useMotionValue(0);
  const progress = useTransform(dragX, [0, sliderWidth - HANDLE_WIDTH], [0, 1]);

  // Background animations
  const bgBlur = useTransform(progress, [0, 1], ['150px', '50px']);
  const bgFilter = useTransform(bgBlur, (v) => `blur(${v})`);
  const bgOpacity = useTransform(progress, [0, 1], [0.1, 0.3]);
  const bgScale = useTransform(progress, [0, 1], [1, 0.5]);
  const bgColor = useTransform(progress, [0, 1], ['#B269EC', '#29CD71']);

  // Slider animations
  const fillWidth = useTransform(progress, [0, 1], ['0%', '100%']);
  const trackTextOpacity = useTransform(progress, [0, 0.5], [1, 0]);
  
  const folderOpacity = useTransform(progress, [0.4, 1], [0, 1]);
  const folderScale = useTransform(progress, [0.4, 1], [0.5, 1]);

  const handleDragEnd = () => {
    setSliderActive(false);
    if (progress.get() > 0.9) {
      animate(dragX, sliderWidth - HANDLE_WIDTH, { type: "spring", stiffness: 300, damping: 25 });
      setTimeout(() => setIsOrganized(true), 300);
    } else {
      animate(dragX, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  };

  const handleDragStart = () => {
    setSliderActive(true);
  };

  return (
    <section className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden h-screen min-h-[700px] flex flex-col justify-center" ref={containerRef}>

      {/* Header Badge */}
      <AnimatePresence>
        {!isOrganized && (
          <div className="absolute top-8 md:top-12 w-full flex justify-center z-[100] pointer-events-none">
            <motion.div
              key="header"
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <span className="section-label text-[#29CD71] bg-[#29CD71]/10 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-[#29CD71]/20 tracking-widest uppercase shadow-[0_0_20px_rgba(41,205,113,0.15)] whitespace-nowrap">
                04 — THE PROBLEM
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dynamic Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full mix-blend-multiply pointer-events-none"
        style={{
          x: "-50%",
          y: "-50%",
          filter: bgFilter,
          opacity: bgOpacity,
          scale: bgScale,
          backgroundColor: bgColor,
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 w-full h-full flex flex-col items-center">

        {/* Huge Background Text */}
        <AnimatePresence>
          {!isOrganized && (
            <div className="absolute top-[40%] w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-visible">
              <motion.div
                key="bg-text"
                exit={{ opacity: 0 }}
                className="-translate-y-1/2"
              >
                <h2 className="text-[28vw] md:text-[22vw] font-bold text-white/[0.04] leading-none tracking-tighter whitespace-nowrap text-center">
                  Your life
                </h2>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Cinematic Success State */}
        <AnimatePresence>
          {isOrganized && (
            <motion.div
              key="success-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center w-full z-50 pt-16 md:pt-20 pb-20 md:pb-32"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center mb-8 md:mb-12"
              >
                <span className="text-[#29CD71]">Sawaap</span> solves all.....
              </motion.h3>

              {/* 3D Folder with Logo */}
              <motion.div 
                layoutId="sawaap-folder"
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, duration: 1, delay: 0.3 }}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Glowing Base / Pedestal */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-0 w-[200px] md:w-[300px] h-[40px] md:h-[60px] bg-[#29CD71]/20 blur-2xl rounded-[100%]"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  className="absolute -bottom-2 md:-bottom-4 w-[180px] md:w-[250px] h-[20px] md:h-[30px] border border-[#29CD71]/50 rounded-[100%] shadow-[0_0_20px_rgba(41,205,113,0.8)]"
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 1 }}
                  className="absolute -bottom-4 md:-bottom-8 w-[250px] md:w-[350px] h-[30px] md:h-[40px] border border-[#29CD71]/20 rounded-[100%]"
                ></motion.div>

                <SawaapFolder />
              </motion.div>

              {/* Bottom Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 md:mt-16 text-center space-y-1 md:space-y-2 z-20"
              >
                <p className="text-gray-300 text-base md:text-xl font-medium">One place. All your files.</p>
                <p className="text-gray-400 text-xs md:text-base">Organized. Secure. Smart. Instant.</p>
              </motion.div>

              {/* Feature Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-2 md:gap-6 mt-6 md:mt-8 z-20"
              >
                {[
                  { icon: 'solar:folder-bold-duotone', text: 'Organized' },
                  { icon: 'solar:shield-check-bold-duotone', text: 'Secure' },
                  { icon: 'solar:stars-bold-duotone', text: 'Smart' },
                  { icon: 'solar:bolt-bold-duotone', text: 'Instant' },
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl border border-white/10 bg-[#1A1A1A]/80 backdrop-blur-md shadow-[0_0_15px_rgba(41,205,113,0.05)] transition-all hover:border-[#29CD71]/50 hover:shadow-[0_0_20px_rgba(41,205,113,0.2)]">
                    <iconify-icon icon={feature.icon} className="text-[#29CD71] text-xl md:text-3xl mb-1 md:mb-2"></iconify-icon>
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
              
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Chaos Area */}
        <AnimatePresence>
          {!isOrganized && (
            <motion.div
              key="chaos-area"
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full flex-grow flex items-center justify-center z-10"
            >
              {/* Scaling wrapper for perfect responsiveness */}
              <div className="absolute inset-0 flex items-center justify-center transform scale-[0.45] sm:scale-[0.6] md:scale-[0.85] lg:scale-100">
                <div className="relative w-0 h-0">
                  {/* Fading in Folder during drag */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-12 z-0 pointer-events-none">
                    <motion.div 
                      layoutId="sawaap-folder"
                      style={{ opacity: folderOpacity, scale: folderScale }}
                    >
                      <SawaapFolder />
                    </motion.div>
                  </div>

                  {CARDS_DATA.map((card, i) => (
                    <InteractiveCard
                      key={i}
                      data={card}
                      progress={progress}
                      isOrganized={isOrganized}
                      sliderActive={sliderActive}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Interactive Slider - Pinned to Section Bottom */}
      <AnimatePresence>
        {!isOrganized && (
          <div className="absolute bottom-12 md:bottom-20 w-full flex justify-center z-40">
            <motion.div
              key="slider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30, scale: 0.9, transition: { duration: 0.3 } }}
            >
              <div
                style={{ width: sliderWidth }}
                className="h-16 md:h-18 bg-[#0F0F0F]/80 backdrop-blur-xl border border-[#29CD71]/40 rounded-full p-1.5 relative flex items-center shadow-[0_0_40px_rgba(41,205,113,0.15),inset_0_2px_15px_rgba(0,0,0,0.8)] overflow-hidden"
              >

                {/* Progress Fill */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#29CD71]/10 to-[#29CD71]/30 rounded-full pointer-events-none"
                  style={{ width: fillWidth }}
                />

                {/* Track Text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ opacity: trackTextOpacity }}
                >
                  <div className="flex items-center gap-2 pl-8">
                    <motion.span
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-2 text-[#29CD71]"
                    >
                      SLIDE TO SOLVE <iconify-icon icon="solar:double-alt-arrow-right-linear" className="text-lg opacity-80" />
                    </motion.span>
                  </div>
                </motion.div>

                {/* Draggable Knob */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: sliderWidth - HANDLE_WIDTH - 12 }}
                  dragElastic={0.05}
                  dragMomentum={false}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  style={{ x: dragX }}
                  className="w-13 h-13 md:w-15 md:h-15 aspect-square bg-[#29CD71] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_25px_rgba(41,205,113,0.6),inset_0_2px_5px_rgba(255,255,255,0.4)] z-10 hover:scale-105 transition-transform shrink-0"
                >
                  <iconify-icon icon="solar:arrow-right-bold" className="text-[#0A0A0A] text-xl md:text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
