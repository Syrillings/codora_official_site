
interface MobilePhoneMockupProps {
  imageSrc: string;
  alt: string;
}

const MobilePhoneMockup = ({ imageSrc, alt }: MobilePhoneMockupProps) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative w-64 h-[520px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>
          
          {/* Screenshot */}
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default MobilePhoneMockup;
