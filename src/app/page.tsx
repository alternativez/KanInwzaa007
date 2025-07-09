import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex w-full gap-4">
        <div id="section603" className="w-3/5 bg-blue-100 p-4">
          <h2 className="text-xl font-bold mb-2">Section 603</h2>
        </div>

        <div id="section837" className="w-2/5 bg-green-100 p-4">
          <h2 className="text-xl font-bold mb-2">Section 837</h2>
        </div>
      </div>

    </div>
  );
}
