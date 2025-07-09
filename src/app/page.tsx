import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-12 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col md:flex-row w-full gap-4 min-h-screen">

        {/* Logo Section */}
        <div className="md:w-2/5 p-4 rounded-lg flex items-center justify-center">
          <a href="https://docchula.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/SMCU.png"
              alt="SMCU Logo"
              width={300}
              height={300}
              className="rounded"
            />
          </a>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-px bg-gray-300" style={{ height: '100vh' }}></div>

        {/* Form Section */}
        <div className="md:w-3/5 pl-[59px] pr-[59px] rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">ลงทะเบียน</h2>

          <div className="w-full max-w-md rounded-lg space-y-4">

            <div>
              <label htmlFor="fn" className="block text-gray-700 font-medium mb-1">ชื่อจริง</label>
              <input type="text" id="fn" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none" />
            </div>

            <div>
              <label htmlFor="ln" className="block text-gray-700 font-medium mb-1">นามสกุล</label>
              <input type="text" id="ln" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none" />
            </div>

            <div>
              <label htmlFor="yr" className="block text-gray-700 font-medium mb-1">ชั้นปี</label>
              <input type="text" id="yr" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none" />
            </div>

            <div>
              <label htmlFor="allergy" className="block text-gray-700 font-medium mb-1">อาหารที่แพ้</label>
              <input type="text" id="allergy" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none" />
            </div>

            <div>
              <label htmlFor="birth" className="block text-gray-700 font-medium mb-1">วัน/เดือน/ปีเกิด</label>
              <input type="date" id="birth" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none" />
            </div>

            <div>
              <label htmlFor="tellUs" className="block text-gray-700 font-medium mb-1">อยากฝากอะไรถึงพวกเราไหม :)</label>
              <textarea id="tellUs" className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"></textarea>
            </div>

            <button className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition">
              ลงทะเบียน
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
