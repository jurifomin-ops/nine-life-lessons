import { motion } from "framer-motion";

export function Author() {
  return (
    <section id="author" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative bg-card border border-border flex items-center justify-center overflow-hidden"
          >
            {/* Abstract portrait/initials */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
            <span className="font-serif text-6xl md:text-7xl font-bold text-primary/80">ЮФ</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Юрий Фомин
            </h2>
            <p className="text-primary tracking-widest uppercase text-sm mb-8">
              Автор концепции
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                «Эта программа выросла из личного опыта человека, которому самому в школе не хватало языка — языка для понимания ошибок, кризисов, внутреннего развития.
              </p>
              <p>
                Я не строю теорию. Я описываю то, что сам проходил, и то, что помогло бы пройти это лучше. Моя цель — дать подросткам инструмент, который позволит им опираться на себя в мире, где готовых ответов больше нет».
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
