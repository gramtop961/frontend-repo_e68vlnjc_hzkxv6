import React, { useState } from 'react';

const Card = ({ title, desc, img, href }) => (
  <a
    href={href}
    className="group block rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)] hover:-translate-y-0.5 transition p-6">
    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F7F5EF] mb-4">
      <img
        src={img}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-[1.02] transition"
        srcSet={`${img}&w=480 480w, ${img}&w=800 800w, ${img}&w=1200 1200w`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-bold text-[#141414]">{title}</h3>
        <p className="text-sm text-black/70">{desc}</p>
      </div>
      <span className="underline decoration-2 underline-offset-4 text-[#0E3B2E] font-semibold">Details</span>
    </div>
  </a>
);

const SectionTitle = ({ eyebrow, title, id }) => (
  <div id={id} className="mb-6">
    {eyebrow && (
      <div className="text-xs font-semibold tracking-wide text-[#0E3B2E] mb-2">{eyebrow}</div>
    )}
    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141414]">{title}</h2>
  </div>
);

const Values = () => (
  <section className="bg-[#F7F5EF] text-[#141414] py-10">
    <div className="max-w-[1220px] mx-auto px-6">
      <SectionTitle eyebrow="Why Sporadici" title="Fresh, Local, Artisan" id="values" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            t: '48h Freshness',
            d: 'Harvested on demand and delivered fast.',
            icon: 'https://img.icons8.com/ios/100/6B7280/stopwatch.png',
          },
          {
            t: 'Short Supply Chain',
            d: 'Locally grown indoors, sustainable.',
            icon: 'https://img.icons8.com/ios/100/6B7280/placeholder-thin.png',
          },
          {
            t: 'Artisan Quality',
            d: 'Manual selection, consistent standards.',
            icon: 'https://img.icons8.com/ios/100/6B7280/approval.png',
          },
        ].map((v) => (
          <div
            key={v.t}
            className="group rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)] hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-4">
              <img src={v.icon} alt="" width={36} height={36} loading="lazy" className="opacity-80" />
              <div>
                <h3 className="font-bold text-lg">{v.t}</h3>
                <p className="text-sm text-black/70">{v.d}</p>
                <span className="mt-3 inline-block underline decoration-2 underline-offset-4 group-hover:underline text-[#0E3B2E] font-semibold">Learn more</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => {
  const items = [
    {
      title: "Grey Oyster (Pleurotus ostreatus)",
      desc: "Versatile, lightly nutty.",
      price: "From €1.50 / 100 g",
      img: "https://images.unsplash.com/photo-1531001082365-c12f670c7d79?q=80&auto=format&fit=crop",
    },
    {
      title: "Blue Oyster (Pleurotus columbinus)",
      desc: "Deeper aroma, umami.",
      price: "From €1.60 / 100 g",
      img: "https://images.unsplash.com/photo-1567427013953-425e0a6db8d6?q=80&auto=format&fit=crop",
    },
    {
      title: "Pink Oyster (Pleurotus djamor)",
      desc: "Vivid color, crispy when seared.",
      price: "From €1.80 / 100 g",
      img: "https://images.unsplash.com/photo-1615486364037-0f5a0ec0b7bd?q=80&auto=format&fit=crop",
    },
    {
      title: "Golden Oyster (Pleurotus citrinopileatus)",
      desc: "Sweet, honeyed notes.",
      price: "From €1.80 / 100 g",
      img: "https://images.unsplash.com/photo-1600880292493-1e9f550bf8fe?q=80&auto=format&fit=crop",
    },
    {
      title: "Lion’s Mane (Hericium erinaceus)",
      desc: "Fibrous, delicate. Great marinated.",
      price: "From €2.60 / 100 g",
      img: "https://images.unsplash.com/photo-1627498512994-7faeb7dd07da?q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="bg-[#F7F5EF] text-[#141414] py-12">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionTitle eyebrow="Meet the Fungi" title="Our Fresh Selection" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)] hover:-translate-y-0.5 transition">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F7F5EF]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  srcSet={`${it.img}&w=480 480w, ${it.img}&w=800 800w, ${it.img}&w=1200 1200w`}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-bold">{it.title}</h3>
                <p className="text-sm text-black/70 line-clamp-1">{it.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0E3B2E]">{it.price}</span>
                  <a href="#" className="text-sm font-semibold underline underline-offset-4">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section id="how" className="bg-[#F7F5EF] py-12">
    <div className="max-w-[1220px] mx-auto px-6">
      <SectionTitle eyebrow="How It Works" title="From Grain to Plate" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { t: 'Inoculation', i: 'https://img.icons8.com/ios/100/6B7280/lab.png' },
          { t: 'Incubation', i: 'https://img.icons8.com/ios/100/6B7280/temperature.png' },
          { t: 'Fruiting', i: 'https://img.icons8.com/ios/100/6B7280/plant-under-sun.png' },
          { t: 'Harvest & Delivery 24h', i: 'https://img.icons8.com/ios/100/6B7280/delivery.png' },
        ].map((s, idx) => (
          <div key={s.t} className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
            <div className="flex items-center gap-4">
              <img src={s.i} alt="" width={32} height={32} loading="lazy" />
              <h3 className="font-semibold">{idx + 1}. {s.t}</h3>
            </div>
            <div className="mt-3 h-1 w-full bg-black/5 rounded-full">
              <div className="h-1 bg-[#FF6A00] rounded-full" style={{ width: `${((idx + 1) / 4) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="bg-[#F7F5EF] py-12">
    <div className="max-w-[1220px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-6">
        <SectionTitle eyebrow="Benefits & Nutrition" title="Naturally nutrient-dense" />
        <p className="text-black/80 mb-4">
          Lion’s Mane and Oyster offer unique textures and flavors. Our indoor-grown approach ensures consistency and freshness year-round.
        </p>
        <ul className="list-disc pl-5 text-black/80 space-y-1">
          <li>Great source of protein with low calories</li>
          <li>High in fiber; perfect for balanced meals</li>
          <li>Versatile for everyday cooking and fine dining</li>
        </ul>
        <p className="mt-3 text-xs text-black/60">Information is for informational purposes only.</p>
      </div>
      <div className="md:col-span-6">
        <div className="rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,.08)] p-6">
          <h3 className="font-semibold mb-3">Per 100 g</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold">Oyster</div>
              <div>28–35 kcal</div>
              <div>2.2–3.5 g protein</div>
              <div>High fiber</div>
            </div>
            <div>
              <div className="font-bold">Lion’s Mane</div>
              <div>40–45 kcal</div>
              <div>3.8–4.3 g protein</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-black/60">Average internal values; indicative only.</p>
        </div>
      </div>
    </div>
  </section>
);

const Recipes = () => (
  <section id="recipes" className="bg-[#F7F5EF] py-12">
    <div className="max-w-[1220px] mx-auto px-6">
      <SectionTitle eyebrow="Recipes Spotlight" title="Cook the harvest" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            t: 'Crispy Oyster “Bacon”',
            img: 'https://images.unsplash.com/photo-1546549039-49bfff491b04?q=80&auto=format&fit=crop',
            meta: '20 min · Easy',
          },
          {
            t: 'Blue Oyster Risotto',
            img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&auto=format&fit=crop',
            meta: '40 min · Medium',
          },
          {
            t: 'Lion’s Mane Burger',
            img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&auto=format&fit=crop',
            meta: '35 min · Medium',
          },
        ].map((r) => (
          <a key={r.t} href="#" className="group rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)] hover:-translate-y-0.5 transition">
            <div className="aspect-video bg-[#F7F5EF] overflow-hidden">
              <img
                src={r.img}
                alt={r.t}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                srcSet={`${r.img}&w=480 480w, ${r.img}&w=800 800w, ${r.img}&w=1200 1200w`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="text-xs text-black/60">{r.meta}</div>
              <h3 className="mt-1 font-bold text-lg">{r.t}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const B2B = () => (
  <section id="b2b" className="bg-[#F7F5EF] py-12">
    <div className="max-w-[1220px] mx-auto px-6">
      <SectionTitle eyebrow="For Restaurants" title="Consistent supply, tailored to service" />
      <div className="rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,.08)] grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-8">
          <ul className="space-y-2 list-disc pl-5 text-black/80">
            <li>List price for volume</li>
            <li>Recurring orders</li>
            <li>Delivery calendar</li>
            <li>Sample request</li>
          </ul>
          <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0E3B2E] text-[#F7F5EF] px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)] hover:bg-[#0c3328] transition">Request a Quote</a>
        </div>
        <div className="min-h-[220px] md:min-h-[280px] bg-center bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&auto=format&fit=crop')"}} />
      </div>
    </div>
  </section>
);

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="newsletter" className="bg-[#F7F5EF] py-12">
      <div className="max-w-[1220px] mx-auto px-6">
        <SectionTitle eyebrow="Newsletter" title="Get weekly availability first." />
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center" aria-live="polite">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" required placeholder="Email address" className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B6D7B9]" />
            <label className="inline-flex items-start gap-2 text-sm text-black/80">
              <input type="checkbox" required className="mt-1" />
              I agree to receive updates and accept the privacy policy.
            </label>
          </div>
          <button type="submit" className="justify-self-start inline-flex items-center justify-center rounded-full bg-[#0E3B2E] text-[#F7F5EF] px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)] hover:bg-[#0c3328] transition">
            Subscribe
          </button>
          {submitted && (
            <div className="md:col-span-2 text-sm text-[#0E3B2E] font-semibold">Subscribed! Check your inbox.</div>
          )}
        </form>
      </div>
    </section>
  );
};

const ContactAnchor = () => (<div id="contact" />);

const Sections = () => (
  <main className="bg-[#F7F5EF] text-[#141414]">
    <Values />
    <Products />
    <HowItWorks />
    <Benefits />
    <Recipes />
    <B2B />
    <Newsletter />
    <ContactAnchor />
  </main>
);

export default Sections;
