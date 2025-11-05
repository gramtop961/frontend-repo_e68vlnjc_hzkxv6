import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#141414]">
      <Header />
      <Hero />
      <Sections />
      <Footer />
      {/* Optional bottom sticky CTA for mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden pointer-events-none">
        <div className="pointer-events-auto max-w-[1220px] mx-auto">
          <a href="#order" className="inline-flex items-center justify-center w-full rounded-full bg-[#0E3B2E] text-[#F7F5EF] px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-[#0c3328] transition">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
