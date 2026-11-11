"use client";

export default function ContactFooter() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const message = `Halo Lumensky Studio, saya ingin memesan layanan.\n\nNama: ${fd.get('name')}\nNomor WhatsApp: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nPaket: ${fd.get('service')}\nTanggal: ${fd.get('date')}\nDeskripsi: ${fd.get('desc')}`;
    window.location.href = `mailto:lumenskystudiogroup@gmail.com?subject=Pemesanan Layanan Lumensky Studio&body=${encodeURIComponent(message)}`;
  };

  return (
    <footer id="contact" className="pt-24 pb-8 px-6 md:px-12 bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 items-start">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <img src="/Image/Lumensky_studio.png" alt="Lumensky Footer" className="h-8 w-auto" />
             <span className="text-white font-serif font-semibold text-lg">Lumensky Studio</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed pr-8">
            Kami siap membantu Anda mengabadikan momen terbaik dengan hasil yang berkesan, memadukan sinematografi kelas dunia.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-tiktok text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-youtube text-xl"></i></a>
          </div>
        </div>

        {/* Col 2: Contact Details */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Kontak</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
               <i className="fa-solid fa-location-dot text-brand-blue mt-1"></i>
               <p className="text-gray-400 text-sm">Blimbing, Kota Malang,<br/>Jawa Timur, Indonesia</p>
            </li>
            <li className="flex items-center gap-4">
               <i className="fa-solid fa-phone text-brand-blue"></i>
               <p className="text-gray-400 text-sm">+62 895-6184-48881</p>
            </li>
            <li className="flex items-center gap-4">
               <i className="fa-solid fa-envelope text-brand-blue"></i>
               <p className="text-gray-400 text-sm">lumenskystudiogroup@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Form */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Kirim Pesan</h4>
          <form onSubmit={submitForm} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Nama Anda" required className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-white focus:border-brand-purple outline-none transition-colors" />
              <input name="email" type="email" placeholder="Email Anda" required className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-white focus:border-brand-purple outline-none transition-colors" />
            </div>
            <input name="phone" type="tel" placeholder="Nomor WhatsApp" required className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-white focus:border-brand-purple outline-none transition-colors" />
            <select name="service" className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-gray-400 focus:border-brand-purple outline-none transition-colors">
                <option value="Kustom">Konsultasi Umum</option>
                <option value="Hemat Baseline">Hemat Baseline (Rp 75K)</option>
                <option value="Silver Legacy">Silver Legacy (Rp 200K)</option>
                <option value="Platinum Royal">Platinum Royal (Rp 400K)</option>
            </select>
            <input name="date" type="date" className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-gray-400 focus:border-brand-purple outline-none transition-colors" />
            <textarea name="desc" rows={2} placeholder="Pesan Anda" required className="w-full bg-brand-dark border-b border-gray-700 p-2 text-sm text-white focus:border-brand-purple outline-none transition-colors resize-none"></textarea>
            <button type="submit" className="w-full py-3 bg-brand-purple text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-brand-blue transition-colors flex justify-center items-center gap-2">
              Booking Sekarang <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; 2026 Lumensky Studio. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privasi</a>
          <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}