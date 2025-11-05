import React from 'react';

const TopBar = () => (
  <div className="w-full bg-[#0E3B2E] text-[#F7F5EF] text-xs sm:text-sm tracking-wide">
    <div className="max-w-[1220px] mx-auto px-6 py-2 flex items-center justify-center gap-2">
      <span>Harvest on demand • Delivery 24–48h</span>
    </div>
  </div>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-[#F7F5EF]/80 text-[#141414] border-b border-black/5">
      <TopBar />
      <div className="max-w-[1220px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-[0.2em] text-xl sm:text-2xl text-[#141414]">
          SPORADICI
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#how" className="hover:underline">How We Grow</a>
          <a href="#benefits" className="hover:underline">Benefits</a>
          <a href="#recipes" className="hover:underline">Recipes</a>
          <a href="#b2b" className="hover:underline">For Restaurants</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="inline-flex items-center justify-center rounded-full bg-[#0E3B2E] text-[#F7F5EF] px-4 py-2 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)] hover:bg-[#0c3328] transition-colors"
          >
            Order Now
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10">
            <span className="sr-only">Open menu</span>
            <span className="block w-5 h-[2px] bg-[#141414]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
