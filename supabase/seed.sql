-- Degree2Trade Seed Data
-- Run this AFTER schema.sql in Supabase SQL Editor

INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

-- ============================================
-- ELECTRICIAN PROGRAMS
-- ============================================
('IBEW-NECA Electrical Apprenticeship', 'Joint apprenticeship program combining on-the-job training with classroom instruction. Earn while you learn with full benefits.', 'https://www.njatc.org', 'Nationwide', 'Various', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Lincoln Tech Electrical Program', 'Hands-on electrical training covering residential, commercial, and industrial applications. Career services included.', 'https://www.lincolntech.edu', 'Various Locations', 'NJ', 'electrician', 'trade_school', '9-12 months', '$20,000-$35,000', 'Diploma/Certificate', 'ACCSC Accredited', false, false),

('Penn Foster Electrician Career Diploma', 'Self-paced online program covering electrical theory, NEC code, and practical applications. Prepares for apprenticeship entry.', 'https://www.pennfoster.edu', 'Online', 'PA', 'electrician', 'trade_school', '5-12 months', '$1,000-$1,500', 'Career Diploma', 'DEAC Accredited', true, false),

('IEC Apprenticeship Program', 'Independent Electrical Contractors apprenticeship with earn-while-you-learn model. Strong industry connections.', 'https://www.ieci.org', 'Nationwide', 'Various', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Tulsa Welding School Electrician Program', 'Accelerated electrical training program with hands-on labs and industry certifications.', 'https://www.tws.edu', 'Tulsa', 'OK', 'electrician', 'trade_school', '7 months', '$18,000-$22,000', 'Diploma', 'ACCSC Accredited', false, false),

-- ============================================
-- REGISTERED NURSE PROGRAMS (ABSN Focus)
-- ============================================
('Northeastern University ABSN', 'Accelerated Bachelor of Science in Nursing for career changers with a prior bachelors degree. Clinical rotations at top Boston hospitals.', 'https://www.northeastern.edu/nursing', 'Boston', 'MA', 'nurse', 'accelerated_degree', '16 months', '$80,000-$95,000', 'BSN', 'CCNE Accredited', false, true),

('Johns Hopkins ABSN', 'Elite accelerated nursing program at a world-renowned medical institution. Exceptional clinical opportunities.', 'https://nursing.jhu.edu', 'Baltimore', 'MD', 'nurse', 'accelerated_degree', '13 months', '$90,000-$100,000', 'BSN', 'CCNE Accredited', false, false),

('University of Pennsylvania ABSN', 'Ivy League accelerated nursing program with outstanding job placement rates and clinical experiences.', 'https://www.nursing.upenn.edu', 'Philadelphia', 'PA', 'nurse', 'accelerated_degree', '14 months', '$85,000-$95,000', 'BSN', 'CCNE Accredited', false, false),

('Samuel Merritt University ABSN', 'California-based accelerated nursing with strong hospital partnerships and diverse clinical rotations.', 'https://www.samuelmerritt.edu', 'Oakland', 'CA', 'nurse', 'accelerated_degree', '12 months', '$75,000-$85,000', 'BSN', 'CCNE Accredited', false, false),

('Regis College ABSN', 'Flexible accelerated nursing program with multiple start dates and strong clinical partnerships in Boston area.', 'https://www.regiscollege.edu', 'Weston', 'MA', 'nurse', 'accelerated_degree', '16 months', '$70,000-$80,000', 'BSN', 'CCNE Accredited', false, true),

('Concordia University Wisconsin ABSN', 'Faith-based accelerated nursing program emphasizing compassionate care and service.', 'https://www.cuw.edu', 'Mequon', 'WI', 'nurse', 'accelerated_degree', '15 months', '$55,000-$65,000', 'BSN', 'CCNE Accredited', false, true),

-- ============================================
-- EMT / PARAMEDIC PROGRAMS
-- ============================================
('UCLA Center for Prehospital Care EMT', 'Premier EMT training program with high pass rates and job placement. Includes clinical rotations.', 'https://cpc.mednet.ucla.edu', 'Los Angeles', 'CA', 'emt', 'certification', '3 months', '$1,500-$2,000', 'EMT-Basic Certification', 'CAAHEP Accredited', false, false),

('FDNY EMT Academy', 'New York City Fire Department EMT training leading to employment with FDNY EMS.', 'https://www.joinfdny.com', 'New York', 'NY', 'emt', 'academy', '4 months', 'Free (with employment commitment)', 'EMT-Basic Certification', 'State Approved', false, false),

('National EMS Academy', 'Comprehensive EMT and Paramedic training with flexible scheduling and online didactic options.', 'https://www.nationalems.com', 'Multiple Locations', 'LA', 'emt', 'certification', '2-6 months (EMT) / 12 months (Paramedic)', '$1,200 (EMT) / $8,000 (Paramedic)', 'EMT or Paramedic Certification', 'CAAHEP Accredited', false, true),

('Creighton University Paramedic Program', 'University-based paramedic education with strong clinical experiences and Catholic mission focus.', 'https://www.creighton.edu', 'Omaha', 'NE', 'emt', 'certification', '12-18 months', '$12,000-$15,000', 'Paramedic Certification', 'CAAHEP Accredited', false, true),

('Austin-Travis County EMS Community Health Paramedic', 'Innovative paramedic program with community paramedicine focus and strong regional partnerships.', 'https://www.atcems.org', 'Austin', 'TX', 'emt', 'certification', '14 months', '$8,000-$10,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

-- ============================================
-- HVAC PROGRAMS
-- ============================================
('HVAC Excellence Training', 'Industry-recognized HVAC certification preparation with hands-on training and EPA certification included.', 'https://www.hvacexcellence.org', 'Various Locations', 'Various', 'hvac', 'certification', '6-12 months', '$5,000-$15,000', 'HVAC Excellence Certification + EPA 608', 'HVAC Excellence Certified', false, false),

('Universal Technical Institute HVAC/R', 'Comprehensive HVAC/R training with manufacturer partnerships (Carrier, Trane) and career services.', 'https://www.uti.edu', 'Multiple Locations', 'AZ', 'hvac', 'trade_school', '10 months', '$20,000-$35,000', 'Diploma + Industry Certifications', 'ACCSC Accredited', false, false),

('Refrigeration School Inc (RSI)', 'Specialized HVAC/R training in Phoenix with excellent job placement rates and industry connections.', 'https://www.rsi.edu', 'Phoenix', 'AZ', 'hvac', 'trade_school', '7-8 months', '$18,000-$25,000', 'Diploma + EPA Certification', 'ACCSC Accredited', false, false),

('Sheet Metal Workers Local Union HVAC Apprenticeship', 'Union apprenticeship combining sheet metal and HVAC skills with excellent wages and benefits.', 'https://www.smwia.org', 'Nationwide', 'Various', 'hvac', 'apprenticeship', '4-5 years', 'Free (paid apprenticeship)', 'Journeyman Certification', 'Department of Labor Registered', false, false),

('Carrier Enterprise Training Program', 'Manufacturer-sponsored training on Carrier equipment with potential employment pathways.', 'https://www.carrierenterprise.com', 'Various Locations', 'Various', 'hvac', 'certification', '2-4 weeks', '$500-$2,000', 'Carrier Certification', 'Manufacturer Certified', false, false),

-- ============================================
-- PLUMBER PROGRAMS
-- ============================================
('United Association (UA) Plumbing Apprenticeship', 'Premier union plumbing apprenticeship with comprehensive training and excellent benefits. Earn $20+/hr while training.', 'https://www.ua.org', 'Nationwide', 'Various', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('Plumbers Local 1 Apprenticeship - NYC', 'New York City plumbers union offering one of the highest-paying apprenticeships in the country.', 'https://www.ualocal1.org', 'New York', 'NY', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('Fortis College Plumbing Technology', 'Accelerated plumbing program preparing students for entry-level positions and apprenticeships.', 'https://www.fortis.edu', 'Multiple Locations', 'Various', 'plumber', 'trade_school', '9-12 months', '$15,000-$20,000', 'Diploma', 'ABHES/COE Accredited', false, false),

('ABC Associated Builders Plumbing Program', 'Merit-shop contractor apprenticeship program with strong industry connections.', 'https://www.abc.org', 'Nationwide', 'Various', 'plumber', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Plumber Certification', 'Department of Labor Registered', false, false),

('Washtenaw Community College Plumbing', 'Community college plumbing program offering associate degree with hands-on training.', 'https://www.wccnet.edu', 'Ann Arbor', 'MI', 'plumber', 'community_college', '2 years', '$8,000-$12,000', 'Associate Degree', 'HLC Accredited', false, false),

-- ============================================
-- FIREFIGHTER PROGRAMS
-- ============================================
('Texas A&M Engineering Extension Service Fire Academy', 'One of the nations premier fire training facilities with comprehensive academy programs.', 'https://teex.org', 'College Station', 'TX', 'firefighter', 'academy', '4-6 months', '$3,000-$8,000', 'Firefighter I & II Certification', 'IFSAC/ProBoard Accredited', false, false),

('Los Angeles Fire Department Recruit Academy', 'LAFD training academy for new firefighter recruits with one of the best fire departments in the nation.', 'https://www.joinlafd.org', 'Los Angeles', 'CA', 'firefighter', 'academy', '4 months', 'Free (with employment)', 'Firefighter I & II + EMT', 'State Fire Marshal Approved', false, false),

('National Fire Academy', 'Federal fire training programs for career development and specialized certifications.', 'https://www.usfa.fema.gov/nfa', 'Emmitsburg', 'MD', 'firefighter', 'academy', 'Various (1 week - 2 weeks)', 'Free (federally funded)', 'Specialized Certifications', 'Federal Program', false, false),

('Columbia Southern University Fire Science', 'Online fire science degree program for working firefighters seeking advancement.', 'https://www.columbiasouthern.edu', 'Online', 'AL', 'firefighter', 'community_college', '2-4 years', '$10,000-$20,000', 'Associate or Bachelor Degree', 'SACSCOC Accredited', true, false),

('Phoenix Fire Department Academy', 'Comprehensive fire academy with paramedic training track available.', 'https://www.phoenix.gov/fire', 'Phoenix', 'AZ', 'firefighter', 'academy', '6 months', 'Free (with employment)', 'Firefighter I & II + EMT', 'State Certified', false, false),

-- ============================================
-- SOLAR TECHNICIAN PROGRAMS
-- ============================================
('Solar Energy International (SEI)', 'Industry-leading solar training with NABCEP certification preparation. Online and hands-on options.', 'https://www.solarenergy.org', 'Paonia', 'CO', 'solar', 'certification', '1-6 months', '$1,500-$5,000', 'NABCEP Certification', 'IREC Accredited', true, true),

('Everblue Training Institute', 'Comprehensive solar PV installation training with NABCEP exam prep and business courses.', 'https://www.everbluetraining.com', 'Online + Various', 'NC', 'solar', 'certification', '1-4 weeks', '$2,000-$4,000', 'NABCEP PV Associate/Installer', 'IREC Accredited', true, true),

('IBEW/NECA Solar Installer Training', 'Union-based solar installation training building on electrical apprenticeship foundation.', 'https://www.njatc.org', 'Various Locations', 'Various', 'solar', 'certification', '2-4 weeks', 'Free (for IBEW members)', 'Solar Installation Certification', 'IBEW Certified', false, false),

('SunPower University', 'Manufacturer training program for SunPower solar products with employment pathways.', 'https://us.sunpower.com', 'Various Locations', 'CA', 'solar', 'certification', '1-2 weeks', 'Free-$1,000', 'SunPower Certified Installer', 'Manufacturer Certified', false, false),

('Laney College Solar Technology', 'Community college program offering comprehensive solar training with hands-on experience.', 'https://www.laney.edu', 'Oakland', 'CA', 'solar', 'community_college', '1-2 years', '$3,000-$6,000', 'Certificate/Associate Degree', 'ACCJC Accredited', false, false),

-- ============================================
-- WELDER PROGRAMS
-- ============================================
('Tulsa Welding School', 'One of Americas oldest welding schools with comprehensive training and excellent job placement.', 'https://www.tws.edu', 'Tulsa', 'OK', 'welder', 'trade_school', '7 months', '$18,000-$22,000', 'Diploma + AWS Certifications', 'ACCSC Accredited', false, false),

('Hobart Institute of Welding Technology', 'Premier welding training facility offering various AWS certification programs.', 'https://www.welding.org', 'Troy', 'OH', 'welder', 'trade_school', '2-6 months', '$5,000-$15,000', 'AWS Certifications', 'AWS Accredited', false, false),

('Lincoln Electric Welding School', 'Manufacturer-backed welding training with state-of-the-art equipment and techniques.', 'https://www.lincolnelectric.com', 'Cleveland', 'OH', 'welder', 'trade_school', '3-12 months', '$10,000-$20,000', 'Lincoln Certification + AWS', 'AWS Accredited', false, false),

('UA Pipe Trades Welding Program', 'Union welding program specializing in pipe welding for high-demand industrial applications.', 'https://www.ua.org', 'Nationwide', 'Various', 'welder', 'apprenticeship', '3-5 years', 'Free (paid apprenticeship)', 'Certified Pipe Welder', 'Department of Labor Registered', false, false),

('Ironworkers Apprenticeship Welding', 'Structural and ornamental ironworking with comprehensive welding training.', 'https://www.ironworkers.org', 'Nationwide', 'Various', 'welder', 'apprenticeship', '3-4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

-- ============================================
-- POLICE OFFICER PROGRAMS
-- ============================================
('NYPD Police Academy', 'New York Police Department academy - one of the largest and most comprehensive in the nation.', 'https://www.nyc.gov/nypd', 'New York', 'NY', 'police', 'academy', '6 months', 'Free (with employment)', 'Peace Officer Certification', 'NY DCJS Certified', false, false),

('LAPD Police Academy', 'Los Angeles Police Department training with progressive community policing focus.', 'https://www.joinlapd.com', 'Los Angeles', 'CA', 'police', 'academy', '6 months', 'Free (with employment)', 'POST Certification', 'CA POST Certified', false, false),

('Chicago Police Academy', 'Chicago PD training academy with strong focus on community relations and de-escalation.', 'https://www.chicagopolice.org', 'Chicago', 'IL', 'police', 'academy', '6 months', 'Free (with employment)', 'Police Officer Certification', 'IL Law Enforcement Training Board', false, false),

('John Jay College Criminal Justice', 'Renowned criminal justice education with pathways to law enforcement careers.', 'https://www.jjay.cuny.edu', 'New York', 'NY', 'police', 'community_college', '2-4 years', '$7,000-$15,000/year', 'Associate/Bachelor Degree', 'Middle States Accredited', false, false),

('FLETC Federal Law Enforcement Training', 'Federal training center for various federal law enforcement agencies.', 'https://www.fletc.gov', 'Glynco', 'GA', 'police', 'academy', '12-22 weeks', 'Free (federal employment)', 'Federal LEO Certification', 'Federal Program', false, false),

-- ============================================
-- MEDICAL LABORATORY TECHNICIAN PROGRAMS
-- ============================================
('Mayo Clinic School of Health Sciences MLT', 'Elite MLT program at world-renowned Mayo Clinic with exceptional training opportunities.', 'https://www.mayo.edu', 'Rochester', 'MN', 'medicalTech', 'community_college', '2 years', '$15,000-$20,000', 'Associate Degree + MLT Certification', 'NAACLS Accredited', false, false),

('Community College of Baltimore County MLT', 'Affordable MLT program with strong clinical partnerships in the Baltimore area.', 'https://www.ccbcmd.edu', 'Baltimore', 'MD', 'medicalTech', 'community_college', '2 years', '$8,000-$12,000', 'Associate Degree + MLT Certification', 'NAACLS Accredited', false, false),

('Weber State University MLS', 'Online Medical Laboratory Science bachelors completion program for working MLTs.', 'https://www.weber.edu', 'Ogden', 'UT', 'medicalTech', 'accelerated_degree', '2 years (completion)', '$12,000-$18,000', 'Bachelor Degree + MLS Certification', 'NAACLS Accredited', true, false),

('Tarrant County College MLT', 'Texas-based MLT program with excellent job placement in Dallas-Fort Worth medical facilities.', 'https://www.tccd.edu', 'Fort Worth', 'TX', 'medicalTech', 'community_college', '2 years', '$6,000-$10,000', 'Associate Degree + MLT Certification', 'NAACLS Accredited', false, false),

('Penn Foster Medical Laboratory Technician', 'Online MLT preparation program offering flexible study options for career changers.', 'https://www.pennfoster.edu', 'Online', 'PA', 'medicalTech', 'certification', '12-18 months', '$2,500-$4,000', 'Diploma', 'DEAC Accredited', true, false),

-- ============================================
-- RELIGIOUS VOCATIONS / MINISTRY PROGRAMS
-- ============================================
-- Seminaries
('Gordon-Conwell Theological Seminary', 'Leading evangelical seminary offering M.Div. and various ministry degrees with flexible formats.', 'https://www.gordonconwell.edu', 'South Hamilton', 'MA', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$20,000-$25,000/year', 'Master of Divinity', 'ATS Accredited', false, true),

('Fuller Theological Seminary', 'Largest multidenominational seminary in North America with diverse theological perspectives.', 'https://www.fuller.edu', 'Pasadena', 'CA', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$22,000-$28,000/year', 'Master of Divinity', 'ATS Accredited', false, true),

('Trinity Evangelical Divinity School', 'Conservative evangelical seminary with strong academic reputation and pastoral training.', 'https://www.tiu.edu/divinity', 'Deerfield', 'IL', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$18,000-$22,000/year', 'Master of Divinity', 'ATS Accredited', false, true),

('Duke Divinity School', 'United Methodist seminary at Duke University with excellent academic resources and ecumenical focus.', 'https://divinity.duke.edu', 'Durham', 'NC', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$25,000-$30,000/year', 'Master of Divinity', 'ATS Accredited', false, false),

('Princeton Theological Seminary', 'Historic Presbyterian seminary offering generous financial aid and rigorous theological education.', 'https://www.ptsem.edu', 'Princeton', 'NJ', 'religiousVocations', 'seminary', '3 years (M.Div.)', 'Full tuition scholarship available', 'Master of Divinity', 'ATS Accredited', false, false),

('Asbury Theological Seminary', 'Wesleyan seminary emphasizing spiritual formation and practical ministry preparation.', 'https://www.asburyseminary.edu', 'Wilmore', 'KY', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$15,000-$20,000/year', 'Master of Divinity', 'ATS Accredited', false, true),

('Dallas Theological Seminary', 'Non-denominational seminary known for biblical exposition and pastoral training.', 'https://www.dts.edu', 'Dallas', 'TX', 'religiousVocations', 'seminary', '4 years (Th.M.)', '$18,000-$22,000/year', 'Master of Theology', 'ATS Accredited', false, true),

('Southeastern Baptist Theological Seminary', 'Southern Baptist seminary with affordable tuition and strong church planting emphasis.', 'https://www.sebts.edu', 'Wake Forest', 'NC', 'religiousVocations', 'seminary', '3 years (M.Div.)', '$8,000-$12,000/year', 'Master of Divinity', 'ATS Accredited', false, true),

-- Catholic Seminaries
('Mundelein Seminary', 'Major Catholic seminary for the Archdiocese of Chicago with comprehensive priestly formation.', 'https://www.usml.edu', 'Mundelein', 'IL', 'religiousVocations', 'seminary', '4-6 years', 'Sponsored by diocese', 'Master of Divinity', 'ATS Accredited', false, false),

('Mount St. Marys Seminary', 'One of the oldest Catholic seminaries in the US with strong formation program.', 'https://www.msmary.edu', 'Emmitsburg', 'MD', 'religiousVocations', 'seminary', '4-6 years', 'Sponsored by diocese', 'Master of Divinity', 'ATS Accredited', false, false),

-- Bible Colleges
('Moody Bible Institute', 'Tuition-free Bible college offering practical ministry training in urban Chicago.', 'https://www.moody.edu', 'Chicago', 'IL', 'religiousVocations', 'bible_college', '4 years', 'Tuition-free', 'Bachelor Degree', 'HLC/ABHE Accredited', false, false),

('Biola University', 'Leading Christian university with Talbot School of Theology and various ministry programs.', 'https://www.biola.edu', 'La Mirada', 'CA', 'religiousVocations', 'bible_college', '4 years', '$45,000-$50,000/year', 'Bachelor Degree', 'WASC/ABHE Accredited', false, false),

('Wheaton College', 'Elite evangelical liberal arts college with strong biblical studies and ministry preparation.', 'https://www.wheaton.edu', 'Wheaton', 'IL', 'religiousVocations', 'bible_college', '4 years', '$42,000-$48,000/year', 'Bachelor Degree', 'HLC Accredited', false, false),

('Liberty University School of Divinity', 'Large evangelical university with extensive online ministry degree options.', 'https://www.liberty.edu', 'Lynchburg', 'VA', 'religiousVocations', 'bible_college', '4 years / 2 years (M.A.)', '$15,000-$25,000/year', 'Bachelor/Master Degree', 'SACSCOC/ATS Accredited', true, true),

('Ozark Christian College', 'Affordable Bible college focused on practical ministry preparation in Restoration Movement tradition.', 'https://www.occ.edu', 'Joplin', 'MO', 'religiousVocations', 'bible_college', '4 years', '$12,000-$15,000/year', 'Bachelor Degree', 'HLC/ABHE Accredited', false, false),

-- Ministry Training (Non-degree)
('Bethel School of Supernatural Ministry', 'Charismatic ministry training school focused on spiritual gifts and revival culture.', 'https://www.bfreschool.com', 'Redding', 'CA', 'religiousVocations', 'ministry_training', '1-3 years', '$5,000-$8,000/year', 'Certificate', 'Non-accredited', false, false),

('YWAM Discipleship Training School', 'International missionary training combining classroom teaching with overseas outreach.', 'https://www.ywam.org', 'Various Locations', 'Various', 'religiousVocations', 'ministry_training', '5-6 months', '$5,000-$10,000 (includes outreach)', 'Certificate', 'Non-accredited', false, false),

('Capstone Ministries Leadership Program', 'Non-profit ministry leadership training for aspiring pastors and church planters.', 'https://www.capstoneministry.org', 'Birmingham', 'AL', 'religiousVocations', 'ministry_training', '1-2 years', '$2,000-$5,000', 'Certificate', 'Non-accredited', false, true),

('The Timothy Initiative', 'Church planting training focused on reproducing disciples and churches globally.', 'https://www.ttionline.org', 'Online + Various', 'Various', 'religiousVocations', 'ministry_training', '6-12 months', 'Low cost / Sponsored', 'Certificate', 'Non-accredited', true, true),

('Kairos School of Ministry', 'Local church-based ministry training emphasizing practical pastoral skills.', 'https://www.kairosschool.org', 'Various Churches', 'Various', 'religiousVocations', 'ministry_training', '2 years', '$1,500-$3,000', 'Certificate', 'Non-accredited', false, false),

-- Chaplaincy Training
('Association of Professional Chaplains Certification', 'Professional chaplaincy certification for healthcare, military, and corporate settings.', 'https://www.professionalchaplains.org', 'Online + CPE Sites', 'Various', 'religiousVocations', 'certification', '4 units CPE + M.Div.', 'Varies by CPE site', 'Board Certified Chaplain', 'APC Certified', false, true),

('Clinical Pastoral Education (ACPE)', 'Interfaith professional education for chaplains in healthcare settings.', 'https://www.acpe.edu', 'Various Medical Centers', 'Various', 'religiousVocations', 'certification', '1-4 units (400 hrs each)', '$500-$1,500 per unit', 'CPE Certification', 'ACPE Accredited', false, false),

-- Youth Ministry
('Youth Specialties/Fuller Youth Ministry Certificate', 'Practical youth ministry training in partnership with Fuller Seminary.', 'https://www.fuller.edu', 'Online', 'CA', 'religiousVocations', 'certification', '6-12 months', '$3,000-$5,000', 'Certificate', 'Fuller Extension', true, false),

('Center for Youth Ministry Training', 'United Methodist youth ministry training with mentorship and practical experience.', 'https://www.cymt.org', 'Nashville', 'TN', 'religiousVocations', 'ministry_training', '2 years', '$8,000-$12,000/year', 'M.A. in Youth Ministry', 'ATS Partner', false, true);

-- ============================================
-- ADDITIONAL ELECTRICIAN PROGRAMS (IBEW/JATC)
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

('IBEW Local 26 Electrical Apprenticeship', '5-year apprenticeship registered in Maryland, Virginia, and DC. Comprehensive training combining classroom instruction with paid on-the-job experience.', 'https://ibewlocal26.org', 'Lanham', 'MD', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Alameda County Electrical JATC (IBEW 595)', 'Private adult vocational school centered around electrical construction training. Aligned with IBEW Local 595 and NorCal NECA.', 'https://www.595jatc.org', 'San Leandro', 'CA', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Nashville Electrical JATC (NEJATC)', '4-year Inside Wireman program combining 8,000 hours hands-on work with 720 hours classroom instruction. Classes held two nights per week.', 'https://www.nejatc.org', 'Nashville', 'TN', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Tri-County Electrical JATC', 'Only federally and state-registered electrical apprenticeship in the Monterey Bay area. Covers Santa Cruz, San Benito, and Monterey counties.', 'https://www.tricountyjatc.org', 'Salinas', 'CA', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('SW Washington Electrical JATC (IBEW 76)', 'Registered apprenticeship sponsored by IBEW Local 76 and Southwest Washington NECA. Earn while you learn model.', 'https://swjatc.org', 'Vancouver', 'WA', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Dakotas Electrical Apprenticeship', 'Comprehensive training covering telecommunications, fiber optics, fire alarms, and NEC code. Over 85% completion rate.', 'https://dakotasjatc.org', 'Fargo', 'ND', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Chattanooga Electrical JATC (IBEW 175)', 'Four-year Journeyman Wireman apprenticeship. Graduate with zero student debt through combined IBEW/NECA efforts.', 'https://www.chattanoogaelectricaljatc.com', 'Chattanooga', 'TN', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('New Mexico JATC Electrical Apprenticeship', 'Work with successful contractors throughout New Mexico. Competitive wages plus pension and medical benefits. College credit available.', 'https://www.nmjatc.org', 'Albuquerque', 'NM', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('IBEW Local 743 JATC', 'Five-year apprenticeship serving southeastern Pennsylvania. Strong career opportunities for committed apprentices.', 'https://743electricaltraining.org', 'Reading', 'PA', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('Evansville NECA/IBEW Electrical JATC', 'First electrical apprenticeship registered with Department of Labor in Indiana (since 1944). Co-sponsored by NECA and IBEW Local 16.', 'https://evvjatc.org', 'Evansville', 'IN', 'electrician', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

-- IEC (Independent Electrical Contractors) Programs
('IEC Rocky Mountain Electrical Apprenticeship', 'Largest IEC electrical training program in the country. Accredited training in Colorado and Wyoming since 1981.', 'https://iecrm.org', 'Denver', 'CO', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('IEC Chesapeake Electrical Apprenticeship', 'Curriculum recognized in Maryland, Virginia, DC, and West Virginia. Registered with US Department of Labor.', 'https://www.iecchesapeake.com', 'Laurel', 'MD', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('IEC Central Indiana Apprenticeship', 'Leading electrical contractor training association in Indianapolis. Comprehensive classroom and hands-on training.', 'https://iec-indy.org', 'Indianapolis', 'IN', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, false),

('IEC Florida West Coast Apprenticeship', 'Training at Hillsborough Community College campuses. Distance learning options available for flexibility.', 'https://iecflorida.org', 'Tampa', 'FL', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, true),

('IEC Pennsylvania Electrical Apprenticeship', 'In-person training in Harrisburg, York, and Erie. Online coursework option available.', 'https://iecpennsylvania.org', 'Harrisburg', 'PA', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, true),

('Montana IEC Electrical Apprenticeship', 'Training offered in Bozeman, Billings, Great Falls, Missoula, and online. Flexible options across Montana.', 'https://www.montanaiec.org', 'Bozeman', 'MT', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'Department of Labor Registered', false, true),

-- ABC (Associated Builders and Contractors) Electrical Programs
('ABC Greater Baltimore Electrical Apprenticeship', 'NCCER accredited training approved by Department of Labor and Veterans Administration. Full benefits package.', 'https://www.abcbaltimore.org', 'Baltimore', 'MD', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'NCCER/DOL Registered', false, false),

('ABC Southern California Electrical Apprenticeship', 'Two-week intensive tracks in Anaheim/Riverside or evening classes in LA/Ventura. Flexible scheduling options.', 'https://abcsocal.org', 'Anaheim', 'CA', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'NCCER/DOL Registered', false, false),

('ABC Eastern Pennsylvania Electrical Apprenticeship', 'State-of-the-art facilities in Suburban Philadelphia and Lehigh Valley. Training since 1967.', 'https://abceastpa.org', 'Philadelphia', 'PA', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'NCCER/DOL Registered', false, false),

('ABC Wisconsin Electrical Apprenticeship', 'Three to five year program with in-class and on-the-job training. Top apprentice competitions showcase skills.', 'https://www.abcwi.org', 'Madison', 'WI', 'electrician', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Electrician License', 'NCCER/DOL Registered', false, false);

-- ============================================
-- ADDITIONAL PLUMBER PROGRAMS (UA Locals)
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

('UA Local 230 Plumbing Apprenticeship', 'Five-year program serving San Diego and Imperial Counties. Strong general education plus specialized curriculum.', 'https://www.ualocal230.org', 'San Diego', 'CA', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('UA Local 78 Plumbing Apprenticeship', 'Los Angeles area program with travel to Orange, Ventura, Santa Barbara, Riverside, and San Bernardino Counties.', 'https://www.uaplumber78.com', 'Los Angeles', 'CA', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('Plumbers Local 130 UA Apprenticeship', 'Chicago-area plumbing apprenticeship with comprehensive training in residential and commercial plumbing.', 'https://plumberslu130ua.com', 'Chicago', 'IL', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('UA Local 51 Plumbing Apprenticeship', 'Accredited in both Rhode Island and Massachusetts. Comprehensive pipefitting and plumbing training.', 'https://ualocal51.com', 'Providence', 'RI', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('UA Local 100 Plumbing Apprenticeship', 'Dallas-Fort Worth area plumbing and pipefitting training with strong industry connections.', 'https://ualocal100.org', 'Dallas', 'TX', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('UA Local 102 Plumbing Apprenticeship', 'Knoxville-based program serving East Tennessee. On-the-job training with classroom instruction.', 'https://ualocal102.org', 'Knoxville', 'TN', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('UA Local 398 Plumbing Apprenticeship', 'Serving Pomona and San Gabriel Valleys. Known as the benchmark for productivity in the plumbing industry.', 'https://local398.org', 'Pomona', 'CA', 'plumber', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'Department of Labor Registered', false, false),

('ABC Florida Gulf Coast Plumbing Apprenticeship', 'Four-year employer-sponsored program. Company covers tuition costs. Classes one night per week plus Saturdays.', 'https://abcflgulf.org', 'Tampa', 'FL', 'plumber', 'apprenticeship', '4 years', 'Free (employer sponsored)', 'Journeyman Plumber License', 'NCCER/DOL Registered', false, false),

('ABC Chesapeake Shores Plumbing Apprenticeship', '8,000 hours OJT plus 576 classroom hours. Registered with Department of Labor and Maryland Apprenticeship Council.', 'https://abc-chesapeake.org', 'Easton', 'MD', 'plumber', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'NCCER/DOL Registered', false, false),

('ABC New Mexico Plumbing Apprenticeship', 'NCCER accredited plumbing program with hands-on training and industry certifications.', 'https://abcnm.org', 'Albuquerque', 'NM', 'plumber', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Plumber License', 'NCCER/DOL Registered', false, false);

-- ============================================
-- ADDITIONAL HVAC PROGRAMS (SMART/Sheet Metal + ABC)
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

('SMART Local 9 HVAC Apprenticeship (Colorado)', 'Joint effort between SMART Local 9 and SMACNA Colorado. Earn while you learn with increasing wages. No cost for training.', 'https://smarthvac.training', 'Denver', 'CO', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 33 Sheet Metal/HVAC Apprenticeship', 'Clear path to a brighter future with good pay, benefits, and lifetime skills. Comprehensive HVAC and sheet metal training.', 'https://sheetmetaltraining.org', 'Cleveland', 'OH', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 16 Sheet Metal Apprenticeship', 'Graduate with zero student debt. Highest level of training in the sheet metal industry with dedicated instructors.', 'https://www.smw16.org', 'Portland', 'OR', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 110 HVAC Apprenticeship (Kentucky)', 'Kentucky premier apprenticeship program. Classes twice monthly with pay raises every six months.', 'https://smart110.org', 'Louisville', 'KY', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 85 HVAC Apprenticeship (Georgia)', 'Training apprentices since the 1940s. Jointly administered by Sheet Metal Workers Local 85 and SMACNA.', 'https://smart85.org', 'Atlanta', 'GA', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 19 HVAC Apprenticeship', 'Training in HVAC systems, sheet metal fabrication, and architectural metal installation including stainless steel, aluminum, and copper.', 'https://www.smartlu19.org', 'Philadelphia', 'PA', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('SMART Local 49 HVAC Apprenticeship', 'Covers HVAC systems, architectural sheet metal, welding, and fabrication. State-of-the-art facilities with experienced instructors.', 'https://smartlu49jatc.com', 'Albuquerque', 'NM', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Sheet Metal Worker', 'Department of Labor Registered', false, false),

('ABC Greater Baltimore HVAC Apprenticeship', 'NCCER accredited HVACR training. Approved by Department of Labor, Maryland Council, and Veterans Administration.', 'https://www.abcbaltimore.org', 'Baltimore', 'MD', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'HVAC Technician Certification', 'NCCER/DOL Registered', false, false),

('ABC Florida Gulf Coast HVAC Apprenticeship', 'Four-year employer-sponsored program including EPA certification. One of several trade options available.', 'https://abcflgulf.org', 'Tampa', 'FL', 'hvac', 'apprenticeship', '4 years', 'Free (employer sponsored)', 'HVAC Technician + EPA 608', 'NCCER/DOL Registered', false, false),

('ABC New Mexico HVAC Apprenticeship', 'NCCER accredited HVAC program with hands-on training. Strong contractor partnerships throughout New Mexico.', 'https://abcnm.org', 'Albuquerque', 'NM', 'hvac', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'HVAC Technician Certification', 'NCCER/DOL Registered', false, false);

-- ============================================
-- ADDITIONAL WELDER PROGRAMS (Ironworkers + UA Pipe Trades)
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

-- Ironworkers Union Welding Programs
('Ironworkers Local 512 Apprenticeship (MN/ND)', 'Four-year program covering structural steel, reinforcing steel, rigging, and welding. Training centers in St. Paul, Hermantown, and Bismarck.', 'https://ironworkers512.com', 'St. Paul', 'MN', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

('NYC Ironworkers Locals 40 & 361 Apprenticeship', 'Three-year program in Astoria, Queens. Classes twice weekly plus Saturdays. Includes OSHA, welding, rigging certifications.', 'https://nycironworkers.org', 'New York', 'NY', 'welder', 'apprenticeship', '3 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

('Ironworkers Local 397 Apprenticeship (Tampa)', 'State-of-the-art 17,940 sq ft training center. Part of International certified AWS Welding Program.', 'https://iwl397.com', 'Tampa', 'FL', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor/AWS Registered', false, false),

('Ironworkers Local 387 Apprenticeship (Atlanta)', 'Four-year program with one week training every three months. Full-time work with contractors between sessions.', 'https://ironworkerslocal387.com', 'Atlanta', 'GA', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

('Ironworkers Local 396 Apprenticeship (St. Louis)', 'Four-year program starting at 60% journeyman wage. Minimum 640 hours classroom plus on-the-job training. All certifications at no cost.', 'https://www.stlouisconstructioncooperative.org', 'St. Louis', 'MO', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

('Ironworkers Local 580 Apprenticeship (NYC)', 'Architectural and ornamental ironwork. Second year includes SMAW, FCAW, Stainless Steel, GTAW, GMAW welding certifications.', 'https://www.ironworkers580.org', 'New York', 'NY', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

('Ironworkers Local 433 Apprenticeship (Southern CA)', 'Southern California ironworkers apprenticeship with comprehensive welding training component.', 'https://ironworkers433.org', 'Los Angeles', 'CA', 'welder', 'apprenticeship', '4 years', 'Free (paid apprenticeship)', 'Journeyman Ironworker + AWS Certs', 'Department of Labor Registered', false, false),

-- UA Pipe Trades Welding Programs
('UA Local 1 Pipe Welding Program (NYC)', 'Premier pipe welding training at Long Island City facility. Access to 84 different UA Weld Test certifications.', 'https://www.ualocal1.org', 'Long Island City', 'NY', 'welder', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Certified Pipe Welder + UA Certs', 'Department of Labor Registered', false, false),

('Pipefitters Local 211 Welding School (Houston)', 'Houston-area pipe welding training with industry-recognized certifications. Strong petrochemical industry connections.', 'https://www.pipefitterslocal211.com', 'Houston', 'TX', 'welder', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Certified Pipe Welder + UA Certs', 'Department of Labor Registered', false, false),

('UA Local 72 Welding Training (Atlanta)', 'Comprehensive pipe welding certification program with advanced training options for career progression.', 'https://ua72.org', 'Atlanta', 'GA', 'welder', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Certified Pipe Welder + UA Certs', 'Department of Labor Registered', false, false),

('UA Local 773 Welding Training (Glens Falls NY)', 'Training facilities in Queensbury and Plattsburgh area. Pipe welding certifications for industrial applications.', 'https://www.lu773.org', 'Glens Falls', 'NY', 'welder', 'apprenticeship', '5 years', 'Free (paid apprenticeship)', 'Certified Pipe Welder + UA Certs', 'Department of Labor Registered', false, false),

('UA Veterans in Piping (VIP) Welding Program', 'Free 18-week accelerated welding training for transitioning military. Guaranteed apprenticeship placement upon completion.', 'https://www.uavip.org', 'Various Military Bases', 'Various', 'welder', 'trade_school', '18 weeks', 'Free (military program)', 'UA Welder Certification', 'Department of Labor Registered', false, false);

-- ============================================
-- PHASE 2: ADDITIONAL NURSING (ABSN) PROGRAMS
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

-- California ABSN Programs
('CSUN Accelerated BSN', '15-month intensive on-campus program for career changers with non-nursing bachelors. California Board of Registered Nursing approved.', 'https://www.csun.edu/nursing', 'Northridge', 'CA', 'nurse', 'accelerated_degree', '15 months', '$25,000-$35,000', 'BSN', 'CCNE Accredited', false, false),

('Mount Saint Marys University ABSN', '12-month accelerated program in Los Angeles combining rigorous academics with hands-on clinical experience.', 'https://www.msmu.edu/nursing', 'Los Angeles', 'CA', 'nurse', 'accelerated_degree', '12 months', '$65,000-$75,000', 'BSN', 'CCNE Accredited', false, false),

('National University ABSN', '15-month Second Bachelor BSN program. Approved by California Board of Registered Nursing with flexible scheduling.', 'https://www.nu.edu/nursing', 'San Diego', 'CA', 'nurse', 'accelerated_degree', '15 months', '$55,000-$65,000', 'BSN', 'CCNE Accredited', false, true),

('Cal State LA Accelerated BSN', '15-month rigorous program for non-nursing degree holders. Affordable public university option in Los Angeles.', 'https://www.calstatela.edu/nursing', 'Los Angeles', 'CA', 'nurse', 'accelerated_degree', '15 months', '$30,000-$35,000', 'BSN', 'CCNE Accredited', false, false),

('San Francisco State University ABSN', '15-month program (four semesters including summer) through College of Professional & Global Education.', 'https://www.nursing.sfsu.edu', 'San Francisco', 'CA', 'nurse', 'accelerated_degree', '15 months', '$28,000-$35,000', 'BSN', 'CCNE Accredited', false, false),

-- Texas ABSN Programs
('Baylor University Distance ABSN', 'One-year intensive program for Texas residents with non-nursing degree. Strong clinical partnerships statewide.', 'https://onlinenursing.baylor.edu', 'Dallas', 'TX', 'nurse', 'accelerated_degree', '12 months', '$50,000-$60,000', 'BSN', 'CCNE Accredited', false, true),

('UT Austin Accelerated BSN', 'Prestigious accelerated nursing program at flagship Texas university with outstanding clinical rotations.', 'https://nursing.utexas.edu', 'Austin', 'TX', 'nurse', 'accelerated_degree', '15 months', '$40,000-$50,000', 'BSN', 'CCNE Accredited', false, false),

('Texas Tech ABSN', 'Second degree BSN program with multiple campus locations across Texas. Strong rural health focus.', 'https://www.ttuhsc.edu/nursing', 'Lubbock', 'TX', 'nurse', 'accelerated_degree', '16 months', '$35,000-$45,000', 'BSN', 'CCNE Accredited', false, true),

-- New York ABSN Programs
('Iona University ABSN', '16-month accelerated program in New Rochelle. Close proximity to NYC healthcare facilities.', 'https://www.iona.edu/nursing', 'New Rochelle', 'NY', 'nurse', 'accelerated_degree', '16 months', '$60,000-$70,000', 'BSN', 'CCNE Accredited', false, false),

('NYU Rory Meyers ABSN', '15-month accelerated program at top-ranked nursing school with exceptional NYC clinical placements.', 'https://nursing.nyu.edu', 'New York', 'NY', 'nurse', 'accelerated_degree', '15 months', '$90,000-$100,000', 'BSN', 'CCNE Accredited', false, false),

('Columbia University ABSN', 'Elite accelerated nursing program with access to Columbia University Irving Medical Center.', 'https://www.nursing.columbia.edu', 'New York', 'NY', 'nurse', 'accelerated_degree', '15 months', '$95,000-$105,000', 'BSN', 'CCNE Accredited', false, false),

('Stony Brook University ABSN', 'Affordable SUNY accelerated nursing program on Long Island with strong hospital partnerships.', 'https://nursing.stonybrook.edu', 'Stony Brook', 'NY', 'nurse', 'accelerated_degree', '14 months', '$35,000-$45,000', 'BSN', 'CCNE Accredited', false, false),

-- Florida ABSN Programs
('University of Miami ABSN', 'Accelerated program in South Florida with access to top-tier clinical sites and diverse patient populations.', 'https://www.miami.edu/nursing', 'Coral Gables', 'FL', 'nurse', 'accelerated_degree', '14 months', '$70,000-$80,000', 'BSN', 'CCNE Accredited', false, false),

('University of Central Florida ABSN', 'Fast-track nursing program in Orlando serving central Florida healthcare needs.', 'https://nursing.ucf.edu', 'Orlando', 'FL', 'nurse', 'accelerated_degree', '16 months', '$40,000-$50,000', 'BSN', 'CCNE Accredited', false, false),

('Florida Atlantic University ABSN', 'Accelerated second-degree BSN in South Florida with strong community health focus.', 'https://nursing.fau.edu', 'Boca Raton', 'FL', 'nurse', 'accelerated_degree', '16 months', '$35,000-$45,000', 'BSN', 'CCNE Accredited', false, false),

-- Other Notable ABSN Programs
('University of Washington ABSN', 'Top-ranked accelerated nursing program in the Pacific Northwest with exceptional clinical training.', 'https://nursing.uw.edu', 'Seattle', 'WA', 'nurse', 'accelerated_degree', '18 months', '$50,000-$60,000', 'BSN', 'CCNE Accredited', false, false),

('University of Virginia ABSN', 'Prestigious accelerated program with hybrid format options and strong UVA Health partnerships.', 'https://www.nursing.virginia.edu', 'Charlottesville', 'VA', 'nurse', 'accelerated_degree', '16 months', '$45,000-$55,000', 'BSN', 'CCNE Accredited', false, true),

('UMass Amherst ABSN', 'Accelerated BSN at flagship Massachusetts public university. Completed in just 12 months.', 'https://www.umass.edu/nursing', 'Amherst', 'MA', 'nurse', 'accelerated_degree', '12 months', '$40,000-$50,000', 'BSN', 'CCNE Accredited', false, false),

('Elmhurst University Distance ABSN', 'Only distance ABSN program in Illinois. Ranked #3 Most Innovative Midwest School by US News.', 'https://www.elmhurst.edu/nursing', 'Elmhurst', 'IL', 'nurse', 'accelerated_degree', '16 months', '$55,000-$65,000', 'BSN', 'CCNE Accredited', false, true),

('Oakland University ABSN', 'Michigan accelerated nursing program with strong Detroit-area hospital partnerships.', 'https://www.oakland.edu/nursing', 'Rochester', 'MI', 'nurse', 'accelerated_degree', '15 months', '$35,000-$45,000', 'BSN', 'CCNE Accredited', false, false);

-- ============================================
-- PHASE 2: ADDITIONAL EMT/PARAMEDIC PROGRAMS
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

-- California Paramedic Programs
('Sacramento State Paramedic Program', 'First and only CSU campus offering paramedic training. Most clinical and field agency contracts of any CA accredited program.', 'https://cce.csus.edu/paramedic', 'Sacramento', 'CA', 'emt', 'certification', '12-14 months', '$10,000-$15,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Palomar College Paramedic Program', 'San Diego County accredited program with California EMS Authority and CAAHEP approval.', 'https://www.palomar.edu/eme', 'San Marcos', 'CA', 'emt', 'community_college', '12 months', '$8,000-$12,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Cuesta College Paramedic Program', 'Three-semester full-time program on San Luis Obispo campus. Certificate or Associate degree options.', 'https://www.cuesta.edu/ems', 'San Luis Obispo', 'CA', 'emt', 'community_college', '12 months', '$6,000-$10,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Mt. San Antonio College Paramedic Academy', '16-week intensive didactic program followed by clinical rotations. Strong LA County connections.', 'https://www.mtsac.edu/paramedic', 'Walnut', 'CA', 'emt', 'community_college', '12 months', '$7,000-$11,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

-- Texas Paramedic Programs
('Northeast Texas Community College Paramedic', 'NREMT-recognized program with Texas DSHS approval. Rural and urban clinical experiences.', 'https://www.ntcc.edu/ems', 'Mt. Pleasant', 'TX', 'emt', 'community_college', '12 months', '$5,000-$8,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Amarillo College Paramedic Program', 'Only CAAHEP-accredited paramedic program in the Texas Panhandle. Strong regional healthcare partnerships.', 'https://www.actx.edu/ems', 'Amarillo', 'TX', 'emt', 'community_college', '12 months', '$6,000-$9,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('TEEX Paramedic Program (Texas A&M)', 'Premier state EMS training at Texas A&M Extension Service. Nationally recognized program.', 'https://teex.org/ems', 'College Station', 'TX', 'emt', 'certification', '12-14 months', '$8,000-$12,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

-- Massachusetts Programs
('Pro EMS Center for Medics', 'First Massachusetts EMS educational facility to be CAAHEP accredited. Boston-area clinical rotations.', 'https://www.proems.com', 'Cambridge', 'MA', 'emt', 'certification', '12 months', '$12,000-$16,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Bunker Hill Community College Paramedic', 'Boston-area community college offering EMT, AEMT, and Paramedic pathways.', 'https://www.bhcc.edu/ems', 'Chelsea', 'MA', 'emt', 'community_college', '12 months', '$7,000-$10,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Cape Cod Community College Paramedic', 'Serving Cape Cod and southeastern Massachusetts with comprehensive EMS training.', 'https://www.capecod.edu/ems', 'West Barnstable', 'MA', 'emt', 'community_college', '12 months', '$6,500-$9,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

-- Other Notable Programs
('Century College Paramedic Program (Minnesota)', 'Minnesota pioneer since 1972. Licensed for EMR, EMT, Paramedic, and Community Paramedic curriculum.', 'https://www.century.edu/paramedic', 'White Bear Lake', 'MN', 'emt', 'community_college', '12-18 months', '$8,000-$12,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Western Carolina University Paramedic BS', 'First baccalaureate paramedic program in the nation. One of only 20 institutions offering BS in Emergency Medical Care.', 'https://www.wcu.edu/ems', 'Cullowhee', 'NC', 'emt', 'accelerated_degree', '2 years', '$15,000-$25,000', 'BS + Paramedic Certification', 'CAAHEP Accredited', false, false),

('Central Washington University Paramedicine', 'Training individuals in prehospital emergency medical care since 1973. Strong Pacific Northwest presence.', 'https://www.cwu.edu/ems', 'Ellensburg', 'WA', 'emt', 'community_college', '12-18 months', '$10,000-$15,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false),

('Pima Community College Paramedic (Arizona)', 'Associate of Applied Science in EMT-Paramedic serving Tucson and southern Arizona.', 'https://www.pima.edu/ems', 'Tucson', 'AZ', 'emt', 'community_college', '2 years', '$8,000-$12,000', 'AAS + Paramedic Certification', 'CAAHEP Accredited', false, false),

('Lake Area Technical College Paramedic (South Dakota)', 'Well-established program with graduates in demand throughout South Dakota and beyond.', 'https://www.lakeareatech.edu/ems', 'Watertown', 'SD', 'emt', 'community_college', '12 months', '$6,000-$9,000', 'Paramedic Certification', 'CAAHEP Accredited', false, false);

-- ============================================
-- PHASE 2: ADDITIONAL SOLAR TECHNICIAN PROGRAMS
-- ============================================
INSERT INTO programs (name, description, website, city, state, career_path, program_type, duration, cost_estimate, credentials, accreditation, is_online, is_hybrid) VALUES

-- Community College Solar Programs
('Front Range Community College Solar PV', 'NABCEP PV Installation Professional certification preparation with hands-on training in Colorado.', 'https://www.frontrange.edu/solar', 'Westminster', 'CO', 'solar', 'community_college', '3-6 months', '$3,000-$5,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('Broward College Solar Installation', 'Online NABCEP PV Installation certification preparation serving South Florida.', 'https://www.broward.edu/solar', 'Fort Lauderdale', 'FL', 'solar', 'community_college', '3-6 months', '$2,500-$4,000', 'NABCEP PV Associate', 'NABCEP Registered', true, false),

('St. Philip College Solar Technology (Texas)', 'San Antonio community college solar training with NABCEP certification prep.', 'https://www.alamo.edu/spc', 'San Antonio', 'TX', 'solar', 'community_college', '6-12 months', '$3,000-$5,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('St. Louis Community College Solar', 'Missouri solar installation training with industry certifications and job placement assistance.', 'https://www.stlcc.edu/solar', 'St. Louis', 'MO', 'solar', 'community_college', '6 months', '$2,500-$4,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('St. Petersburg College Solar Energy', 'Florida solar training program with strong utility and contractor partnerships.', 'https://www.spcollege.edu/solar', 'St. Petersburg', 'FL', 'solar', 'community_college', '6-12 months', '$3,000-$5,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('Florida Solar Energy Center (UCF)', 'University of Central Florida research center offering professional solar training.', 'https://www.floridaenergycenter.org', 'Cocoa', 'FL', 'solar', 'certification', '1-4 weeks', '$1,500-$3,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

-- Additional NABCEP Training Providers
('HeatSpring Solar Training', 'Online NABCEP certification prep courses for PV Installation Professional credential.', 'https://www.heatspring.com', 'Online', 'MA', 'solar', 'certification', '2-8 weeks', '$1,000-$2,500', 'NABCEP PV Associate/PVIP', 'NABCEP Registered', true, false),

('Solar Training Academy (California)', 'Hands-on solar installation training in California with job placement assistance.', 'https://www.solartrainingacademy.com', 'San Diego', 'CA', 'solar', 'trade_school', '2-4 weeks', '$2,000-$4,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('Imagine Solar Training (North Carolina)', 'IREC accredited solar training with NABCEP certification preparation.', 'https://www.imaginesolar.com', 'Charlotte', 'NC', 'solar', 'certification', '1-4 weeks', '$1,500-$3,500', 'NABCEP PV Associate', 'IREC/NABCEP Accredited', false, true),

('Solar Living Institute', 'Hands-on renewable energy education at Californias premier off-grid demonstration site.', 'https://www.solarliving.org', 'Hopland', 'CA', 'solar', 'certification', '1-2 weeks', '$800-$2,000', 'Solar Installation Certificate', 'NABCEP Registered', false, false),

-- State-Sponsored Programs
('Illinois Solar Training Pipeline', 'State-managed solar training through Illinois Community College Board. Future Energy Jobs Act program.', 'https://www.iccb.org/solar', 'Springfield', 'IL', 'solar', 'community_college', '3-6 months', 'Free-$2,000 (subsidized)', 'NABCEP PV Associate', 'State Approved', false, true),

('NYC Solar Installer Training (CUNY)', 'City University of New York solar workforce development for NYC residents.', 'https://www.cuny.edu/solar', 'New York', 'NY', 'solar', 'community_college', '3-6 months', '$1,500-$3,000', 'NABCEP PV Associate', 'NABCEP Registered', false, false),

('Grid Alternatives Solar Training', 'Nonprofit providing hands-on solar installation experience while helping low-income families.', 'https://www.gridalternatives.org', 'Oakland', 'CA', 'solar', 'certification', '1-6 months', 'Free (volunteer-based)', 'Solar Installation Certificate', 'Nonprofit Partner', false, false),

('Veterans Solar Training (IREC)', 'GI Bill eligible solar training programs connecting veterans to renewable energy careers.', 'https://irecusa.org/solar-ready-vets', 'Various Locations', 'Various', 'solar', 'certification', '2-8 weeks', 'Free (GI Bill)', 'NABCEP Certification', 'IREC/VA Approved', false, true);
