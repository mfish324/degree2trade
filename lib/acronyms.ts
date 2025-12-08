// Acronym definitions for tooltips
export const acronymDefinitions: Record<string, string> = {
  // Education & Training
  FAFSA: "Free Application for Federal Student Aid - the form used to apply for federal financial aid for college",
  GED: "General Educational Development - high school equivalency credential",
  GPA: "Grade Point Average",

  // Medical/Healthcare
  EMT: "Emergency Medical Technician - first responders who provide emergency medical care",
  AEMT: "Advanced Emergency Medical Technician - EMT with additional training for advanced procedures",
  RN: "Registered Nurse - licensed healthcare professional who provides patient care",
  LPN: "Licensed Practical Nurse - provides basic nursing care under RN supervision",
  BSN: "Bachelor of Science in Nursing - 4-year nursing degree",
  "NCLEX-RN": "National Council Licensure Examination for Registered Nurses",
  NREMT: "National Registry of Emergency Medical Technicians - certifying body for EMTs",
  BLS: "Basic Life Support - CPR and basic emergency care certification",
  ACLS: "Advanced Cardiovascular Life Support - advanced emergency cardiac care certification",
  PALS: "Pediatric Advanced Life Support - emergency care certification for children",
  HRSA: "Health Resources and Services Administration - federal agency for healthcare programs",
  CPR: "Cardiopulmonary Resuscitation - emergency procedure for cardiac arrest",

  // Trades & Technical
  HVAC: "Heating, Ventilation, and Air Conditioning - systems that control indoor climate",
  ASE: "Automotive Service Excellence - certification for auto mechanics",
  CDL: "Commercial Driver's License - required to operate large commercial vehicles",
  OSHA: "Occupational Safety and Health Administration - federal workplace safety agency",
  EPA: "Environmental Protection Agency - federal environmental regulatory agency",
  NEC: "National Electrical Code - standard for safe electrical installation",
  NICET: "National Institute for Certification in Engineering Technologies",
  NABCEP: "North American Board of Certified Energy Practitioners - solar certification body",
  AWS: "American Welding Society - certifying body for welders",
  PHCC: "Plumbing-Heating-Cooling Contractors Association",
  ICC: "International Code Council - building code organization",
  IBEW: "International Brotherhood of Electrical Workers - electricians' union",
  "A&P": "Airframe and Powerplant - FAA certification for aircraft mechanics",
  FAA: "Federal Aviation Administration - regulates civil aviation",

  // Workforce & Financial
  WIOA: "Workforce Innovation and Opportunity Act - federal job training funding",
  TAA: "Trade Adjustment Assistance - aid for workers affected by foreign trade",
  JATC: "Joint Apprenticeship Training Committee - union-sponsored apprenticeship programs",
  "GI Bill": "Post-9/11 Veterans Educational Assistance Act - education benefits for military veterans",
  VA: "Department of Veterans Affairs - federal agency for veteran services",

  // Organizations
  AACN: "American Association of Colleges of Nursing",
  NAEMT: "National Association of Emergency Medical Technicians",
};

// Helper function to check if a word is an acronym we have defined
export function isAcronym(word: string): boolean {
  return word in acronymDefinitions;
}

// Get definition for an acronym
export function getAcronymDefinition(acronym: string): string | undefined {
  return acronymDefinitions[acronym];
}
