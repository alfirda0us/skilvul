import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySlider from "@/components/CategorySlider";
import Programs from "@/components/Programs";
import Courses from "@/components/Courses";
import Impact from "@/components/Impact";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CategorySlider />
        <Programs />
        <Courses />
        <Impact />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
