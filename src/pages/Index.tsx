import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { OnboardingSidebar } from "@/components/OnboardingSidebar";
import { ProfileInformation } from "@/components/steps/ProfileInformation";
import { BusinessDetails } from "@/components/steps/BusinessDetails";
import { BusinessLicense } from "@/components/steps/BusinessLicense";
import { TaxCompliance } from "@/components/steps/TaxCompliance";
import { BusinessOperations } from "@/components/steps/BusinessOperations";
import { Success } from "@/components/steps/Success";
import { useOnboarding } from "@/contexts/OnboardingContext";

function OnboardingContent() {
  const { currentStep } = useOnboarding();

  return (
    <div className="flex-1 min-h-screen">
      {currentStep === 1 && <ProfileInformation />}
      {currentStep === 2 && <BusinessDetails />}
      {currentStep === 3 && <BusinessLicense />}
      {currentStep === 4 && <TaxCompliance />}
      {currentStep === 5 && <BusinessOperations />}
      {currentStep === 6 && <Success />}
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