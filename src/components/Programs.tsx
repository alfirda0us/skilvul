import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, BookOpen, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Freelance Academy",
      description: "Kuasai strategi menjadi freelancer profesional",
      color: "bg-teal/10 text-teal",
    },
    {
      icon: BookOpen,
      title: "Mini Bootcamp",
      description: "Belajar intensif dengan waktu yang fleksibel",
      color: "bg-yellow/10 text-yellow",
    },
    {
      icon: Rocket,
      title: "Job-ready Bootcamp",
      description: "Program lengkap untuk siap kerja di industri",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan Program Belajar Intensif
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengan kurikulum yang terstruktur dan dibimbing langsung oleh para
            ahli di industri, kamu akan mendapatkan pengalaman pembelajaran yang
            mendalam dan praktis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4`}
              >
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {program.description}
              </p>
              <Link to="/programs" className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Lihat Detail <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Program */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="relative z-10 max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Program Unggulan
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Siap membangun karir Freelancer profesional?
            </h3>
            <p className="text-muted-foreground mb-6">
              Kuasai strategi menjadi freelancer profesional untuk tingkatkan
              pendapatan secara langsung bersama para pakar berpengalaman.
            </p>
            <Link to="/programs">
              <Button variant="hero">
                Daftar Sekarang <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
