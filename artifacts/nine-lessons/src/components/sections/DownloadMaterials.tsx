import { motion } from "framer-motion";
import { Download, FileText, Presentation, FileType } from "lucide-react";

interface MaterialCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  filename: string;
  label: string;
  available: boolean;
}

const BASE = import.meta.env.BASE_URL;

const materials: MaterialCard[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Рабочая тетрадь первого модуля",
    description: "Практические упражнения по теме «Опыт как источник обучения»",
    filename: "rabochaya_tetrad_modul_1_opyt_kak_istochnik_obucheniya.pdf",
    label: "Скачать PDF",
    available: true,
  },
  {
    icon: <FileType className="w-6 h-6" />,
    title: "Рабочая тетрадь (редактируемая)",
    description: "Версия в формате DOCX для адаптации и печати",
    filename: "rabochaya_tetrad_modul_1_opyt_kak_istochnik_obucheniya.docx",
    label: "Скачать DOCX",
    available: true,
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Презентация проекта",
    description: "Обзор программы «Девять уроков жизни», 12 слайдов",
    filename: "prezentaciya_9_urokov_zhizni.pptx",
    label: "Скачать PPTX",
    available: true,
  },
];

export function DownloadMaterials() {
  return (
    <section id="materials" className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Материалы проекта
          </h2>
          <p className="text-lg text-muted-foreground">
            Ознакомьтесь с рабочей тетрадью первого модуля и презентацией программы.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {materials.map((material, index) => (
            <motion.div
              key={material.filename}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background border border-border p-8 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  index === 2
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {material.icon}
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {material.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-8 flex-1">
                {material.description}
              </p>

              <div className="mt-auto">
                {material.available ? (
                  <a
                    href={`${BASE}materials/${material.filename}`}
                    download={material.filename}
                    className="flex items-center justify-center gap-2 w-full h-11 px-4 border border-border bg-transparent text-foreground hover:bg-card hover:border-primary/50 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    {material.label}
                  </a>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 w-full h-11 px-4 border border-border/30 bg-background/30 text-muted-foreground/50 text-sm cursor-not-allowed select-none">
                      <Download className="w-4 h-4 shrink-0" />
                      {material.label}
                    </div>
                    <p className="text-xs text-muted-foreground/60 text-center">
                      Файл будет добавлен в ближайшее время
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground/60 mt-10"
        >
          Материалы доступны для свободного скачивания — без регистрации.
        </motion.p>
      </div>
    </section>
  );
}
