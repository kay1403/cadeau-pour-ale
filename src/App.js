import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';

// Lazy loading pour meilleure performance
const ALeBirthdayMagic = lazy(() => import('./components/ALeBirthdayMagic'));

// Loader
const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 flex items-center justify-center">
    <div className="text-center">
      <Heart className="w-20 h-20 text-pink-400 mx-auto mb-4 animate-pulse" fill="currentColor" />
      <h2 className="text-3xl font-bold text-white">Chargement de la magie...</h2>
      <p className="text-pink-200 mt-2">Pour ALE ✨</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <title>Joyeux Anniversaire ALE ✨</title>
        <meta name="description" content="Une surprise magique pour l'anniversaire d'ALE" />
        <meta property="og:title" content="Joyeux Anniversaire ALE ✨" />
        <meta property="og:description" content="Une création spéciale pour toi" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Helmet>
      
      <Suspense fallback={<LoadingScreen />}>
        <ALeBirthdayMagic />
      </Suspense>
    </>
  );
}

export default App;