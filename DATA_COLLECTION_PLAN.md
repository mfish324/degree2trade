# Degree2Trade - Data Collection Plan

## Overview

This document outlines a systematic approach to collecting program data for all 11 career paths in the Degree2Trade database.

---

## Current State

| Career Path | Programs in DB | Target | Priority |
|-------------|----------------|--------|----------|
| Electrician | 5 | 25-50 | High |
| Nurse (ABSN) | 6 | 30-50 | High |
| EMT/Paramedic | 5 | 20-30 | Medium |
| HVAC | 5 | 20-30 | Medium |
| Plumber | 5 | 20-30 | Medium |
| Firefighter | 5 | 15-25 | Medium |
| Solar Tech | 5 | 15-25 | High (growth) |
| Welder | 5 | 20-30 | Medium |
| Police | 5 | 15-25 | Low |
| Medical Lab Tech | 5 | 20-30 | Medium |
| Religious Vocations | ~20 | 40-60 | Medium |

**Current Total: ~71 programs**
**Target Total: 250-400 programs**

---

## Phase 1: High-Accessibility Sources (Manual Collection)

### 1.1 Apprenticeship.gov (Electrician, Plumber, HVAC, Welder)

**Source:** https://www.apprenticeship.gov/apprenticeship-job-finder

**Data Available:**
- Program name and sponsor
- Location (city, state)
- Occupation type
- Contact information

**Collection Method:** Manual search by occupation
- Search "Electrician" → Export/copy top programs by state
- Search "Plumber" → Repeat
- Search "HVAC" → Repeat
- Search "Welder" → Repeat

**Fields to Capture:**
```
name, description, website, city, state, career_path,
program_type (apprenticeship), duration, cost_estimate (Free - paid apprenticeship),
credentials, accreditation (Department of Labor Registered)
```

**Estimated Programs:** 50-100 (10-25 per trade)

---

### 1.2 CCNE Nursing Directory (Nurse - ABSN)

**Source:** https://directory.ccnecommunity.org/

**Data Available:**
- Institution name
- Program type (BSN, ABSN, MSN, etc.)
- Location
- Accreditation status

**Collection Method:**
1. Filter by "Accelerated BSN" or "Second Degree BSN"
2. Collect top programs by region
3. Visit program websites for details (duration, cost)

**Fields to Capture:**
```
name, description, website, city, state, career_path (nurse),
program_type (accelerated_degree), duration (12-24 months),
cost_estimate, credentials (BSN), accreditation (CCNE Accredited)
```

**Estimated Programs:** 30-50

---

### 1.3 CAAHEP EMT/Paramedic Directory

**Source:** https://www.caahep.org/students/find-an-accredited-program

**Data Available:**
- Program name
- Institution
- Location
- Program type (EMT-Basic, Paramedic)

**Collection Method:**
1. Select "Emergency Medical Services" profession
2. Filter by state or browse all
3. Capture accredited programs

**Fields to Capture:**
```
name, description, website, city, state, career_path (emt),
program_type (certification), duration, cost_estimate,
credentials (EMT/Paramedic Certification), accreditation (CAAHEP Accredited)
```

**Estimated Programs:** 20-30

---

### 1.4 NAACLS Medical Lab Directory

**Source:** https://naacls.org/program-search/

**Data Available:**
- Program name
- Degree level (Certificate, Associate, Bachelor)
- Location
- Accreditation status

**Collection Method:**
1. Search MLT (Medical Laboratory Technician) programs
2. Filter by program level
3. Focus on Associate degree and accelerated options

**Fields to Capture:**
```
name, description, website, city, state, career_path (medicalTech),
program_type (community_college/certification), duration,
cost_estimate, credentials (MLT Certification), accreditation (NAACLS Accredited)
```

**Estimated Programs:** 20-30

---

### 1.5 ATS Seminary Directory (Religious Vocations)

**Source:** https://www.ats.edu/Find-a-School

**Data Available:**
- Seminary name
- Denomination/tradition
- Location
- Degrees offered

