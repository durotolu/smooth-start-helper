import { User, Building2, FileCheck, Calculator, BarChart3, Trophy } from "lucide-react";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Profile Information", subtitle: "Personal details", icon: User },
  { id: 2, title: "Business Details", subtitle: "About your company", icon: Building2 },
  { id: 3, title: "Business License", subtitle: "Legal documentation", icon: FileCheck },
  { id: 4, title: "Tax Compliance", subtitle: "Tax information", icon: Calculator },
  { id: 5, title: "Business Operations", subtitle: "Day-to-day details", icon: BarChart3 },
  { id: 6, title: "Success", subtitle: "All set up!", icon: Trophy },
];

export function OnboardingSidebar() {
  const { currentStep } = useOnboarding();

  return (
    <div className="hidden md:flex flex-col w-80 bg-secondary/30 min-h-screen p-6 border-r">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Untitled UI</h1>
      </div>
      
      <div className="space-y-6">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div
              key={step.id}
              className={cn(
                "flex items-start gap-4",
                isActive && "text-primary",
                isCompleted && "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full border flex items-center justify-center",
                isActive && "border-primary bg-primary/10",
                isCompleted && "border-muted bg-muted"
              )}>
                <step.icon className="w-4 h-4" />
              </div>
              
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}