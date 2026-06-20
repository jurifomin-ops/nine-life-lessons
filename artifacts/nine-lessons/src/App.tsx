import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { NineLessons } from "@/components/sections/NineLessons";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FirstModule } from "@/components/sections/FirstModule";
import { WhatsCreated } from "@/components/sections/WhatsCreated";
import { SafetyEthics } from "@/components/sections/SafetyEthics";
import { WhoWeInvite } from "@/components/sections/WhoWeInvite";
import { Roadmap } from "@/components/sections/Roadmap";
import { Author } from "@/components/sections/Author";
import { DownloadMaterials } from "@/components/sections/DownloadMaterials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/sections/ContactForm";

function HomePage() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyNow />
        <NineLessons />
        <HowItWorks />
        <FirstModule />
        <WhatsCreated />
        <SafetyEthics />
        <WhoWeInvite />
        <Roadmap />
        <Author />
        <DownloadMaterials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              «Девять фундаментальных уроков жизни» — авторская общественная образовательная инициатива.
              Материалы находятся в стадии экспертной оценки и пилотирования.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/40">
              <p className="text-xs text-muted-foreground/60">
                © {new Date().getFullYear()} Юрий Фомин. Все права защищены.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
                <a href="mailto:juri.fomin@gmail.com" className="hover:text-primary transition-colors">
                  juri.fomin@gmail.com
                </a>
                <span title="Документ готовится" className="cursor-default opacity-50">
                  Политика обработки персональных данных
                </span>
                <span title="Документ готовится" className="cursor-default opacity-50">
                  Согласие на обработку данных
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
