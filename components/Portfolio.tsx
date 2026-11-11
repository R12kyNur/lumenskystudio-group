"use client";
import { useState } from "react";

const portfolios = [
  { id: 1, cat: "photo", img: "https://lh3.googleusercontent.com/pw/AP1GczONxOJtmp1V4DhMkOrScXRIBfr7QypRVJ5fgThXG4FPjXbmxvfYFOzMnFiNolwLmsDnwM_M_1kYd86xSJTjZBjhZsol5Hkct-t_zo0BxeD-onoznw=w2400", title: "Streetwear Hijab", label: "Modest Edgy Streetwear" },
  { id: 2, cat: "photo", img: "https://lh3.googleusercontent.com/pw/AP1GczPHXlSOwcCHDPs6WQF-spCOxxK6hYKqiMsPmnClnqgnoYdPGwm19oGb2IrmXnRBya6rkWmrUYcstez3Qwqkib3kAgPeOqnTBmtwBBLhWq_7EzVzKw=w2400", title: "Y2K Casual Streetwear", label: "street culture" },
  { id: 3, cat: "photo", img: "https://lh3.googleusercontent.com/pw/AP1GczNubzWoVnX00xlWbHL4Ly9m2vEpKKtYRoHdpBWb1QzgG2V4XrVJG3wCgr2WwGXqgZvHWKwT9HRcFLT8ogU45hVbQmtQypJeMBKl1yc9vz4hSS_vKQ=w2400", title: "Muted & Moody", label: "Urban Lifestyle" },
  { id: 4, cat: "video", img: "https://lh3.googleusercontent.com/pw/AP1GczONxOJtmp1V4DhMkOrScXRIBfr7QypRVJ5fgThXG4FPjXbmxvfYFOzMnFiNolwLmsDnwM_M_1kYd86xSJTjZBjhZsol5Hkct-t_zo0BxeD-onoznw=w2400", title: "Cinematic Wedding", label: "Wedding" },
  { id: 5, cat: "video", img: "https://lh3.googleusercontent.com/pw/AP1GczPHXlSOwcCHDPs6WQF-spCOxxK6hYKqiMsPmnClnqgnoYdPGwm19oGb2IrmXnRBya6rkWmrUYcstez3Qwqkib3kAgPeOqnTBmtwBBLhWq_7EzVzKw=w2400", title: "Commercial Ad", label: "Corporate" },
  { id: 6, cat: "photo", img: "https://lh3.googleusercontent.com/pw/AP1GczNubzWoVnX00xlWbHL4Ly9m2vEpKKtYRoHdpBWb1QzgG2V4XrVJG3wCgr2WwGXqgZvHWKwT9HRcFLT8ogU45hVbQmtQypJeMBKl1yc9vz4hSS_vKQ=w2400", title: "Fine Art Portrait", label: "Studio" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? portfolios : portfolios.filter(p => p.cat === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#09080e]/50 border-t border-brand-purple/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="text-brand-purple text-sm font-semibold uppercase tracking-wider block mb-2">Portofolio</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">Mahakarya Lumensky</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2 bg-brand-card p-1.5 rounded-xl border border-brand-purple/10">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'all' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}>Semua</button>
              <button onClick={() => setFilter('photo')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'photo' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}>Fotografi</button>
              <button onClick={() => setFilter('video')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'video' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}>Videografi</button>
            </div>
            <a href="#" className="hidden md:flex text-gray-400 hover:text-white text-sm font-medium transition-colors items-center">Lihat Semua <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden h-72 cursor-pointer bg-brand-card">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-bold text-lg font-serif">{item.label.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}