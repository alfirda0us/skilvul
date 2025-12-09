import { ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Program Talenta Digital 2022 Jangkau 200 Ribu Milenial",
      source: "CNBC Indonesia",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
    },
    {
      title: "Skilvul Dorong Transformasi Digital di Indonesia",
      source: "Liputan 6",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    },
    {
      title: "Kolaborasi Skilvul dengan Kampus Merdeka",
      source: "Kompas",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Berita Seputar Skilvul
          </h2>
          <p className="text-muted-foreground">
            Kegiatan Skilvul yang telah diliput media
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <a
              key={news.title}
              href="#"
              className="group course-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {news.source}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
