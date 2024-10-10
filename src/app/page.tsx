import BrowseProducts from "@/components/BrowseProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";


export default function Home() {
  return (
     <div>
      <Hero/>
      <BrowseProducts/>
      <FeaturedProducts/>
     </div>
  );
}
