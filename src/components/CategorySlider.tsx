const CategorySlider = () => {
  const categories = [
    "Mobile Development",
    "Game Development",
    "IoT",
    "Frontend",
    "Web Development",
    "3D Animation",
    "Digital Marketing",
    "Artificial Intelligence",
    "UI/UX",
    "Programming",
  ];

  return (
    <section className="py-8 bg-secondary/50 overflow-hidden">
      <div className="relative">
        <div className="flex animate-slide-left whitespace-nowrap">
          {/* First set */}
          {categories.map((category, index) => (
            <span
              key={`a-${index}`}
              className="inline-flex items-center px-6 py-2 mx-2 bg-background rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/50 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {categories.map((category, index) => (
            <span
              key={`b-${index}`}
              className="inline-flex items-center px-6 py-2 mx-2 bg-background rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/50 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
