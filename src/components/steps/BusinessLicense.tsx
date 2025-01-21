import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOnboarding } from "@/contexts/OnboardingContext";

const formSchema = z.object({
  licenseNumber: z.string().min(5, "License number must be at least 5 characters"),
  licenseExpiry: z.string().min(1, "Please enter an expiry date"),
});

export function BusinessLicense() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      licenseNumber: formData.licenseNumber || "",
      licenseExpiry: formData.licenseExpiry || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    setCurrentStep(4);
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Business License</h2>
        <p className="text-muted-foreground">
          Provide your business license information
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="licenseNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your business license number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="licenseExpiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Expiry Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}