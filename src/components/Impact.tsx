import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const stats = [
    { number: "217K", label: "Digitalent" },
    { number: "36", label: "Kelas Online" },
    { number: "74", label: "Partner Kolaborasi" },
    { number: "39", label: "Program & Bootcamp" },
  ];

  const partners = [
    "Google", "Microsoft", "Tokopedia", "Gojek", "Bukalapak", 
    "Shopee", "Traveloka", "OVO", "DANA", "LinkAja",
    "BCA", "Mandiri", "BNI", "BRI", "Telkom"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skilvul Telah Berdampak Positif
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Skilvul adalah platform pendidikan teknologi yang menyediakan konten
            pembelajaran keterampilan digital dengan metode "blended-learning".
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs">
              <Button variant="outline">Dampak Kami</Button>
            </Link>
            <Link to="/courses">
              <Button variant="ghost" className="text-primary">
                Lihat Showcase <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-12">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Perusahaan yang telah bekerja sama dengan kami
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner}
                className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item bg-card rounded-2xl border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Whitepaper Banner */}
        <div className="mt-16 bg-gradient-to-r from-navy to-foreground rounded-3xl p-8 md:p-12 text-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-medium opacity-80">Whitepaper</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Future Skills Index of Indonesian Talents
            </h3>
            <p className="opacity-80 mb-6">
              Mapping out Gaps and Opportunities in Talent Capabilities in Indonesia
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="bg-background text-foreground hover:bg-background/90">
                Unduh Gratis <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
