import React from 'react';
import { TEACHERS } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 space-y-24">
        
        {/* Header Block - Bento */}
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-gray-100">
             <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Tentang Kami</h1>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid: History, Motto, Headmaster */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. History (Large) */}
            <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Sejarah & Filosofi</h3>
                <p className="font-serif text-2xl leading-relaxed text-gray-800 mb-6">
                    Didirikan pada tahun 1998, SMA Swasta Al-Hikmah Medan bermula dari visi sederhana: pendidikan berkualitas yang memadukan akademis dan integritas moral.
                </p>
                <div className="font-sans text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
                    <p>
                        Selama lebih dari dua dekade, kami telah berkembang menjadi institusi terkemuka. Kurikulum kami dirancang secara holistik, memadukan standar nasional dengan pengayaan wawasan global.
                    </p>
                    <p>
                        Filosofi kami berakar pada keseimbangan. Kami mendorong prestasi sains dan teknologi, namun tetap berpijak pada nilai kemanusiaan dan spiritualitas.
                    </p>
                </div>
            </div>

            {/* 2. Motto (Distinct Block) */}
            <div className="bg-secondary text-white p-10 rounded-[2.5rem] shadow-lg shadow-secondary/20 flex flex-col justify-center relative overflow-hidden">
                <Quote size={64} className="absolute top-4 right-4 text-white/20" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 block">Motto Sekolah</span>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                    "Unggul dalam Iman, Cerdas dalam Ilmu."
                </h2>
                <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/90">
                        Menjadi pedoman setiap langkah civitas akademika dalam berkarya.
                    </p>
                </div>
            </div>

            {/* 3. Headmaster Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px]">
                <img 
                    src="https://picsum.photos/600/700?random=50" 
                    alt="Kepala Sekolah" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-serif text-lg italic">"Disiplin adalah jembatan cita-cita."</p>
                </div>
            </div>

             {/* 4. Headmaster Text */}
             <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                         F
                     </div>
                     <div>
                        <h2 className="font-serif text-3xl text-gray-900">Drs. H. Ahmad Fauzi, M.Pd.</h2>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block">Kepala Sekolah</span>
                     </div>
                 </div>
                <p className="text-gray-600 leading-relaxed">
                    Sebagai pimpinan sekolah, Bapak Fauzi membawa pengalaman lebih dari 30 tahun di dunia pendidikan. Beliau berdedikasi untuk menciptakan ekosistem belajar yang inklusif, disiplin, dan menyenangkan bagi seluruh warga sekolah.
                </p>
            </div>

        </section>

        {/* Teachers Bento Grid */}
        <section>
          <div className="mb-8 px-2">
               <h3 className="font-serif text-3xl text-gray-900">Tenaga Pendidik</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((teacher) => (
                <div key={teacher.id} className="group bg-white p-4 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="overflow-hidden mb-4 relative aspect-square rounded-[1.5rem] bg-gray-100">
                        <img 
                            src={teacher.image} 
                            alt={teacher.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="px-2 pb-2">
                        <h4 className="font-serif text-lg text-gray-900 mb-1 leading-snug">{teacher.name}</h4>
                        <p className="font-sans text-xs text-primary font-bold uppercase tracking-wide mb-2">{teacher.role}</p>
                        <p className="font-sans text-sm text-gray-500">{teacher.expertise}</p>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;