import { useOnboarding } from "@/contexts/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BusinessLicense() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Business License</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input
              id="licenseNumber"
              value={formData.licenseNumber || ''}
              onChange={(e) => updateFormData({ licenseNumber: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="licenseExpiry">License Expiry Date</Label>
            <Input
              id="licenseExpiry"
              type="date"
              value={formData.licenseExpiry || ''}
              onChange={(e) => updateFormData({ licenseExpiry: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>Previous</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
}