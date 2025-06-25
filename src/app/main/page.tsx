import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, #17929940 0%, #7287FD40 100%),
        #ffff`
      }}
    >
      <Navbar />
      <main className="flex flex-col items-center mt-8 px-4">
        <section className="flex flex-row max-w-7xl w-full mt-48 gap-32">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold text-[#4C4F69] mb-2">
              Selamat Datang di
            </h1>
            <h2 className="text-8xl font-extrabold text-[#7287FD] mb-6 leading-tight">
              Caerulea
            </h2>
            <p className="text-lg text-[#6C6F85] mb-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              imperdiet vestibulum facilisis. Etiam varius orci neque, eget tempor
              mauris scelerisque sed. Vivamus eu felis id odio semper facilisis.
              Donec placerat nisi quis cursus consectetur.
            </p>
            <button className="bg-[#8CAAEE] text-white px-6 w-3xs py-2 mt-6 rounded-full shadow-md hover:bg-blue-500 transition font-medium">
              Mulai Eksplor!
            </button>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[550px] h-[350px] bg-gray-200 rounded-2xl shadow-xl" />
          </div>
        </section>
      </main>
    </div>
  );
}
