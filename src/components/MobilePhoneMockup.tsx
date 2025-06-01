
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
        <div className="w-full h-full bg-black rounded-[1.75rem] overflow-hidden relative">
          {/* Top Speaker Grill */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full z-10"></div>
          
          {/* Front Camera */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full z-10"></div>
          
          {/* Screenshot */}
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover rounded-[1.75rem]"
          />
        </div>
        
        {/* Google Pixel Logo (subtle) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default MobilePhoneMockup;
