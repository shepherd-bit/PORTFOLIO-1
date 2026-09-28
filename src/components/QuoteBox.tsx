import { portfolioInfo } from '../data/portfolioData';

export function QuoteBox() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-end">
          
          {/* Main Quote Container */}
          <div className="w-full relative border border-[#ABB2BF] bg-[#282C33] px-6 sm:px-10 py-6 sm:py-8">
            
            {/* Top-Left Quote Symbol */}
            <div 
              className="absolute -top-4 left-6 bg-[#282C33] px-2 text-2xl sm:text-3xl text-[#ABB2BF] font-serif select-none"
              aria-hidden="true"
            >
              “
            </div>

            {/* Quote Body */}
            <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center sm:text-left">
              {portfolioInfo.quote}
            </p>

            {/* Bottom-Right Quote Symbol */}
            <div 
              className="absolute -bottom-5 right-6 bg-[#282C33] px-2 text-2xl sm:text-3xl text-[#ABB2BF] font-serif select-none"
              aria-hidden="true"
            >
              „
            </div>
          </div>

          {/* Author Badge attached directly below right */}
          <div className="border border-t-0 border-[#ABB2BF] bg-[#282C33] px-5 py-2 text-sm sm:text-base text-white font-medium">
            {portfolioInfo.quoteAuthor}
          </div>

        </div>
      </div>
    </section>
  );
}
