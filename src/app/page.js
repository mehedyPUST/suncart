import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import FeatureStrip from "@/components/FeatureStrip";
import Image from "next/image";
import "animate.css";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <FeatureStrip />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />

    </div>
  );
}
