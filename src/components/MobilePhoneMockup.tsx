
interface MobilePhoneMockupProps {
  imageSrc: string;
  alt: string;
}

const MobilePhoneMockup = ({ imageSrc, alt }: MobilePhoneMockupProps) => {
  return (
    <div className="relative">
      {/* Google Pixel Frame */}
      <div className="relative w-64 h-[520px] bg-gray-900 rounded-[2rem] p-1 shadow-2xl border border-gray-700">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[1.75rem] overflow-hidden relative p-3">
          {/* Screenshot */}
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover rounded-[1rem] mx-auto"
          />
        </div>
        
        {/* Google Pixel Logo (subtle) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default MobilePhoneMockup;
