import React from 'react';
import { motion } from 'motion/react';
import {
  Film,
  Smartphone,
  Youtube,
  Gamepad2,
  Clapperboard,
  Share2,
  Clock,
  ArrowRight,
  Check,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/portfolioData';

interface ServicesPreviewProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 text-white" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-white" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-white" />;
      case 'Clapperboard':
        return <Clapperboard className="w-5 h-5 text-white" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-white" />;
      default:
        return <Film className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-white/50 uppercase">
            CREATIVE CAPABILITIES
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase"
        >
          WHAT <span className="font-serif italic font-normal text-white">I CREATE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-4 text-sm sm:text-lg text-white/50 font-normal leading-relaxed"
        >
          Tailored post-production solutions crafted for engagement, cinematic immersion, and brand growth.
        </motion.p>
      </div>

      {/* 6 Glass Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {SERVICES_LIST.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
          >
            {/* Subtle glow & reflection */}
            <div className="glass-reflection" />
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all pointer-events-none" />

            <div>
              {/* Header Icon & Turnaround */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 group-hover:border-white/30 transition-all shadow-inner">
                  {getIcon(service.iconName)}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-code text-white/60">
                  <Clock className="w-3 h-3" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="font-medium text-xl sm:text-2xl text-white group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-white/50 font-normal leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Deliverables List */}
              <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono-code uppercase text-white/40 tracking-wider">
                  Deliverables Include:
                </div>
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                    <Check className="w-3.5 h-3.5 text-white/40 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-white/40 font-mono-code">
                Custom Scope Available
              </span>

              <button
                id={`inquire-service-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 px-4 py-2 rounded-full shadow-md transition-all"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