**Collection Method:**
1. Browse member school list
2. Filter by degree type (M.Div., M.A., etc.)
3. Capture key seminaries across denominations

**Fields to Capture:**
```
name, description, website, city, state, career_path (religiousVocations),
program_type (seminary/bible_college), duration,
cost_estimate, credentials (M.Div./M.A.), accreditation (ATS Accredited)
```

**Estimated Programs:** 30-40 (already have ~20)

---

## Phase 2: Secondary Sources

### 2.1 AWS Welding Schools

**Source:** https://www.aws.org/community-and-events/directory/

**Collection Method:** Search Educational Providers directory

---

### 2.2 NABCEP Solar Training

**Source:** https://coursecatalog.nabcep.org/

**Collection Method:** Browse registered training providers

---

### 2.3 Pro Board / IFSAC Fire Academies

**Sources:**
- https://theproboard.org/accredited-agencies/
- https://ifsac.org/

**Collection Method:** Browse accredited agencies by state

---

### 2.4 HVAC Excellence / PAHRA

**Note:** No central directory - requires state-by-state research

**Alternative Sources:**
- Trade school websites (UTI, Lincoln Tech, etc.)
- Community college catalogs
- Union training centers (Sheet Metal Workers, UA)

---

### 2.5 Police Academies

**Note:** Most are department-specific, not centrally listed

**Alternative Sources:**
- State POST (Peace Officer Standards and Training) websites
- Major city police department career pages
- Community college criminal justice programs

---

## Phase 3: Data Entry Process

### Step 1: Create Collection Spreadsheet
Set up a spreadsheet with columns matching the database schema:
- name
- description
- website
- city
- state
- career_path
- program_type
- duration
- cost_estimate
- credentials
- accreditation
- is_online
- is_hybrid

### Step 2: Collect by Career Path
Work through one career path at a time:
1. Visit primary source directory
2. Capture program details
3. Visit program website for missing info (cost, duration)
4. Add to spreadsheet

### Step 3: Quality Check
- Verify website URLs are valid
- Ensure accreditation info is current
- Check for duplicates
- Standardize formatting (e.g., state abbreviations)

### Step 4: Generate SQL
Convert spreadsheet rows to INSERT statements for seed.sql

---

## Data Quality Guidelines

### Required Fields (must have)
- name
- description (1-2 sentences)
- website (valid URL)
- city, state
- career_path (must match enum)
- program_type (must match enum)
- credentials

### Optional but Valuable
- duration (standardize: "X months", "X years")
- cost_estimate (range or "Free")
- accreditation
- is_online / is_hybrid

### Description Template
```
[Program type] at [Institution] offering [key feature].
[Unique selling point or notable detail].
```

Example:
```
"Accelerated BSN program at Johns Hopkins for career changers
with prior bachelor's degrees. Elite clinical training at
world-renowned medical institution."
```

---

## Program Type Reference

| program_type | Used For |
|--------------|----------|
| apprenticeship | Union/DOL registered programs |
| trade_school | Private vocational schools |
| community_college | 2-year public institutions |
| accelerated_degree | Fast-track bachelor's (ABSN, etc.) |
| academy | Fire/Police training academies |
| seminary | Graduate theology schools |
| bible_college | Undergraduate religious education |
| ministry_training | Non-degree ministry programs |
| certification | Short-term cert programs |

---

## Estimated Timeline

| Phase | Tasks | Est. Programs |
|-------|-------|---------------|
| Phase 1 | Apprenticeship.gov + CCNE + CAAHEP + NAACLS + ATS | 150-200 |
| Phase 2 | AWS + NABCEP + Fire/HVAC/Police | 50-100 |
| Phase 3 | Quality check + SQL generation | - |

**Total Target: 250-350 programs**

---

## Next Actions

1. [ ] Start with Apprenticeship.gov - collect electrician programs
2. [ ] Move to CCNE directory - collect ABSN programs
3. [ ] Continue through Phase 1 sources
4. [ ] Generate SQL inserts and test in Supabase
5. [ ] Verify data displays correctly in app

