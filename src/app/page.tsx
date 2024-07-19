import Navbar from "@/components/navbar";
import Carrossel from "@/components/carrossel"
import Alert from "@/components/alert";
import Infos from "@/components/infos";
import ListProducts from "@/components/listProducts";


export default function Home() {
  return (
    <div className="w-[100vw] h-auto h-min-[100vh] bg-[#eff5ff]">
      <Alert />
      <Navbar />
      <Carrossel />
      <Infos />
      <ListProducts />
    </div>
  );
}
