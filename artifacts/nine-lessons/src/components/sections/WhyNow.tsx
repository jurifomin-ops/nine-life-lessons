import { motion } from "framer-motion";

export function WhyNow() {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 text-foreground">
              Почему эта программа нужна <span className="text-primary italic">сейчас</span>
            </h2>
          </motion.div>

          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Современное образование блестяще отвечает на вопрос «что знать». Но оно почти никогда не учит тому, <span className="text-foreground font-medium">как справляться с ошибками, конфликтами, неопределённостью и выбором</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              В эпоху искусственного интеллекта, когда доступ к информации перестал быть ценностью, главным дефицитом становится <span className="text-accent font-medium">зрелость выбора</span>. Способность понимать себя, выдерживать дискомфорт неизвестности и строить созидательные отношения с реальностью.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 mt-12 bg-card border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-foreground text-xl md:text-2xl font-serif italic">
                «Мы обучаем детей математике и литературе, надеясь, что жизненная мудрость приложится сама собой. Но она не прилагается. Её тоже нужно формировать — бережно, системно и честно».
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
