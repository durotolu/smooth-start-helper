import { useOnboarding } from "@/contexts/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BusinessOperations() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(6);
  };

  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Business Operations</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <Label htmlFor="employeeCount">Number of Employees</Label>
            <Input
              id="employeeCount"
              type="number"
              value={formData.employeeCount || ''}
              onChange={(e) => updateFormData({ employeeCount: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="annualRevenue">Annual Revenue</Label>
            <Input
              id="annualRevenue"
              type="number"
              value={formData.annualRevenue || ''}
              onChange={(e) => updateFormData({ annualRevenue: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setCurrentStep(4)}>Previous</Button>
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </div>
  );
}