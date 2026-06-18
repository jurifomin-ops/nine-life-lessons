import { motion } from "framer-motion";
import { Download, FileText, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadMaterials() {
  const handleDownloadClick = () => {
    alert("Файл будет доступен после регистрации");
  };

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
            Ознакомьтесь с презентацией программы или посмотрите, как устроена рабочая тетрадь первого модуля.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group bg-background border border-border p-8 hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Рабочая тетрадь первого модуля</h3>
            <p className="text-muted-foreground mb-8">PDF-документ с практическими упражнениями</p>
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full bg-transparent border-border hover:bg-card hover:text-foreground rounded-none"
                onClick={handleDownloadClick}
              >
                <Download className="w-4 h-4 mr-2" />
                Скачать (PDF)
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-background border border-border p-8 hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
              <Presentation className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Презентация проекта</h3>
            <p className="text-muted-foreground mb-8">PDF-документ, 12 слайдов</p>
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full bg-transparent border-border hover:bg-card hover:text-foreground rounded-none"
                onClick={handleDownloadClick}
              >
                <Download className="w-4 h-4 mr-2" />
                Скачать (PDF)
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
