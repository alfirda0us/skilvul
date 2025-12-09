import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Briefcase, BookOpen, Rocket, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsPage = () => {
  const programs = [
    {
      id: 1,
      icon: Briefcase,
      title: "Freelance Academy",
      description: "Kuasai strategi menjadi freelancer profesional untuk tingkatkan pendapatan secara langsung bersama para pakar berpengalaman.",
      duration: "8 Minggu",
      students: "2,500+",
      features: ["Mentoring 1-on-1", "Portfolio Project", "Sertifikat", "Job Connection"],
      color: "bg-teal/10 text-teal border-teal/20",
      price: "Rp 1.500.000",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Mini Bootcamp",
      description: "Belajar intensif dengan waktu yang fleksibel. Cocok untuk kamu yang ingin upgrade skill tanpa meninggalkan pekerjaan.",
      duration: "4 Minggu",
      students: "5,000+",
      features: ["Live Session", "Project Based", "Sertifikat", "Community Access"],
      color: "bg-yellow/10 text-yellow border-yellow/20",
      price: "Rp 750.000",
    },
    {
      id: 3,
      icon: Rocket,
      title: "Job-ready Bootcamp",
      description: "Program lengkap untuk siap kerja di industri. Kurikulum disusun bersama praktisi industri terkemuka.",
      duration: "12 Minggu",
      students: "1,200+",
      features: ["Full-time Program", "Career Coaching", "Job Guarantee", "Alumni Network"],
      color: "bg-primary/10 text-primary border-primary/20",
      price: "Rp 5.000.000",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Program Belajar Intensif
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengan kurikulum yang terstruktur dan dibimbing langsung oleh para ahli di industri, 
            kamu akan mendapatkan pengalaman pembelajaran yang mendalam dan praktis.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`border rounded-3xl p-8 md:p-12 ${program.color} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center">
                      <program.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{program.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {program.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {program.students} Alumni
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-background rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Mulai dari</p>
                    <p className="text-3xl font-bold text-foreground">{program.price}</p>
                  </div>
                  <Link to={`/program/${program.id}`}>
                    <Button variant="hero">
                      Daftar Sekarang <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Butuh bantuan memilih program?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Tim kami siap membantu kamu menemukan program yang paling sesuai dengan kebutuhan dan tujuan karirmu.
          </p>
          <Button variant="outline" size="lg">
            Hubungi Kami <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
