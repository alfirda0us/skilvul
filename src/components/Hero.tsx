import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const categories = [
    "Web Development",
    "UI/UX Design",
    "Freelance",
    "Internet of Things",
    "No Code Builder",
    "Animasi",
  ];

  const students = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden hero-bg-pattern">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-primary">Belajar Tanpa Batas</span>
              <br />
              <span className="text-foreground">& Jadilah Talenta</span>
              <br />
              <span className="text-primary">Digital Handal</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              <span className="font-semibold text-foreground">#BelajarBerdampak</span> bersama
              Skilvul dengan tingkatkan keterampilan digital & raih karir impian
              kamu.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/courses">
                <Button variant="hero">Cari Kelas</Button>
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {students.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Student ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Lebih dari </span>
                  <span className="font-bold text-foreground">136 Ribu+</span>
                  <span className="text-muted-foreground"> Orang belajar di Skilvul</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Category Pills */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Decorative Lines */}
              <svg
                className="absolute w-full h-full opacity-20"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M50 200 Q 200 50, 350 200 Q 200 350, 50 200"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-muted-foreground"
                />
                <path
                  d="M100 200 Q 200 100, 300 200 Q 200 300, 100 200"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-muted-foreground"
                />
              </svg>
            </div>

            {/* Floating Category Pills */}
            <div className="relative h-[400px]">
              {categories.map((category, index) => {
                const positions = [
                  { top: "5%", right: "15%" },
                  { top: "20%", right: "0%" },
                  { top: "35%", right: "20%" },
                  { top: "50%", right: "-5%" },
                  { top: "65%", right: "25%" },
                  { top: "80%", right: "5%" },
                ];
                const pos = positions[index];
                return (
                  <div
                    key={category}
                    className={`category-pill absolute animate-float`}
                    style={{
                      top: pos.top,
                      right: pos.right,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Categories */}
        <div className="flex flex-wrap gap-2 mt-8 lg:hidden">
          {categories.map((category) => (
            <span key={category} className="category-pill text-xs">
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
