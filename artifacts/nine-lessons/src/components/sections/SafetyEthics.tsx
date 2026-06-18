import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const principles = [
  "Программа не оценивает личность ребёнка",
  "Не измеряет «уровень сознания»",
  "Не является психотерапией",
  "Не является религиозным или политическим обучением",
  "Защищает право не рассказывать о личном и не соглашаться с ведущим",
];

export function SafetyEthics() {
  return (
    <section id="ethics" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <Shield className="w-10 h-10 text-primary" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Безопасность и этика
            </h2>
          </motion.div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-background border border-border/50"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-lg md:text-xl text-foreground font-medium">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
