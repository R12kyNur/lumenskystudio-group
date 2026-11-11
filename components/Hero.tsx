export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 md:px-12 flex items-center hero-gradient relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column: Text */}
        <div className="text-left space-y-6">
          <span className="text-brand-purple text-xs font-semibold uppercase tracking-wider block">FOTOGRAFI PROFESIONAL</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Menangkap Cahaya, Mengabadikan <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Kisah Abadi.</span>
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-lg leading-relaxed">
            Menyulap visi kreatif, merek premium, dan momen berharga Anda menjadi mahakarya visual sinematik dengan pengalaman profesional lebih dari 20 tahun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#portfolio" className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all text-center">
              Eksplor Portofolio <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a href="#contact" className="px-8 py-4 bg-brand-card border border-brand-purple/20 text-white rounded-xl font-semibold hover:bg-brand-purple/10 transition-all text-center">
              Hubungi Studio <i className="fa-solid fa-headset ml-2"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Image & Indicator */}
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-brand-purple/20">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent z-10"></div>
          <img src="https://lh3.googleusercontent.com/pw/AP1GczONxOJtmp1V4DhMkOrScXRIBfr7QypRVJ5fgThXG4FPjXbmxvfYFOzMnFiNolwLmsDnwM_M_1kYd86xSJTjZBjhZsol5Hkct-t_zo0BxeD-onoznw=w2400" alt="Hero Image" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 text-white font-serif font-semibold">
            <span className="text-brand-purple">01</span>
            <div className="w-12 h-[1px] bg-gray-500"></div>
            <span className="text-gray-500">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}