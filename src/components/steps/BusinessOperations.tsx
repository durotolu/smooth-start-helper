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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOnboarding } from "@/contexts/OnboardingContext";

const formSchema = z.object({
  employeeCount: z.string().min(1, "Please select employee count"),
  annualRevenue: z.string().min(1, "Please select annual revenue"),
});

export function BusinessOperations() {
  const { formData, updateFormData, setCurrentStep } = useOnboarding();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeCount: formData.employeeCount || "",
      annualRevenue: formData.annualRevenue || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateFormData(values);
    setCurrentStep(6);
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Business Operations</h2>
        <p className="text-muted-foreground">
          Tell us about your business operations
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="employeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Employees</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee count" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="annualRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual Revenue</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select annual revenue" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                    <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                    <SelectItem value="5m+">$5 million+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Complete
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}