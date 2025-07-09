import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-12 gap-12 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex flex-col md:flex-row w-full gap-4">
        
        <div id="LogoSection" className="md:w-2/5 bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Logo Section</h2>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        <div id="FormSection" className="md:w-3/5 bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Form Section</h2>
        </div>

      </div>

    </div>
  );
}

