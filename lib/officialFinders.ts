// Authoritative, official directories where users can find real training
// programs and apprenticeships. All URLs verified to resolve (HTTP 200).
// Shown on the programs page so the funnel always has a real next step,
// even where our own program database is still thin.

export type FinderLink = { label: string; url: string };

// Shown for every career.
export const universalFinders: FinderLink[] = [
  { label: "Apprenticeship.gov — Job & Program Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
  { label: "CareerOneStop — Local Training Finder (U.S. Dept. of Labor)", url: "https://www.careeronestop.org/Toolkit/Training/find-local-training.aspx" },
];

// Career-specific authoritative directories. Keys match CareerPathFilter.
export const careerFinders: Record<string, FinderLink[]> = {
  electrician: [{ label: "ElectricalCareers.com (IBEW/NECA apprenticeships)", url: "https://www.electricalcareers.com/" }],
  nurse: [{ label: "AACN — Nursing program directory (ABSN)", url: "https://www.aacnnursing.org/" }],
  emt: [{ label: "NREMT — Certification & approved education", url: "https://www.nremt.org/" }],
  hvac: [{ label: "HVAC Excellence — Accredited programs", url: "https://www.hvacexcellence.org/" }],
  plumber: [{ label: "United Association (UA) — Plumbing/pipefitting training", url: "https://ua.org/" }],
  firefighter: [{ label: "U.S. Fire Administration — Training & academies", url: "https://www.usfa.fema.gov/" }],
  solar: [{ label: "NABCEP — Solar certification & training providers", url: "https://www.nabcep.org/" }],
  welder: [{ label: "American Welding Society (AWS) — Schools & SENSE programs", url: "https://www.aws.org/" }],
  police: [{ label: "DiscoverPolicing.org — Departments & academies", url: "https://www.discoverpolicing.org/" }],
  medicalTech: [{ label: "NAACLS — Find an accredited program", url: "https://www.naacls.org/Find-a-Program.aspx" }],
  mechanic: [{ label: "ASE Education Foundation — Accredited auto programs", url: "https://www.aseeducationfoundation.org/" }],
};
