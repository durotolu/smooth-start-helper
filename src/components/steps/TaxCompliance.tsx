import { useOnboarding } from "@/contexts/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function TaxCompliance() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(5);
  };

  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Tax Compliance</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <Label htmlFor="taxId">Tax ID Number</Label>
            <Input
              id="taxId"
              value={formData.taxId || ''}
              onChange={(e) => updateFormData({ taxId: e.target.value })}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="vatRegistered">VAT Registered</Label>
            <Switch
              id="vatRegistered"
              checked={formData.vatRegistered || false}
              onCheckedChange={(checked) => updateFormData({ vatRegistered: checked })}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setCurrentStep(3)}>Previous</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
}