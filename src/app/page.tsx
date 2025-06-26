import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image"; 

export default function Home() {
  return (
    <div className="bg-[#EFF1F5]">
      <div
        style={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, #17929940 0%, #7287FD40 100%)`
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
              <Link href="/main">
                <button className="bg-[#8CAAEE] text-white px-6 w-1xs py-2 mt-6 rounded-full shadow-md hover:bg-blue-500 transition font-medium">
                  Mulai Eksplor!
                </button>
              </Link>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/images/mountains.jpg"
                alt="Caerulea Logo"
                width={550}
                height={350}
                className="rounded-2xl shadow-xl/50"/>
            </div>
          </section>
        </main>
      </div>
        <div className="w-full bg-gradient-to-br from-[#7287fd40] to-[#e6e9ef40] border-2 border-[#dce0e8] p-12 flex">
          <section className="w-full flex justify-center mt-24 mb-24 flex-col items-center">
              <h3 className="text-5xl font-bold text-[#4C4F69] mb-6">Apa itu <span className="text-[#7287FD]">Caerulea?</span></h3>
              <p className="text-lg text-[#4C4F69] max-w-2xl mb-6 text-center">
                Ini adalah bagian kedua dengan latar belakang berbeda. Tambahkan informasi, fitur, atau apapun yang kamu inginkan di sini.
              </p>
              <div className="flex justify-center mt-8 flex-row items-center gap-8">
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
              </div>
          </section>
        </div>
      <div className="w-full bg-gradient-to-br from-[#04a5e540] to-[#e6e9ef40] shadow-lg p-12 flex">
          <section className="w-full flex justify-center mt-24 mb-24 flex-col items-center">
              <h3 className="text-5xl font-bold text-[#179299] mb-6">Join Sekarang</h3>
              <p className="text-lg text-[#4C4F69] max-w-2xl mb-6 text-center">
                Ini adalah bagian kedua dengan latar belakang berbeda. Tambahkan informasi, fitur, atau apapun yang kamu inginkan di sini.
              </p>
              <div className="flex justify-center mt-8 flex-row items-center gap-8">
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
                <Image
                  src="/images/mountains.jpg"
                  alt="Caerulea Logo"
                  width={300}
                  height={300}
                  className="mt-8 rounded-lg shadow-xl"
                />
              </div>
          </section>
        </div>
    </div>
  );
}
