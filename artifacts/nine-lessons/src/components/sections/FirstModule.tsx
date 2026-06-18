import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FirstModule() {
  return (
    <section id="module" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Пилотный запуск</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              Первый модуль: <br />
              <span className="italic">Опыт как источник обучения</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Первый модуль уже полностью разработан и готов к тестированию в школах. Он посвящен базовому навыку работы с собственными ошибками и извлечению пользы из любого жизненного опыта.
            </p>
            
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="font-medium text-foreground text-xl mb-4 border-b border-border/50 pb-2">Сессии</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span className="text-muted-foreground">Ошибка — это информация</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span className="text-muted-foreground">Что зависит от меня?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">●</span>
                    <span className="text-muted-foreground">Как превратить опыт в следующий шаг</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground text-xl mb-4 border-b border-border/50 pb-2">Инструменты</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-muted-foreground">Результат не равен личности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-muted-foreground">Три круга</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-muted-foreground">Карта разбора опыта</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary/50 text-foreground hover:bg-primary/10 rounded-none w-full sm:w-auto"
            >
              Посмотреть состав модуля
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-card border border-border p-8 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-tr-full" />
              
              <div className="relative z-10">
                <div className="text-5xl font-serif text-primary/30 mb-6">01</div>
                <h4 className="text-2xl font-serif text-foreground mb-4">Урок первый</h4>
                <p className="text-muted-foreground text-lg italic border-l-2 border-primary/30 pl-4">
                  «Любой опыт чему-то учит, если мы готовы быть учениками»
                </p>
              </div>

              <div className="relative z-10 bg-background/50 backdrop-blur border border-border/50 p-6 mt-8">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Результат модуля</div>
                <div className="text-xl text-foreground">Подросток перестает бояться ошибок и начинает видеть в них материал для развития.</div>
              </div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/10 -z-10" />
            <div className="absolute -inset-8 border border-border/30 -z-20 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
