import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/contexts/OnboardingContext";

export function Success() {
  const { formData } = useOnboarding();

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">Setup Complete!</h2>
        <p className="text-muted-foreground">
          Congratulations {formData.firstName}, your business account has been successfully set up.
        </p>
      </div>

      <div className="mt-8">
        <Button className="w-full md:w-auto">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}