import { motion } from "framer-motion";

export function Author() {
  return (
    <section id="author" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="shrink-0 flex flex-col items-center gap-4"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 relative bg-card border border-border overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}author.png`}
                alt="Юрий Фомин"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-1 text-foreground">
              Юрий Фомин
            </h2>
            <p className="text-primary tracking-widest uppercase text-sm mb-8">
              Автор и инициатор проекта
            </p>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Автор концепции «Девять фундаментальных уроков жизни», предприниматель, автор книг и исследователь вопросов развития сознания и человеческого потенциала.
              </p>
              <p>
                Более тридцати лет Юрий изучает, как жизненный опыт, убеждения, внимание и внутренние кризисы влияют на решения человека, его отношения с собой, другими людьми и окружающим миром.
              </p>
              <p>
                Проект вырос из простого, но важного вопроса: почему школа даёт человеку знания о мире, но почти не учит его понимать собственный опыт, проходить ошибки, справляться с внутренними трудностями и принимать зрелые решения?
              </p>
              <p>
                Задача автора — соединить накопленный жизненный опыт, философское осмысление и практические инструменты в светскую образовательную программу, которую можно обсуждать, проверять и совершенствовать вместе с педагогами, психологами, методистами и исследователями.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-2 border-primary">
              <p className="font-serif text-lg md:text-xl italic text-foreground/90 leading-relaxed">
                «Я не хочу учить детей, как правильно жить. Я хочу дать им язык и инструменты, с помощью которых они смогут понимать происходящее, делать более осознанный выбор и учиться у собственной жизни».
              </p>
            </blockquote>

            <p className="mt-8 text-sm text-muted-foreground/70 border border-border/40 bg-card/30 px-4 py-3">
              Сегодня проект находится на этапе экспертной оценки и подготовки к практическому пилотированию.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
