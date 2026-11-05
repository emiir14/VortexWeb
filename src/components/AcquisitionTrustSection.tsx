import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Package, Truck, Sparkles, CreditCard, HelpCircle } from 'lucide-react';

export const AcquisitionTrustSection: React.FC = () => {
  const { t } = useLanguage();

  const trustCards = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.cert.title'),
      desc: t('trust.cert.desc'),
    },
    {
      icon: <Package className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.pack.title'),
      desc: t('trust.pack.desc'),
    },
    {
      icon: <Truck className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.ship.title'),
      desc: t('trust.ship.desc'),
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#E5A93C]" />,
      title: t('trust.comm.title'),
      desc: t('trust.comm.desc'),
    },
  ];

  return (
    <section className="py-24 bg-[#0A0E1A] border-t border-[#E5A93C]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] block mb-3">
            {t('trust.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-white mb-4">
            {t('trust.title')}
          </h2>
          <div className="w-12 h-0.5 bg-[#E5A93C] mb-6" />
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#0E1726]/80 border border-stone-800 p-6 rounded-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-editorial text-white mb-2 font-medium">
                  {card.title}
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment and Conditions Note */}
        <div className="p-6 bg-[#080C14] border border-stone-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-[#E5A93C] shrink-0" />
            <div>
              <p className="text-stone-300 font-medium">Formas de pago aceptadas:</p>
              <p>Transferencia bancaria internacional (Wire / ACH), Stripe, tarjeta de crédito y PayPal.</p>
            </div>
          </div>
          <span className="text-stone-500 shrink-0">Atención personalizada con la artista</span>
        </div>

      </div>
    </section>
  );
};
