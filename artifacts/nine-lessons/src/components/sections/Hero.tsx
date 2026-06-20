import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-96 h-96 border border-accent/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M16 2L30 16L16 30L2 16L16 2Z" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="hsl(var(--card))"/>
            <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="hsl(var(--accent))" opacity="0.8"/>
            <circle cx="16" cy="16" r="2" fill="hsl(var(--foreground))" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
        >
          Образовательная программа развития человеческого потенциала
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl text-foreground"
        >
          Девять фундаментальных <br />
          <span className="italic text-primary/90">уроков жизни</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Мы не можем прожить жизнь за ребёнка. Но можем научить его учиться у самой жизни.
        </motion.p>

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-xs text-muted-foreground/70 tracking-wide uppercase"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Рабочая версия 1.0
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span>Первый модуль разработан</span>
          <span className="hidden sm:block text-border">|</span>
          <span>Открыт набор экспертов и пилотных площадок</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("why")}
            className="bg-card border border-primary/30 text-foreground hover:bg-card/80 hover:border-primary rounded-none h-14 px-8 text-base transition-all"
          >
            Изучить проект
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 px-8 text-base transition-all"
          >
            Предложить площадку для пилота
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-card border border-accent/40 text-accent hover:bg-card/80 hover:border-accent rounded-none h-14 px-8 text-base transition-all"
          >
            Стать экспертом проекта
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        onClick={() => scrollToSection("why")}
      >
        <span className="text-xs uppercase tracking-widest">Вниз</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent" />
      </motion.div>
    </section>
  );
}
