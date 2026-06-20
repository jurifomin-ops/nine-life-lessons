import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="cta" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-10 text-primary-foreground leading-tight">
            Помогите сделать программу, которой однажды будут учиться дети
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary-foreground text-primary hover:bg-background rounded-none h-14 px-8 text-base font-medium transition-all"
            >
              Стать экспертом проекта
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-none h-14 px-8 text-base font-medium transition-all"
            >
              Предложить площадку для пилота
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("materials")}
              className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground rounded-none h-14 px-8 text-base font-medium transition-all"
            >
              Скачать материалы
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
