import { useState } from 'react';
import { X, Check, Calculator, Send, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { pricingTiers, portfolioInfo } from '../data/portfolioData';

interface PriceEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTierForContact: (tierName: string, estimatedTotal: number) => void;
}

export function PriceEstimatorModal({
  isOpen,
  onClose,
  onSelectTierForContact
}: PriceEstimatorModalProps) {
  const [selectedTierId, setSelectedTierId] = useState<string>(pricingTiers[0].id);
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    docker: true,
    seo: true,
    db: false,
    rush: false
  });

  if (!isOpen) return null;

  const currentTier = pricingTiers.find((t) => t.id === selectedTierId) || pricingTiers[0];

  const addonPrices: { [key: string]: { name: string; price: number; desc: string } } = {
    docker: { name: 'Dockerized Container & CI/CD', price: 60, desc: 'Production container configuration & automated deployment' },
    seo: { name: 'Full SEO & Social OpenGraph', price: 40, desc: 'Schema.org JSON-LD structured data & Twitter/OG previews' },
    db: { name: 'PostgreSQL / MongoDB Integration', price: 90, desc: 'Schema design, migrations, indexing & persistent storage' },
    rush: { name: 'Express Delivery (Priority Rush)', price: 100, desc: 'Cut delivery time by 50% with dedicated focus' }
  };

  const calculatedTotal =
    currentTier.basePrice +
    Object.keys(addons).reduce((acc, key) => (addons[key] ? acc + addonPrices[key].price : acc), 0);

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleProceed = () => {
    onSelectTierForContact(currentTier.title, calculatedTotal);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl border border-[#C778DD] bg-[#282C33] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="border-b border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C778DD] font-bold text-lg">#</span>
            <h3 className="text-white font-bold text-base sm:text-lg">
              Project Pricing &amp; Service Estimator
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#ABB2BF] hover:text-white border border-transparent hover:border-[#C778DD] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Subtitle / Promise */}
          <div className="text-xs sm:text-sm text-[#ABB2BF] leading-relaxed border-l-2 border-[#C778DD] pl-3.5">
            Clear, honest freelance rates tailored for solo founders, teams, and clients.
            Guaranteed performance, clean code, and zero hidden costs.
          </div>

          {/* Tier Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-white font-semibold">
              1. Choose Core Service Package:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pricingTiers.map((tier) => {
                const isSelected = selectedTierId === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTierId(tier.id)}
                    className={`text-left p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C778DD] bg-[#C778DD]/10 ring-1 ring-[#C778DD]'
                        : 'border-[#ABB2BF]/40 bg-[#1E2228] hover:border-[#ABB2BF]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-[#C778DD]">
                          {tier.deliveryTime}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C778DD]" />}
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1">
                        {tier.title}
                      </h4>
                      <p className="text-[11px] text-[#ABB2BF] leading-snug line-clamp-2">
                        {tier.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/10 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-white">${tier.basePrice}</span>
                      <span className="text-[10px] text-[#ABB2BF]">USD base</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Package Features List */}
          <div className="border border-[#ABB2BF]/30 bg-[#1E2228] p-4">
            <span className="text-xs font-mono text-white font-semibold block mb-2">
              Package Inclusions for {currentTier.title}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#ABB2BF]">
              {currentTier.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#C778DD] mt-0.5 shrink-0 font-bold">&gt;</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-white font-semibold">
              2. Optional Upgrades &amp; Architecture Add-ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.keys(addonPrices).map((key) => {
                const item = addonPrices[key];
                const active = addons[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAddon(key)}
                    className={`flex items-start justify-between gap-2 p-3 border text-left transition-colors cursor-pointer ${
                      active
                        ? 'border-[#C778DD] bg-[#C778DD]/10'
                        : 'border-[#ABB2BF]/30 bg-[#1E2228] hover:border-[#ABB2BF]/60'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs text-white font-medium block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#ABB2BF] block leading-tight">
                        {item.desc}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono text-[#C778DD] font-semibold">
                        +${item.price}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Summary & Action */}
          <div className="border border-[#C778DD] bg-[#21252B] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#ABB2BF] font-mono block">Estimated Investment</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  ${calculatedTotal}
                </span>
                <span className="text-xs text-[#C778DD] font-mono">USD (Fixed Price Quote)</span>
              </div>
              <span className="text-[11px] text-[#ABB2BF]/80">
                Timeline: ~{currentTier.deliveryTime} with source code &amp; revision guarantees
              </span>
            </div>

            <button
              onClick={handleProceed}
              className="inline-flex items-center justify-center gap-2 border border-[#C778DD] bg-[#C778DD] text-[#282C33] font-bold px-6 py-3 hover:bg-[#b05ece] transition-colors cursor-pointer text-sm"
            >
              <span>Lock Quote &amp; Message Titus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
