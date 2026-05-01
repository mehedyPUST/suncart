import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <PopularProducts />
    </div>
  );
}
