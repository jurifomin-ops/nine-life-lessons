import { motion } from "framer-motion";
import { useState } from "react";

const lessons = [
  { id: 1, title: "Любой опыт чему-то учит", quality: "Рефлексивность" },
  { id: 2, title: "Неусвоенный урок повторяется", quality: "Осознанность" },
  { id: 3, title: "Дискомфорт может быть сигналом роста или опасности", quality: "Эмоциональная грамотность" },
  { id: 4, title: "Мир воспринимается через внутренние модели", quality: "Критическое мышление" },
  { id: 5, title: "Другие люди помогают увидеть себя", quality: "Социальный интеллект" },
  { id: 6, title: "Признание реальности предшествует её изменению", quality: "Принятие и действие" },
  { id: 7, title: "Качество внимания определяет качество выбора", quality: "Осознанное решение" },
  { id: 8, title: "Человек больше своих ролей и обстоятельств", quality: "Личностная идентичность" },
  { id: 9, title: "Благополучие каждого связано с благополучием всех", quality: "Системное мышление" },
];

export function NineLessons() {
  return (
    <section id="lessons" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Девять фундаментальных уроков
          </h2>
          <p className="text-lg text-muted-foreground">
            Каждый жизненный принцип в программе связан с конкретным навыком, который можно развивать и применять на практике.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LessonCard({ lesson, index }: { lesson: typeof lessons[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-64 cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full bg-card border border-border p-8 flex flex-col justify-between [backface-visibility:hidden]">
          <div className="text-primary font-serif text-4xl font-bold opacity-30">
            0{lesson.id}
          </div>
          <h3 className="text-xl font-medium leading-snug text-foreground">
            {lesson.title}
          </h3>
          <div className="text-xs text-muted-foreground tracking-widest uppercase mt-4 flex items-center gap-2">
            <span>Узнать навык</span>
            <span className="text-primary">→</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full bg-primary p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-4">
            Формируемое качество
          </span>
          <h3 className="text-2xl font-serif font-bold text-primary-foreground">
            {lesson.quality}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
