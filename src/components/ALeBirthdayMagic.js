import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import * as Icons from 'lucide-react';

const ALeBirthdayMagic = () => {
  const [stage, setStage] = useState('intro');
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [activeWish, setActiveWish] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  
  const containerRef = useRef(null);
  
  // On garde useScroll mais on n'utilise pas les valeurs
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // PHOTOS D'ALE (à placer dans public/images/ale/)
  const photos = {
    photo1: "/images/ale/photo1.jpg",
    photo2: "/images/ale/photo2.jpg",
    photo3: "/images/ale/photo3.jpg"
  };

  // Récupérer les dimensions
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Souvenirs personnalisés
  const memories = [
    { 
      year: "Nos années d'enfance", 
      title: "Les bancs de l'école",
      desc: "Les mêmes classes au Gabon, les mêmes rires... Cette amitié qui a commencé sur les bancs de l'école et qui n'a jamais vraiment cessé, malgré les kilomètres.",
      color: "from-blue-300 to-indigo-300",
      image: "📚",
      icon: Icons.BookOpen
    },
    { 
      year: "Des chemins différents", 
      title: "Toujours dans mon cœur",
      desc: "Les quartiers différents, les écoles différentes, les villes différentes, les pays différents... Du Gabon au Rwanda, de la France au Rwanda, nos conversations ont traversé les frontières. Jamais vraiment éloignés l'un de l'autre.",
      color: "from-purple-300 to-pink-300",
      image: "🛤️",
      icon: Icons.Compass
    },
    { 
      year: "Aujourd'hui", 
      title: "Confidents malgré la distance",
      desc: "On se raconte nos joies, nos peines, nos cœurs brisés. Dans les moments difficiles, dans les doutes, dans les 'heartbreaks', on a toujours été là l'un pour l'autre. Une amitié rare, précieuse.",
      color: "from-pink-300 to-red-300",
      image: "💫",
      icon: Icons.Heart
    }
  ];

  // Qualités d'ALe
  const qualities = [
    { 
      icon: Icons.Moon, 
      text: "Une intuition profonde", 
      desc: "Cette capacité à ressentir les choses avant les autres, à comprendre sans qu'on explique",
      color: "text-indigo-400" 
    },
    { 
      icon: Icons.Sun, 
      text: "Une présence rayonnante", 
      desc: "Quand tu es là, tout semble plus lumineux. Tu as cette chaleur qui attire les autres",
      color: "text-yellow-500" 
    },
    { 
      icon: Icons.Heart, 
      text: "Un cœur de lionne", 
      desc: "Généreuse, fière, digne - tu donnes tout à ceux que tu aimes",
      color: "text-red-500" 
    },
    { 
      icon: Icons.Waves, 
      text: "Une sensibilité rare", 
      desc: "Cette capacité à naviguer dans les émotions, à comprendre la profondeur des choses",
      color: "text-blue-500" 
    },
    { 
      icon: Icons.Feather, 
      text: "Légère et libre", 
      desc: "Cette façon unique que tu as de traverser la vie, avec grâce et authenticité",
      color: "text-green-500" 
    },
    { 
      icon: Icons.Gem, 
      text: "Précieuse", 
      desc: "Il n'y a qu'une seule ALe, et ceux qui ont la chance de te connaître le savent",
      color: "text-purple-500" 
    }
  ];

  // MES SOUHAITS POUR ALE
  const wishes = [
    {
      icon: Icons.Heart,
      title: "L'AMOUR",
      wish: "Je te souhaite de trouver une bonne personne, quelqu'un qui saura voir en toi la merveille que tu es. Après tous ces petits heartbreaks que tu considères grands, tu mérites un amour vrai, sincère, à la hauteur de ton grand cœur. Quelqu'un qui te comprendra, te soutiendra, et t'aimera comme tu mérites d'être aimée.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Icons.GraduationCap,
      title: "LA RÉUSSITE SCOLAIRE",
      wish: "Que tes études brillent, que tu décroches tous tes diplômes avec succès. Tu as toujours été intelligente et déterminée. Que cette année scolaire soit couronnée de succès, que les portes s'ouvrent devant toi, et que tu ailles au bout de tous tes projets académiques.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Icons.Brain,
      title: "LA SAGESSE",
      wish: "Je te souhaite la sagesse dans tes choix, dans tes décisions. Celle qui te permettra de discerner les bonnes personnes des mauvaises, de prendre les bonnes directions, d'éviter les pièges de la vie. La sagesse du cœur et de l'esprit, pour naviguer sereinement.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Icons.Shield,
      title: "LA PROTECTION",
      wish: "Que tu sois toujours protégée, où que tu sois - au Gabon, en France, partout. Protégée des mauvaises rencontres, des énergies négatives, des peines inutiles. Qu'une lumière veille sur toi et t'accompagne à chaque pas.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Icons.Trophy,
      title: "LA SANTÉ",
      wish: "Une santé de fer, physique et mentale. Que ton corps soit fort, ton esprit tranquille. La santé, c'est la base de tout. Prends soin de toi, repose-toi quand il faut, et reste cette femme forte et rayonnante.",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Icons.Smile,
      title: "LA PAIX & LA JOIE",
      wish: "La paix dans ton cœur, la joie dans ton âme. Que chaque jour t'apporte son lot de sourires, de petits bonheurs simples, de moments de pure joie. La paix intérieure, celle qui fait que tout va bien, même quand tout va mal.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  // Particules magiques
  const MagicParticles = () => {
    const particles = [];
    const count = Math.min(20, Math.floor(dimensions.width / 60));
    
    for (let i = 0; i < count; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      
      particles.push(
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.2, 0],
            rotate: 360
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear"
          }}
        >
          {i % 5 === 0 && <Icons.Heart size={12} className="text-pink-300" />}
          {i % 5 === 1 && <Icons.Star size={12} className="text-yellow-300" />}
          {i % 5 === 2 && <Icons.Moon size={12} className="text-indigo-300" />}
          {i % 5 === 3 && <Icons.Sun size={12} className="text-orange-300" />}
          {i % 5 === 4 && <Icons.Sparkles size={12} className="text-purple-300" />}
        </motion.div>
      );
    }
    return <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>;
  };

  // Introduction
  if (stage === 'intro') {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 overflow-hidden">
        <MagicParticles />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-12"
            >
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-50 animate-pulse" />
                <Icons.Gift size={120} className="text-white relative z-10 mx-auto mt-8" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-9xl font-bold mb-8"
            >
              {'ALe'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  animate={{ 
                    color: ['#f472b6', '#a78bfa', '#60a5fa']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="inline-block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-12"
            >
              Des bancs de l'école aux confidences d'aujourd'hui ✨
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage('main')}
              className="px-8 md:px-12 py-4 md:py-6 bg-white/10 backdrop-blur-xl rounded-full text-white text-xl md:text-2xl font-semibold hover:bg-white/20 transition-all"
            >
              Découvre ta surprise
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Page principale
  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <MagicParticles />
      
      {/* SECTION HÉRO - Photo 1 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={photos.photo1}
            alt="ALE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {i % 2 === 0 ? (
                <Icons.Star size={24} className="text-yellow-300/40" fill="currentColor" />
              ) : (
                <Icons.Heart size={20} className="text-pink-300/40" fill="currentColor" />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-8"
          >
            <Icons.Crown size={80} className="text-yellow-300 mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-9xl font-bold text-white mb-4"
          >
            Joyeux Anniversaire
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-6xl font-light"
          >
            <span className="text-yellow-200 font-bold">ALE</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/80 mt-8 max-w-2xl mx-auto text-lg"
          >
            Du Rwanda à la France, de l'enfance à aujourd'hui, 
            une amitié qui traverse le temps et les kilomètres
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icons.ChevronDown size={40} className="text-white/70" />
        </motion.div>
      </section>

      {/* SECTION NOTRE HISTOIRE - Photo 2 */}
      <section className="py-16 md:py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20"
          >
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
              Notre chemin
            </span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto relative group"
          >
            <img
              src={photos.photo2}
              alt="ALe"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                >
                  <Icons.Sparkles size={20} className="text-yellow-300/60" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-4 text-white text-lg font-light bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              ✨ L'universitaire
            </motion.div>
          </motion.div>

          <div className="space-y-24">
            {memories.map((memory, index) => {
              const Icon = memory.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-gradient-to-br ${memory.color} p-8 rounded-3xl shadow-2xl cursor-pointer`}
                        onClick={() => setSelectedMemory(selectedMemory === index ? null : index)}
                      >
                        <div className="text-7xl mb-6">{memory.image}</div>
                        <h4 className="text-3xl font-bold text-white mb-2">{memory.title}</h4>
                        <p className="text-xl text-white/80 mb-3">{memory.year}</p>
                        
                        <AnimatePresence>
                          {selectedMemory === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-white text-lg border-t border-white/30 pt-6">
                                {memory.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {selectedMemory !== index && (
                          <p className="text-white/60 text-sm mt-4">
                            👆 Clique pour en savoir plus
                          </p>
                        )}
                      </motion.div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity }
                        }}
                      >
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
                          <Icon size={40} className="text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {index < memories.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-12">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-pink-400 to-purple-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION MES SOUHAITS POUR TOI - Photo 3 */}
      <section className="py-16 md:py-32 px-4 bg-gradient-to-b from-transparent via-pink-100/50 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Mes vœux pour toi
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour cette nouvelle année de ta vie, du fond du cœur, je te souhaite...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-4xl mx-auto relative group"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img
              src={photos.photo3}
              alt="ALe"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: 0
                  }}
                  animate={{
                    x: [null, Math.random() * 20 - 10 + "%"],
                    y: [null, Math.random() * 20 - 10 + "%"],
                    scale: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                >
                  <Icons.Heart size={16} className="text-pink-400/60" fill="currentColor" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl -z-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl -z-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mt-4 text-lg italic"
          >
            ✨ Toi, aujourd'hui ✨
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => {
            const Icon = wish.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setActiveWish(index)}
                onHoverEnd={() => setActiveWish(null)}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${wish.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className={`relative ${wish.bgColor} p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm h-full`}>
                  <div className={`${wish.iconColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{wish.title}</h4>
                  
                  <AnimatePresence>
                    {activeWish === index ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {wish.wish}
                      </motion.p>
                    ) : (
                      <p className="text-gray-400 italic">
                        Passe la souris pour lire...
                      </p>
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Icons.Heart size={40} className="text-gray-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl"
        >
          <p className="text-2xl text-gray-700 leading-relaxed">
            <span className="text-4xl block mb-4">💝</span>
            Que cette nouvelle année t'apporte tout cela et bien plus encore. 
            Tu mérites tout le bonheur du monde, ALE.
          </p>
        </motion.div>
      </section>

      {/* Ce qui te rend unique */}
      <section className="py-16 md:py-32 px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Ce qui te rend unique
          </span>
        </motion.h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl cursor-pointer"
              >
                <div className={`text-5xl mb-4 ${quality.color}`}>
                  <Icon />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{quality.text}</h4>
                <p className="text-gray-600">{quality.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Message personnel */}
      <section className="py-16 md:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <Icons.Heart size={70} className="text-pink-500" />
            </motion.div>
          </div>

          <motion.button
            onClick={() => setShowSecretMessage(!showSecretMessage)}
            className="relative group w-full mb-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <p className="text-2xl text-gray-800 font-light">
                {showSecretMessage ? '💫 Mon message pour toi 💫' : '👆 Clique pour lire mon message'}
              </p>
            </div>
          </motion.button>

          <AnimatePresence>
            {showSecretMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-8 md:p-12 rounded-3xl shadow-2xl"
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Ma chère ALE,<br/><br/>

                  Il y a des amitiés qui traversent le temps sans prendre une ride. 
                  La nôtre est de celles-là. Des bancs de l'école au Gabon à nos conversations 
                  entre le Rwanda, le Gabon et la France, tu as toujours été cette présence unique dans ma vie.<br/><br/>

                  On s'est tout dit - nos joies d'enfants, nos peines d'adolescents, 
                  et aujourd'hui nos cœurs brisés d'adultes. Dans les moments difficiles, 
                  dans les doutes, dans les "heartbreaks", tu as toujours été là, 
                  et j'espère que tu sais que j'ai toujours été là pour toi aussi.<br/><br/>

                  Pour ton anniversaire, je te souhaite :<br/><br/>

                  <span className="block text-2xl mb-4">💖 Un amour vrai, sincère, durable</span>
                  <span className="block text-2xl mb-4">📚 La réussite dans toutes tes études</span>
                  <span className="block text-2xl mb-4">🕊️ La sagesse dans tous tes choix</span>
                  <span className="block text-2xl mb-4">🛡️ Une protection constante</span>
                  <span className="block text-2xl mb-4">💪 Une santé de fer</span>
                  <span className="block text-2xl mb-4">✨ La paix intérieure et la joie</span><br/>

                  Tu es bien plus qu'une amie. Tu es cette personne rare avec qui on peut 
                  tout partager, tout comprendre, même à des milliers de kilomètres.<br/><br/>

                  Que cette nouvelle année de ta vie t'apporte tout ce que tu recherches, 
                  et surtout, quelqu'un qui saura voir en toi la merveille que je vois depuis 
                  toutes ces années.<br/><br/>

                  Avec toute mon affection, pour toujours.<br/><br/>

                  <span className="text-3xl font-bold">Ton ami</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mt-12 text-lg"
          >
            Du Rwanda à la France, avec tout mon cœur 💖
          </motion.p>
        </motion.div>
      </section>

      {/* Finale */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ 
            background: 'radial-gradient(circle at center, #fbcfe8 0%, #fae8ff 50%, #e0e7ff 100%)'
          }}
          className="absolute inset-0"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h3
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text mb-8"
          >
            Merci d'être toi
          </motion.h3>
          
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icons.Heart size={120} className="text-pink-500 mx-auto" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-gray-600 mt-8"
          >
             ✨✨ ✨✨ALE · 3 mars 2004 · Port-Gentil, jour où Dieu a créé une Reine ✨✨ ✨✨
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default ALeBirthdayMagic;