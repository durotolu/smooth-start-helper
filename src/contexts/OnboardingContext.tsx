import React, { createContext, useContext, useState } from 'react';

type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

interface OnboardingData {
  // Profile Information
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender;
  
  // Business Details
  businessName: string;
  businessType: string;
  businessAddress: string;
  
  // Business License
  licenseNumber: string;
  licenseExpiry: string;
  
  // Tax Compliance
  taxId: string;
  vatRegistered: boolean;
  
  // Business Operations
  employeeCount: string;
  annualRevenue: string;
}

interface OnboardingContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<OnboardingData>>({});

  const updateFormData = (newData: Partial<OnboardingData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <OnboardingContext.Provider value={{ currentStep, setCurrentStep, formData, updateFormData }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}