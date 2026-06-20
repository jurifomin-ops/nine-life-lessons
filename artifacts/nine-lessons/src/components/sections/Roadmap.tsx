import { motion } from "framer-motion";

const timeline = [
  { step: "Экспертная оценка", period: "Лето 2026", current: true },
  { step: "Фокус-группа и микропилот", period: "Осень 2026", current: false },
  { step: "Анализ результатов и доработка", period: "Зима 2026/27", current: false },
  { step: "Расширенный пилот", period: "2027", current: false },
  { step: "Разработка модулей 2–9", period: "2027", current: false },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-card/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Дорожная карта
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-border z-0" />

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[15px] w-[2px] bg-border z-0" />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex md:flex-col items-start md:items-center gap-5 md:gap-3 flex-1"
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 bg-background ${
                    item.current
                      ? "border-primary shadow-[0_0_15px_rgba(201,168,76,0.4)]"
                      : "border-border"
                  }`}
                >
                  {item.current && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <div className="md:text-center">
                  <p
                    className={`text-sm font-medium leading-snug ${
                      item.current ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.step}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      item.current ? "text-primary/70" : "text-muted-foreground/50"
                    }`}
                  >
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
