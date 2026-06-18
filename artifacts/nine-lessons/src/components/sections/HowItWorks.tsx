import { motion } from "framer-motion";

const steps = [
  { title: "Жизненный принцип", desc: "Усвоение фундаментального правила" },
  { title: "Формируемый навык", desc: "Перевод принципа в практическую плоскость" },
  { title: "Практический инструмент", desc: "Освоение метода работы с ситуацией" },
  { title: "Самостоятельное применение", desc: "Использование в реальной жизни" },
  { title: "Изменение качества решений", desc: "Достижение зрелости выбора" },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Как работает программа
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="hidden md:flex items-start justify-between relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-border z-0" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center w-1/5 px-2"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 text-primary font-serif text-xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-center font-medium text-foreground mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden space-y-8 relative">
            <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-border z-0" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0 text-primary font-serif text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-medium text-foreground mb-1 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.desc}
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
