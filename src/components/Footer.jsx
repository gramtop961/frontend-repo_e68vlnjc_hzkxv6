import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F7F5EF] text-[#141414] border-t border-black/10">
      <div className="max-w-[1220px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-extrabold tracking-[0.2em] text-xl">SPORADICI</div>
          <p className="mt-3 text-sm text-black/70 max-w-xs">
            Indoor-grown gourmet mushrooms. Veneto-based. Fresh harvests weekly.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="text-sm text-black/80 space-y-1">
            <li>WhatsApp: +39 000 000 000</li>
            <li>Email: hello@sporadici.it</li>
            <li>Pickup: Mon–Fri 10:00–18:00</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Links</div>
          <ul className="text-sm text-black/80 space-y-1">
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#how" className="hover:underline">How We Grow</a></li>
            <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            <li><a href="#recipes" className="hover:underline">Recipes</a></li>
            <li><a href="#b2b" className="hover:underline">For Restaurants</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="text-sm text-black/80 space-y-1">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Cookie</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
          <p className="mt-4 text-xs text-black/60">Information is for informational purposes only.</p>
        </div>
      </div>
      <div className="px-6 py-6 text-center text-xs text-black/60">© {new Date().getFullYear()} Sporadici</div>
    </footer>
  );
};

export default Footer;
