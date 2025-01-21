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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOnboarding } from "@/contexts/OnboardingContext";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessType: z.string().min(2, "Please select a business type"),
  businessAddress: z.string().min(5, "Please enter a valid address"),
});

export function BusinessDetails() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: formData.businessName || "",
      businessType: formData.businessType || "",
      businessAddress: formData.businessAddress || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    setCurrentStep(3);
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Business Details</h2>
        <p className="text-muted-foreground">
          Tell us about your company
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="llc">LLC</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Business St, City, State, ZIP" {...field} />
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