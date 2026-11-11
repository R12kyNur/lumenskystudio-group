"use client";
import { useState } from "react";

export default function Calculator() {
  const [crewCount, setCrewCount] = useState(2);
  const [calcType, setCalcType] = useState(2500000);
  const [duration, setDuration] = useState(8);
  const [addDrone, setAddDrone] = useState(false);
  const [addExpress, setAddExpress] = useState(false);

  // Logic persis seperti JS asli Anda
  const durationFactor = duration / 8;
  const crewCost = (crewCount - 1) * 1500000;
  const droneCost = addDrone ? 3500000 : 0;
  const expressCost = addExpress ? 2000000 : 0;
  
  const total = Math.round((calcType * durationFactor) + crewCost + droneCost + expressCost);
  
  const formattedTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(total).replace('IDR', 'Rp');

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-4xl mx-auto glassmorphism p-8 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif font-bold text-white mb-2">Kalkulator Harga Kustom</h2>
          <p className="text-gray-400 text-sm">Sesuaikan kebutuhan spesifik proyek visual Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Tipe Proyek</label>
              <select value={calcType} onChange={(e) => setCalcType(Number(e.target.value))} className="w-full bg-brand-dark/50 border border-brand-purple/20 focus:border-brand-purple rounded-xl p-3 text-white outline-none">
                <option value={2500000}>Company Profile</option>
                <option value={1500000}>Event Liputan</option>
                <option value={5000000}>Commercial Ad</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Durasi ({duration} Jam)</label>
              <input type="range" min="2" max="24" step="1" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full accent-brand-purple" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Jumlah Tim (Kru)</label>
              <div className="flex items-center gap-4">
                <button onClick={() => setCrewCount(Math.max(1, crewCount - 1))} className="w-10 h-10 rounded-lg bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">-</button>
                <span className="text-white font-bold text-xl w-6 text-center">{crewCount}</span>
                <button onClick={() => setCrewCount(Math.min(6, crewCount + 1))} className="w-10 h-10 rounded-lg bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">+</button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 bg-brand-dark/30 p-6 rounded-2xl border border-brand-purple/10">
             <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={addDrone} onChange={(e) => setAddDrone(e.target.checked)} className="w-5 h-5 rounded text-brand-purple accent-brand-purple bg-gray-800 border-gray-600" />
                  <span className="text-sm text-gray-300">Tambahan Drone (FpV/Mavic)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={addExpress} onChange={(e) => setAddExpress(e.target.checked)} className="w-5 h-5 rounded text-brand-purple accent-brand-purple bg-gray-800 border-gray-600" />
                  <span className="text-sm text-gray-300">Express Editing (48 Jam)</span>
                </label>
             </div>
             
             <div className="pt-6 border-t border-brand-purple/20">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Estimasi Total Harga</p>
                <div className="text-4xl font-serif font-bold text-brand-purple">{formattedTotal}</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}