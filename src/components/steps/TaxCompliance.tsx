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
import { Switch } from "@/components/ui/switch";
import { useOnboarding } from "@/contexts/OnboardingContext";

const formSchema = z.object({
  taxId: z.string().min(5, "Tax ID must be at least 5 characters"),
  vatRegistered: z.boolean(),
});

export function TaxCompliance() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taxId: formData.taxId || "",
      vatRegistered: formData.vatRegistered || false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    setCurrentStep(5);
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Tax Compliance</h2>
        <p className="text-muted-foreground">
          Enter your tax information
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="taxId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax ID / EIN</FormLabel>
                <FormControl>
                  <Input placeholder="XX-XXXXXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vatRegistered"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">VAT Registered</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
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