import React from 'react';

const Hero = () => {
  return (
    <section id="top" className="bg-[#F7F5EF] text-[#141414]">
      <div className="max-w-[1220px] mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="inline-block mb-4">
            <span className="align-middle text-xs font-semibold tracking-wide bg-[#FF6A00] text-white px-3 py-1 rounded-full">NEW HARVEST WEEKLY</span>
          </div>
          <h1 className="text-[44px] leading-[1] sm:text-[64px] lg:text-[84px] font-extrabold tracking-tight uppercase">
            FRESH MUSHROOMS
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight uppercase">GROWN RIGHT IN VENETO</h2>
          <p className="mt-4 text-base sm:text-lg text-black/80 max-w-prose">
            Lion’s Mane and Oyster, indoor grown. Consistent quality, fast delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center justify-center rounded-full bg-[#0E3B2E] text-[#F7F5EF] px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)] hover:bg-[#0c3328] transition">
              Order Now
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-full border border-[#0E3B2E] text-[#0E3B2E] px-5 py-3 text-sm font-semibold hover:bg-[#0E3B2E]/10 transition">
              See How We Grow
            </a>
          </div>
          <p className="mt-4 text-sm text-black/70">Italy 24–48 h. Refrigerated packaging when needed. Free shipping from €59.</p>
        </div>
        <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.15)]">
          {/* Minimal CSS-only parallax using background-attachment fixed */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
              backgroundAttachment: 'fixed',
              transform: 'translateZ(0)'
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
