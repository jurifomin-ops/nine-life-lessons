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
      <footer className="py-8 bg-card border-t border-border text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Девять фундаментальных уроков жизни. Образовательный проект Юрия Фомина.</p>
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
