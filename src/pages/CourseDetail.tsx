import { Button } from "@/components/ui/button";
import { Star, Award, ArrowLeft, Clock, Users, BookOpen, Play, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams();

  // Mock course data
  const course = {
    id: Number(id),
    title: "Python Dasar",
    description: "Pelajari dasar-dasar pemrograman Python dari nol hingga mahir. Kursus ini dirancang untuk pemula yang ingin memulai karir di bidang programming, data science, atau automation.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop",
    materials: 11,
    level: "Pemula",
    reviews: 7698,
    rating: 4.8,
    certificate: true,
    price: "Gratis",
    duration: "8 Jam",
    students: 15234,
    instructor: "John Doe",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    curriculum: [
      { title: "Pengenalan Python", duration: "45 menit", lessons: 5 },
      { title: "Variabel dan Tipe Data", duration: "60 menit", lessons: 8 },
      { title: "Operator dan Ekspresi", duration: "45 menit", lessons: 6 },
      { title: "Struktur Kontrol", duration: "90 menit", lessons: 10 },
      { title: "Fungsi dan Modul", duration: "75 menit", lessons: 8 },
      { title: "Project Akhir", duration: "120 menit", lessons: 4 },
    ],
    benefits: [
      "Memahami konsep dasar pemrograman",
      "Mampu menulis kode Python dengan baik",
      "Dapat membuat program sederhana",
      "Siap untuk kursus lanjutan",
      "Sertifikat kelulusan",
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto py-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Kelas
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {course.level}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {course.title}
              </h1>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow text-yellow" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews.toLocaleString()} ulasan)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} peserta</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Instruktur</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Harga</span>
                  <span className="text-3xl font-bold text-primary">{course.price}</span>
                </div>
                <Link to="/auth">
                  <Button variant="hero" className="w-full">
                    <Play className="w-5 h-5 mr-2" />
                    Mulai Belajar
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  {course.certificate && (
                    <>
                      <Award className="w-4 h-4" />
                      <span>Termasuk Sertifikat</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Yang akan kamu pelajari</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kurikulum</h2>
              <div className="space-y-3">
                {course.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {module.lessons} pelajaran • {module.duration}
                        </p>
                      </div>
                    </div>
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-4">Kelas ini termasuk:</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary" />
                  {course.materials} video pembelajaran
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {course.duration} total durasi
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Akses selamanya
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Sertifikat penyelesaian
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
