import Banner from "../components/Banner";
import Download from "../components/Download";
import Features from "../components/Features";

export default function App() {
  return (
    <div className="w-full bg-black text-white">
      <Banner />
      <Features />
      <Download />
    </div>
  )
}