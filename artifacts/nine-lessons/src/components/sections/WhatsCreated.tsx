import { motion } from "framer-motion";
import { CheckCircle2, FileText } from "lucide-react";

const documents = [
  { title: "Концепция", ready: true },
  { title: "Методология", ready: true },
  { title: "Паспорт программы", ready: true },
  { title: "Методическое пособие", ready: true },
  { title: "Рабочая тетрадь", ready: true },
  { title: "Комплект микропилота", ready: true },
  { title: "Программа подготовки ведущего", ready: true },
  { title: "Форма экспертного заключения", ready: true },
];

export function WhatsCreated() {
  return (
    <section id="created" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Что уже создано
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы не просто обсуждаем идеи — мы создаём прикладные инструменты. Вся методическая база для запуска первого модуля полностью готова.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <FileText className="text-muted-foreground/50 w-8 h-8" />
                {doc.ready && <CheckCircle2 className="text-accent w-5 h-5" />}
              </div>
              <h3 className="font-medium text-foreground text-lg mt-auto">
                {doc.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
