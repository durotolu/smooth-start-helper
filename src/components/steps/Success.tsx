import { useOnboarding } from "@/contexts/OnboardingContext";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Success() {
  const { formData } = useOnboarding();

  return (
    <div className="flex-1 p-8 flex flex-col items-center justify-center">
      <div className="text-center max-w-xl">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Registration Complete!</h2>
        <p className="text-gray-600 mb-8">
          Thank you {formData.firstName} for completing the registration process. We'll review your information and get back to you shortly.
        </p>
        <Button onClick={() => window.location.reload()}>Return to Home</Button>
      </div>
    </div>
  );
}