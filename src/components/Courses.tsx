import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "Python Dasar",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      materials: 11,
      level: "Pemula",
      reviews: 7698,
      rating: 4.8,
      certificate: true,
      price: "Gratis",
    },
    {
      title: "UI/UX Design Mastery",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      materials: 17,
      level: "Pemula",
      reviews: 5268,
      rating: 4.9,
      certificate: true,
      price: "Gratis",
    },
    {
      title: "JavaScript Dasar",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      materials: 11,
      level: "Pemula",
      reviews: 7930,
      rating: 4.7,
      certificate: true,
      price: "Gratis",
    },
    {
      title: "Algorithm & Data Structures",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
      materials: 6,
      level: "Menengah",
      reviews: 4997,
      rating: 4.8,
      certificate: true,
      price: "Gratis",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Kelas Unggulan
            </h2>
            <p className="text-muted-foreground">
              Pilih kelas yang sesuai dengan kebutuhan karirmu
            </p>
          </div>
          <Link to="/courses">
            <Button variant="link" className="mt-4 md:mt-0 text-primary">
              Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link
              to={`/course/${index + 1}`}
              key={course.title}
              className="course-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur rounded-full text-xs font-medium">
                    {course.materials} Materi
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground mb-3 line-clamp-2 min-h-[3rem]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3.5 h-3.5 fill-yellow text-yellow" />
                    <span>{course.rating}</span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    {course.certificate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Award className="w-3.5 h-3.5" />
                        <span>Sertifikat</span>
                      </div>
                    )}
                  </div>
                  <span className="text-primary font-bold">{course.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
