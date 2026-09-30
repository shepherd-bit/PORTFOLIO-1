import { X, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    const iframe = document.getElementById('resume-pdf') as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-4xl border border-[#C778DD] bg-[#282C33] shadow-2xl my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="border-b border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-[#C778DD] font-bold text-lg">#</span>
            <span className="text-white font-bold text-sm sm:text-base">
              Curriculum Vitae — Titus
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print or Save PDF"
              className="inline-flex items-center gap-1.5 text-xs text-[#ABB2BF] hover:text-white border border-[#ABB2BF]/30 hover:border-[#C778DD] px-3 py-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C778DD]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-1 text-[#ABB2BF] hover:text-white border border-transparent hover:border-[#C778DD] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#1E2228]">
          <iframe
            id="resume-pdf"
            src="/My-Resume.pdf"
            title="Titus - Resume"
            className="w-full h-[75vh] border-0"
          />
        </div>

        {/* Footer */}
        <div className="border-t border-[#ABB2BF]/30 bg-[#21252B] px-6 py-4 flex items-center justify-between text-xs no-print">
          <span className="text-[#ABB2BF]">Titus &bull; Available for immediate hire &amp; contracts</span>
          <button
            onClick={onClose}
            className="border border-[#C778DD] text-white px-4 py-1.5 hover:bg-[#C778DD]/20 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
