import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Для кого эта программа?",
    a: "Для подростков 14–17 лет. В этом возрасте формируется запрос на автономию, и критически важно дать им инструменты для осознанного выбора и работы с собственным опытом.",
  },
  {
    q: "Чем она отличается от уроков психологии?",
    a: "Программа не фокусируется на теории устройства психики. Она дает сугубо практические, прикладные инструменты (фреймворки), помогающие принимать решения и анализировать ситуации здесь и сейчас.",
  },
  {
    q: "Это безопасно для детей?",
    a: "Да. Программа построена на принципах безопасности: мы не оцениваем личность, не лезем в травмы и защищаем право подростка не рассказывать о личном, если он этого не хочет.",
  },
  {
    q: "Нужна ли специальная подготовка ведущего?",
    a: "Да, для ведения программы требуется ознакомиться с методологией и пройти небольшую подготовку, чтобы понимать границы применимости инструментов и соблюдать этику.",
  },
  {
    q: "Как долго длится программа?",
    a: "Каждый из девяти модулей включает несколько сессий. Первый модуль рассчитан на 3 сессии по 45-60 минут.",
  },
  {
    q: "Можно ли адаптировать программу под конкретную школу?",
    a: "Сами принципы фундаментальны, но формат проведения и примеры для разбора могут и должны быть адаптированы под контекст конкретной образовательной среды.",
  },
  {
    q: "На каком этапе сейчас находится проект?",
    a: "Полностью разработан первый модуль. Сейчас мы находимся на стадии экспертной оценки и поиска площадок для проведения микропилота.",
  },
  {
    q: "Как стать экспертом или пилотной площадкой?",
    a: "Заполните форму заявки внизу этой страницы, указав свою роль. Мы свяжемся с вами и предоставим все необходимые материалы.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Частые вопросы
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left font-medium text-lg text-foreground hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
