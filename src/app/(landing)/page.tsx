import { Navbar } from "@/src/components/ui-navbar/navBar";
import { StarBackground } from "@/src/components/ui/startBackground";
import { ThemeToggle } from "@/src/components/ui/themeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
}
