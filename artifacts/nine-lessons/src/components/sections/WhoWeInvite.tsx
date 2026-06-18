import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const groups = [
  { role: "Педагоги-методисты", action: "экспертная оценка материалов" },
  { role: "Подростковые психологи", action: "проверка психологической безопасности" },
  { role: "Практикующие учителя", action: "участие в микропилоте" },
  { role: "Директора школ", action: "предложить пилотную площадку" },
  { role: "Образовательные центры", action: "партнёрство" },
  { role: "Родители", action: "ознакомление и поддержка" },
];

export function WhoWeInvite() {
  const scrollToContact = (roleText: string) => {
    // We'll just scroll to contact for now. 
    // Passing role state could be done via context/URL, but scrolling is the requirement.
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="audience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Кого мы приглашаем
          </h2>
          <p className="text-lg text-muted-foreground">
            Проект открыт для профессионального обсуждения. Нам важна экспертиза тех, кто работает с подростками каждый день.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 border border-border bg-card/30 hover:bg-card transition-colors flex flex-col h-full"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {group.role}
              </h3>
              <p className="text-muted-foreground mb-8">
                {group.action}
              </p>
              <div className="mt-auto">
                <Button
                  variant="link"
                  className="px-0 text-primary hover:text-primary/80 h-auto"
                  onClick={() => scrollToContact(group.role)}
                >
                  Присоединиться <span className="ml-2">→</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
