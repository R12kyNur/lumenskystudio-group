export default function Packages() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-brand-purple text-sm font-semibold uppercase tracking-wider block mb-2">Paket Foto</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">Pilih Paket Yang Sesuai</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Package 1 */}
          <div className="bg-brand-card rounded-2xl p-8 border border-brand-purple/10 flex flex-col justify-between hover:border-brand-purple/40 transition-all h-full">
            <div>
              <h3 className="text-xl text-brand-blue uppercase tracking-widest font-bold mb-2">Hemat Baseline</h3>
              <p className="text-gray-400 text-xs mb-6 h-8">Sangat cocok untuk sesi pemotretan personal, atau studio.</p>
              <div className="text-3xl font-bold text-brand-purple mb-8 font-serif">Rp 75.000</div>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> 1 Spot Foto</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> Semua File Mentah</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> 1 Fotografer</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> 2 Foto edit</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-transparent border border-gray-600 text-white hover:border-brand-purple rounded text-center text-xs font-semibold uppercase tracking-wider transition-all">Pilih Paket</a>
          </div>

          {/* Package 2 - Best Seller */}
          <div className="bg-brand-card rounded-2xl p-8 border border-brand-purple relative shadow-2xl shadow-purple-500/10 h-[105%] flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-yellow-600 text-black text-[10px] font-bold uppercase rounded tracking-wider">Best Seller</div>
            <div>
              <h3 className="text-xl text-brand-blue uppercase tracking-widest font-bold mb-2">Silver Legacy</h3>
              <p className="text-gray-400 text-xs mb-6 h-8">Layanan paling ideal untuk Wisuda, Foto Perorangan, atau Grup.</p>
              <div className="text-3xl font-bold text-brand-purple mb-8 font-serif">Rp 200.000</div>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-purple text-xs"></i> 1 Fotografer</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-purple text-xs"></i> 10 Foto Hasil Edit</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-purple text-xs"></i> 2x Ganti Dresscode</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-purple text-xs"></i> Semua File Mentah</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded text-center text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all">Pilih Paket</a>
          </div>

          {/* Package 3 */}
          <div className="bg-brand-card rounded-2xl p-8 border border-brand-purple/10 flex flex-col justify-between hover:border-brand-purple/40 transition-all h-full">
            <div>
              <h3 className="text-xl text-brand-blue uppercase tracking-widest font-bold mb-2">Platinum Royal</h3>
              <p className="text-gray-400 text-xs mb-6 h-8">Layanan mewah ideal untuk momen spesial dengan directing eksklusif.</p>
              <div className="text-3xl font-bold text-brand-purple mb-8 font-serif">Rp 400.000</div>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> Fotografer komposisi & directing</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> 25 Foto Hasil Edit</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> 3x Ganti Dresscode</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-gray-500 text-xs"></i> Semua File Mentah</li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-transparent border border-gray-600 text-white hover:border-brand-purple rounded text-center text-xs font-semibold uppercase tracking-wider transition-all">Pilih Paket</a>
          </div>
        </div>
      </div>
    </section>
  );
}