import { useOnboarding } from "@/contexts/OnboardingContext";
import { cn } from "@/lib/utils";

export function OnboardingSidebar() {
  const { currentStep } = useOnboarding();

  const steps = [
    { number: 1, title: "Profile Information" },
    { number: 2, title: "Business Details" },
    { number: 3, title: "Business License" },
    { number: 4, title: "Tax Compliance" },
    { number: 5, title: "Business Operations" },
    { number: 6, title: "Success" },
  ];

  return (
    <div className="w-64 bg-gray-50 p-6 border-r">
      <h2 className="text-xl font-semibold mb-6">Registration Steps</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className={cn(
              "flex items-center space-x-3 p-2 rounded",
              currentStep === step.number
                ? "bg-primary text-primary-foreground"
                : currentStep > step.number
                ? "text-gray-600"
                : "text-gray-400"
            )}
          >
            <span
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-sm",
                currentStep === step.number
                  ? "bg-primary-foreground text-primary"
                  : currentStep > step.number
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {currentStep > step.number ? "✓" : step.number}
            </span>
            <span className="text-sm font-medium">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}