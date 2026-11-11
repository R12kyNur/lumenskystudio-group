export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#09080e]/90 border-y border-brand-purple/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <span className="text-brand-purple text-sm font-semibold uppercase tracking-wider block mb-2">Tentang Kami</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">MENGABADIKAN MOMEN,<br/>MENYIMPAN CERITA.</h2>
          <p className="text-gray-400 mb-12 text-sm leading-relaxed max-w-md">
            Kami adalah tim fotografer profesional yang berkomitmen untuk menghadirkan karya terbaik dengan sentuhan sinematik dan penuh makna.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <i className="fa-solid fa-camera text-brand-purple text-3xl mb-3"></i>
              <div className="text-2xl font-bold text-white mb-1">800+</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500">Proyek Selesai</div>
            </div>
            <div>
              <i className="fa-solid fa-face-smile text-brand-blue text-3xl mb-3"></i>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500">Klien Puas</div>
            </div>
            <div>
              <i className="fa-solid fa-award text-brand-accent text-3xl mb-3"></i>
              <div className="text-2xl font-bold text-white mb-1">6+</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500">Tahun Pengalaman</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative h-[450px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczONxOJtmp1V4DhMkOrScXRIBfr7QypRVJ5fgThXG4FPjXbmxvfYFOzMnFiNolwLmsDnwM_M_1kYd86xSJTjZBjhZsol5Hkct-t_zo0BxeD-onoznw=w2400" alt="Photographer in action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/40"></div>
          
          {/* Pull Quote */}
          <div className="absolute top-12 right-12 max-w-[200px] text-right">
            <span className="text-brand-purple text-5xl font-serif leading-none">“</span>
            <p className="text-white text-sm font-medium italic mt-2">Foto bukan hanya tentang apa yang kita lihat, tapi tentang apa yang kita rasakan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}