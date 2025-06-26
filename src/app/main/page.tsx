import Navbar from "@/components/navbar";
import MainGrid from "@/components/maingrid";

export default function Main() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, #17929940 0%, #7287FD40 100%),
        #ffff`
      }}
    >
      <Navbar />
      <MainGrid />
    </div>
  );
}
