"use client"

interface Country {
    name: string;
    flag: string;
  }

interface FlagsBoxProps {
    countries: Country[]
};

const FlagsBox: React.FC<FlagsBoxProps> = ({ countries }) => {
  return (
    <div className="border-2 border-black rounded-md max-w-[500px] w-full max-h-[300px] min-h-[300px] bg-white overflow-scroll">
      {countries.length === 0 ? (
        <div className="flex items-center justify-center h-[100px] text-gray-400 pt-36 font-paragraph">
        Add a country to see it here!
        </div>
      ) : (
        <div className="flex flex-wrap p-4 gap-4">
          {countries.map((country) => (
          <div
            key={country.name}
            className="flex items-center space-x-2 text-black"
          >
            <span>{country.flag}</span>
            <p className="font-paragraph first-letter:uppercase">{country.name.toLowerCase()}</p>
          </div>
        ))}
      </div>
      )}
      
    </div>
  );
};
  
  export default FlagsBox;
    