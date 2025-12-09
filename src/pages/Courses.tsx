import { Button } from "@/components/ui/button";
import { Star, Award, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Python Dasar",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      materials: 11,
      level: "Pemula",
      reviews: 7698,
      rating: 4.8,
      certificate: true,
      price: "Gratis",
      category: "Programming",
    },
    {
      id: 2,
      title: "UI/UX Design Mastery",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      materials: 17,
      level: "Pemula",
      reviews: 5268,
      rating: 4.9,
      certificate: true,
      price: "Gratis",
      category: "Design",
    },
    {
      id: 3,
      title: "JavaScript Dasar",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      materials: 11,
      level: "Pemula",
      reviews: 7930,
      rating: 4.7,
      certificate: true,
      price: "Gratis",
      category: "Programming",
    },
    {
      id: 4,
      title: "Algorithm & Data Structures",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
      materials: 6,
      level: "Menengah",
      reviews: 4997,
      rating: 4.8,
      certificate: true,
      price: "Gratis",
      category: "Programming",
    },
    {
      id: 5,
      title: "React.js Fundamental",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      materials: 14,
      level: "Menengah",
      reviews: 3456,
      rating: 4.9,
      certificate: true,
      price: "Gratis",
      category: "Programming",
    },
    {
      id: 6,
      title: "Figma untuk Pemula",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop",
      materials: 8,
      level: "Pemula",
      reviews: 2890,
      rating: 4.8,
      certificate: true,
      price: "Gratis",
      category: "Design",
    },
    {
      id: 7,
      title: "Web Development Bootcamp",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      materials: 25,
      level: "Menengah",
      reviews: 6123,
      rating: 4.9,
      certificate: true,
      price: "Rp 299.000",
      category: "Programming",
    },
    {
      id: 8,
      title: "Data Science Essentials",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      materials: 20,
      level: "Menengah",
      reviews: 4521,
      rating: 4.7,
      certificate: true,
      price: "Rp 399.000",
      category: "Data",
    },
  ];

  const categories = ["Semua", "Programming", "Design", "Data", "Marketing"];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Semua Kelas</h1>
          <p className="text-muted-foreground">Temukan kelas yang sesuai dengan minat dan kebutuhan karirmu</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari kelas..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "Semua" ? "default" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="course-card group animate-fade-in-up"
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
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                    {course.category}
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
    </div>
  );
};

export default CoursesPage;
