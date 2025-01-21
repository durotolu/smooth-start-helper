import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { OnboardingSidebar } from "@/components/OnboardingSidebar";
import { ProfileInformation } from "@/components/steps/ProfileInformation";
import { useOnboarding } from "@/contexts/OnboardingContext";

function OnboardingContent() {
  const { currentStep } = useOnboarding();

  return (
    <div className="flex-1 min-h-screen">
      {currentStep === 1 && <ProfileInformation />}
      {/* Other steps will be added in subsequent iterations */}
    </div>
  );
}

export default function Index() {
  return (
    <OnboardingProvider>
      <div className="flex min-h-screen">
        <OnboardingSidebar />
        <OnboardingContent />
      </div>
    </OnboardingProvider>
  );
}
