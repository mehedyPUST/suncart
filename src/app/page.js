import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />

    </div>
  );
}
