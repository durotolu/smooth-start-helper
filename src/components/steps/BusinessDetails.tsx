import { useOnboarding } from "@/contexts/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BusinessDetails() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Business Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              value={formData.businessName || ''}
              onChange={(e) => updateFormData({ businessName: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Input
              id="businessType"
              value={formData.businessType || ''}
              onChange={(e) => updateFormData({ businessType: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="businessAddress">Business Address</Label>
            <Input
              id="businessAddress"
              value={formData.businessAddress || ''}
              onChange={(e) => updateFormData({ businessAddress: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>Previous</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
}