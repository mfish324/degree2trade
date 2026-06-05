// Numeric career figures for the ROI calculator and comparison pages.
//
// medianSalary: BLS median annual wage (May 2024 OEWS) — authoritative, do not guess.
// trainingMonths / typicalTrainingCost: TYPICAL estimates used only as editable
//   defaults in the calculator. They vary widely (many trades are paid
//   apprenticeships with ~$0 cost), so users can override them in the UI.
//
// Keep `key` aligned with careerPaths keys in lib/quizData.ts.

export type CareerNumbers = {
  key: string;
  label: string;
  medianSalary: number; // BLS May 2024 median annual wage
  trainingMonths: number; // typical time to job-ready (editable default)
  typicalTrainingCost: number; // typical out-of-pocket cost (editable default)
  growthPct: number; // BLS 2024–34 projected growth
  paidTraining: boolean; // true = earn while you train (apprenticeship/academy)
};

export const careerNumbers: CareerNumbers[] = [
  { key: "electrician", label: "Electrician", medianSalary: 62350, trainingMonths: 48, typicalTrainingCost: 0, growthPct: 9, paidTraining: true },
  { key: "nurse", label: "Registered Nurse (ABSN)", medianSalary: 93600, trainingMonths: 20, typicalTrainingCost: 40000, growthPct: 5, paidTraining: false },
  { key: "emt", label: "EMT", medianSalary: 41340, trainingMonths: 4, typicalTrainingCost: 1500, growthPct: 5, paidTraining: false },
  { key: "hvac", label: "HVAC Technician", medianSalary: 59810, trainingMonths: 12, typicalTrainingCost: 10000, growthPct: 8, paidTraining: false },
  { key: "plumber", label: "Plumber", medianSalary: 62970, trainingMonths: 48, typicalTrainingCost: 0, growthPct: 4, paidTraining: true },
  { key: "firefighter", label: "Firefighter", medianSalary: 59530, trainingMonths: 5, typicalTrainingCost: 3000, growthPct: 3, paidTraining: true },
  { key: "solar", label: "Solar Installer", medianSalary: 51860, trainingMonths: 3, typicalTrainingCost: 5000, growthPct: 42, paidTraining: false },
  { key: "welder", label: "Welder", medianSalary: 51000, trainingMonths: 9, typicalTrainingCost: 7000, growthPct: 2, paidTraining: false },
  { key: "police", label: "Police Officer", medianSalary: 77270, trainingMonths: 6, typicalTrainingCost: 0, growthPct: 3, paidTraining: true },
  { key: "medicalTech", label: "Medical Lab Technician", medianSalary: 61890, trainingMonths: 24, typicalTrainingCost: 15000, growthPct: 2, paidTraining: false },
  { key: "mechanic", label: "Mechanic / Technician", medianSalary: 49670, trainingMonths: 12, typicalTrainingCost: 10000, growthPct: 4, paidTraining: false },
];
