"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CareerPath,
  careerPaths,
  careerLibrary,
} from "@/lib/quizData";
import { TextWithAcronyms } from "@/components/Acronym";
import { ResponsiveAd, InContentAd } from "@/components/AdPlaceholder";

// YouTube Channel Data with thumbnails
const youtubeChannels = {
  general: [
    {
      name: "Mike Rowe Works",
      handle: "@miaborowe",
      url: "https://www.youtube.com/@miaborowe",
      subscribers: "300K+",
      description: "Dirty Jobs host championing skilled trades and work ethic scholarships",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kQjS2-hk0-4EhJgB4gYwxwZPJr6J3qC9K9vZJ3AQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "SkillsUSA",
      handle: "@SkillsUSA",
      url: "https://www.youtube.com/@SkillsUSA",
      subscribers: "15K+",
      description: "National organization for career and technical education students",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mwwZ-GqZmTWzxZyTPbhvEFVQiOmwxbqXLKEKYY=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  electrician: [
    {
      name: "Electrician U",
      handle: "@ElectricianU",
      url: "https://www.youtube.com/@ElectricianU",
      subscribers: "850K+",
      description: "Master electrician Dustin Stelzer teaches electrical theory and practical skills",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nUxXMRw5sDQ9V4EzPjHwMKb8B6mPYCjwrWLRLr=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "ElectroBOOM",
      handle: "@ElectroBOOM",
      url: "https://www.youtube.com/@ElectroBOOM",
      subscribers: "7.8M+",
      description: "Educational and entertaining electrical experiments with Mehdi Sadaghdar",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lhYkPuNmvF0kn8mQqlpcHgKrK65fMs17pj08mDYZ8=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "The Engineering Mindset",
      handle: "@EngineeringMindset",
      url: "https://www.youtube.com/@EngineeringMindset",
      subscribers: "2M+",
      description: "Animated explanations of electrical and mechanical engineering concepts",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lLZFZTZXMwHlKBgJYM_hN9rIw3TZXZQJVG6FzJ=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  plumber: [
    {
      name: "Roger Wakefield",
      handle: "@RogerWakefield",
      url: "https://www.youtube.com/@RogerWakefield",
      subscribers: "1.2M+",
      description: "Master plumber with 40+ years experience, 1,600+ educational videos",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mP2z4sQlFI8xqfQUmCZQlXqjGpbD3hPQlKHFNKLw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Got2Learn",
      handle: "@got2learn",
      url: "https://www.youtube.com/@got2learn",
      subscribers: "500K+",
      description: "Canadian plumber sharing commercial plumbing tricks of the trade",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mAILzJ8Ws2n5vBLvCKEJc1O7C3SFGxkMvnA1g=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Plumberparts",
      handle: "@plaborparts",
      url: "https://www.youtube.com/@plumberparts",
      subscribers: "600K+",
      description: "UK-based plumbing tutorials from basic repairs to advanced installations",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kj_HqFqGsYqpH-zSeBJwjnt9xWxKhQCnm5KVrA=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  hvac: [
    {
      name: "HVAC School",
      handle: "@HVACSchool",
      url: "https://www.youtube.com/@HVACSchool",
      subscribers: "200K+",
      description: "Technical HVAC training and industry best practices",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nVwXc4_4TqEKLMbqfQz6Y3rQpRTLy3hQIJLMeXFA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Word of Advice TV",
      handle: "@WordofAdviceTV",
      url: "https://www.youtube.com/@WordofAdviceTV",
      subscribers: "500K+",
      description: "HVAC and appliance repair tutorials and troubleshooting",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_l7GTPfQv0TJbf0qmLVQCKLKz6aGJNFHKrRmyVG=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "AC Service Tech",
      handle: "@ACServiceTech",
      url: "https://www.youtube.com/@ACServiceTech",
      subscribers: "400K+",
      description: "In-depth HVAC technical training and service procedures",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lB1Dz1_KEF7vYpLU0JKS_L3FqXJmhqvOQPXqNH=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  welder: [
    {
      name: "Welding Tips and Tricks",
      handle: "@weldingtipsandtricks",
      url: "https://www.youtube.com/@weldingtipsandtricks",
      subscribers: "780K+",
      description: "Jody Collier's clear arc shots for TIG, MIG, stick and flux-core welding",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nzQrZ8hPMvOqq2RNXA6hzQJI6TnY_Q6fLs9DdP=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Weld.com",
      handle: "@waborcom",
      url: "https://www.youtube.com/@weldcom",
      subscribers: "400K+",
      description: "75+ years combined experience from structural to aerospace welding",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_k5A_dDV-5fQWvfJPLZcZMIqVjH_LvKqCyNWwSi=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "ChuckE2009",
      handle: "@ChuckE2009",
      url: "https://www.youtube.com/@ChuckE2009",
      subscribers: "500K+",
      description: "Informative welding projects and fabrication content",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mzJRlTJ_x5VVQY2cOaKLqFWZJkLvM6Mv5dKRCJ=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  nurse: [
    {
      name: "RegisteredNurseRN",
      handle: "@RegisteredNurseRN",
      url: "https://www.youtube.com/@RegisteredNurseRN",
      subscribers: "4.6M+",
      description: "Nurse Sarah's NCLEX prep and clinical nursing education",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kSvJjkvL1q8dPDgJVi3BLvqm8OyRUmXP8JNcQD=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Simple Nursing",
      handle: "@SimpleNursing",
      url: "https://www.youtube.com/@SimpleNursing",
      subscribers: "1.5M+",
      description: "Animated nursing and pharmacology videos for exam prep",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lCq6BPbCL1XJpVnKw6d2vNKiJnvL3zJQ8JRSVB=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Nurse Blake",
      handle: "@NurseBlake",
      url: "https://www.youtube.com/@NurseBlake",
      subscribers: "800K+",
      description: "RN comedian covering nursing life, burnout, and career advice",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_n3cPdXsXF6EvNBvMBqNiIJnQKPZKP_O3QSWQCF=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  emt: [
    {
      name: "PrepMedic",
      handle: "@PrepMedic",
      url: "https://www.youtube.com/@PrepMedic",
      subscribers: "200K+",
      description: "EMS education and emergency medical scenarios",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lgJiVS5wL9pKfvnqAa_z4gI1M8Q7RMeJ2SvMSb=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "MedicTests",
      handle: "@MedicTests",
      url: "https://www.youtube.com/@MedicTests",
      subscribers: "50K+",
      description: "EMT and Paramedic exam prep and study guides",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kHqGpKL6qEz_8vWL9ZZa_dMBGMlJFJFvz_o5Mz=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  firefighter: [
    {
      name: "FirefighterNOW",
      handle: "@FirefighterNOW",
      url: "https://www.youtube.com/@FirefighterNOW",
      subscribers: "100K+",
      description: "Firefighter training, hiring tips, and career advice",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kS3fzR8qnNLM7jPqRp5QPl_qk3fWvmqFU_EqSm=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Fire Department Chronicles",
      handle: "@FireDeptChronicles",
      url: "https://www.youtube.com/@faborDeptChronicles",
      subscribers: "300K+",
      description: "Real firefighter stories and department behind-the-scenes",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mD3N7Z2rXK8LCbB4Db4qLCQkPIwEKw9RvLF9Yq=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  police: [
    {
      name: "Police Activity",
      handle: "@PoliceActivity",
      url: "https://www.youtube.com/@PoliceActivity",
      subscribers: "5M+",
      description: "Real police bodycam footage and law enforcement scenarios",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nD7sQfDvPq5YXYL-rLzF2KmZPWvqcKXqjV0A=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Donut Operator",
      handle: "@DonutOperator",
      url: "https://www.youtube.com/@DonutOperator",
      subscribers: "3.5M+",
      description: "Former police officer analyzing law enforcement videos",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lxJGWKcB0JEL2FCvLZgKjV0pL7bKFaQLmxUQ=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  solar: [
    {
      name: "Will Prowse",
      handle: "@WillProwse",
      url: "https://www.youtube.com/@WillProwse",
      subscribers: "1.2M+",
      description: "DIY solar and battery systems reviews and tutorials",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mKNVXsI7GR8c1T1cR_7LQYvqz_Z8vU_E4M=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Solar Solution",
      handle: "@SolarSolution",
      url: "https://www.youtube.com/@SolarSolution",
      subscribers: "100K+",
      description: "Professional solar installation tips and industry insights",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lFvLwsKjQb8_2qzPRGrKmqTvPxJ8zRLdw=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  construction: [
    {
      name: "Essential Craftsman",
      handle: "@essentialcraftsman",
      url: "https://www.youtube.com/@essentialcraftsman",
      subscribers: "1.5M+",
      description: "Master builder Scott Wadsworth on construction and life skills",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mRAXE5qXLIqXXgV6PQQC0SsZVXWvPKqL9nJA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Matt Risinger",
      handle: "@MattRisinger",
      url: "https://www.youtube.com/@MattRisinger",
      subscribers: "1M+",
      description: "Building science and modern construction techniques",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mRK1PJLBvXLJKcQG0RnDj5VyH8WjKPqM0=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  ministry: [
    {
      name: "The Gospel Coalition",
      handle: "@TGC",
      url: "https://www.youtube.com/@TGC",
      subscribers: "400K+",
      description: "Theological training, sermons, and ministry resources",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kl5VXJL3u_8FKvAl0PwJLGQoRwS8wqLFj=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Desiring God",
      handle: "@daboringGod",
      url: "https://www.youtube.com/@daboringGod",
      subscribers: "1.2M+",
      description: "John Piper's ministry with sermons and pastoral guidance",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kVjRc2VNQKRR5tKMHQFv_rMF_iJ5LvQcvN=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "The Bible Project",
      handle: "@bibleproject",
      url: "https://www.youtube.com/@bibleproject",
      subscribers: "5M+",
      description: "Animated videos exploring biblical themes and books",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lMmVKRxPpJrLvS6qGZqKlZVQ9DQvbqK2Y=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Carey Nieuwhof",
      handle: "@careynieuwhof",
      url: "https://www.youtube.com/@careynieuwhof",
      subscribers: "100K+",
      description: "Leadership podcast for pastors and church leaders",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kQ_xJpY9lRJ6gKz8vFqL2YlN6cQvP=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  military: [
    {
      name: "U.S. Army",
      handle: "@USArmy",
      url: "https://www.youtube.com/@USArmy",
      subscribers: "1.5M+",
      description: "Official U.S. Army channel with career info and soldier stories",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lC7YT0AvGz5wBj2r5KpxYQj_Lc8pR0mJqz=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "U.S. Navy",
      handle: "@USNavy",
      url: "https://www.youtube.com/@USNavy",
      subscribers: "800K+",
      description: "Official Navy channel featuring careers and life at sea",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kNpzKPXJv3LQwYcJ8mZKVx_5pJqMfH=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "U.S. Air Force",
      handle: "@USAirForce",
      url: "https://www.youtube.com/@USAirForce",
      subscribers: "700K+",
      description: "Official Air Force channel with career paths and airman stories",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mJLQ5xYNrWk8v_KFQqpHGz3BxMwRfK=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Jocko Podcast",
      handle: "@JockoPodcast",
      url: "https://www.youtube.com/@JockoPodcast",
      subscribers: "1.8M+",
      description: "Former Navy SEAL Jocko Willink on leadership and discipline",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nLpqLVrX8Zx_YpJqWQTKmV7EwHqNLz=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
  mechanic: [
    {
      name: "South Main Auto Repair",
      handle: "@SouthMainAutoRepairAvworwvr",
      url: "https://www.youtube.com/@SouthMainAutoRepairAvworwvr",
      subscribers: "900K+",
      description: "Real-world auto diagnostics and repair from a working shop",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_nQGqKLM5PMhJvN2y_HRNe3dKRNxQp7bQoS=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "ChrisFix",
      handle: "@ChrisFix",
      url: "https://www.youtube.com/@ChrisFix",
      subscribers: "12M+",
      description: "DIY car repair tutorials for beginners to advanced mechanics",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kxPQpWdG6uP8SxYPV8dNg5gFSHbRvxFPM=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Scotty Kilmer",
      handle: "@ScottyKilmer",
      url: "https://www.youtube.com/@ScottyKilmer",
      subscribers: "6M+",
      description: "50+ years mechanic experience with tips, reviews, and car advice",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_mJ2pRlQ6pXhXjdL8Wt0vqA8NxgHbKVmRN=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Scanner Danner",
      handle: "@ScannerDanner",
      url: "https://www.youtube.com/@ScannerDanner",
      subscribers: "500K+",
      description: "Advanced automotive diagnostics and electrical troubleshooting",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_lBqVwKjqPRvDMxK8FqwEpJPLzxmHQF=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Diesel Creek",
      handle: "@DieselCreek",
      url: "https://www.youtube.com/@DieselCreek",
      subscribers: "700K+",
      description: "Heavy equipment and diesel machinery restoration and repair",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_kPqXLmNRf8vZJKqRH7cLvJqPmWdKQ=s176-c-k-c0x00ffffff-no-rj",
    },
  ],
};

type ChannelCategory = keyof typeof youtubeChannels;

export default function LibraryPage() {
  const [selectedChannelCategory, setSelectedChannelCategory] = useState<ChannelCategory>("general");
  const [compareList, setCompareList] = useState<CareerPath[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const allCareers = Object.keys(careerPaths) as CareerPath[];

  const toggleCompare = (careerKey: CareerPath) => {
    setCompareList((prev) => {
      if (prev.includes(careerKey)) {
        return prev.filter((c) => c !== careerKey);
      }
      if (prev.length >= 3) {
        return prev; // Max 3 careers
      }
      return [...prev, careerKey];
    });
  };

  const channelCategories: { key: ChannelCategory; label: string }[] = [
    { key: "general", label: "General Trades" },
    { key: "electrician", label: "Electrical" },
    { key: "plumber", label: "Plumbing" },
    { key: "hvac", label: "HVAC" },
    { key: "welder", label: "Welding" },
    { key: "mechanic", label: "Mechanic" },
    { key: "nurse", label: "Nursing" },
    { key: "emt", label: "EMS" },
    { key: "firefighter", label: "Fire" },
    { key: "police", label: "Police" },
    { key: "solar", label: "Solar" },
    { key: "construction", label: "Construction" },
    { key: "ministry", label: "Ministry" },
    { key: "military", label: "Military" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex items-center gap-6 text-text-secondary text-sm">
            <Link href="/programs" className="hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/library" className="text-primary">
              Career Library
            </Link>
            <Link href="/financial-aid" className="hover:text-primary transition-colors">
              Financial Aid
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 border-b border-surface-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Career Library
          </h1>
          <p className="text-text-secondary text-lg">
            Explore all career paths and learn what each one involves
          </p>
        </div>
      </section>

      {/* Ad - Below Hero */}
      <div className="py-6 flex justify-center border-b border-surface-light">
        <ResponsiveAd desktopSize="leaderboard" mobileSize="mobile-banner" />
      </div>

      {/* Comparison Floating Bar */}
      {compareList.length > 0 && !showComparison && (
        <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-surface-light p-4 z-40 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-text-secondary text-sm">Comparing:</span>
              <div className="flex gap-2">
                {compareList.map((careerKey) => (
                  <span
                    key={careerKey}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {careerPaths[careerKey].icon} {careerPaths[careerKey].title}
                    <button
                      onClick={() => toggleCompare(careerKey)}
                      className="ml-1 hover:text-red-400"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              {compareList.length < 3 && (
                <span className="text-text-muted text-xs">
                  (select up to {3 - compareList.length} more)
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCompareList([])}
                className="px-4 py-2 text-text-secondary hover:text-text-primary text-sm"
              >
                Clear
              </button>
              <button
                onClick={() => setShowComparison(true)}
                disabled={compareList.length < 2}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${
                  compareList.length >= 2
                    ? "bg-primary hover:bg-primary-hover text-white"
                    : "bg-surface-light text-text-muted cursor-not-allowed"
                }`}
              >
                Compare {compareList.length} Careers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center overflow-y-auto py-8">
          <div className="bg-background rounded-xl border border-surface-light max-w-6xl w-full mx-4 my-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-surface-light">
              <h2 className="text-2xl font-bold">Career Comparison</h2>
              <button
                onClick={() => setShowComparison(false)}
                className="text-text-secondary hover:text-text-primary text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Comparison Table */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-surface-light rounded-tl-lg"></th>
                    {compareList.map((careerKey, idx) => (
                      <th
                        key={careerKey}
                        className={`p-4 bg-surface-light text-center ${
                          idx === compareList.length - 1 ? "rounded-tr-lg" : ""
                        }`}
                      >
                        <div className="text-3xl mb-2">{careerPaths[careerKey].icon}</div>
                        <div className="font-semibold">{careerPaths[careerKey].title}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Salary */}
                  <tr className="border-b border-surface-light">
                    <td className="p-3 font-medium text-text-secondary">Salary Range</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-center text-primary font-semibold">
                        {careerPaths[careerKey].salary}
                      </td>
                    ))}
                  </tr>

                  {/* Training Time */}
                  <tr className="border-b border-surface-light">
                    <td className="p-3 font-medium text-text-secondary">Training Time</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-center">
                        {careerPaths[careerKey].training}
                      </td>
                    ))}
                  </tr>

                  {/* Job Growth */}
                  <tr className="border-b border-surface-light">
                    <td className="p-3 font-medium text-text-secondary">Job Growth</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-center text-success">
                        {careerPaths[careerKey].growth}
                      </td>
                    ))}
                  </tr>

                  {/* Certifications */}
                  <tr className="border-b border-surface-light">
                    <td className="p-3 font-medium text-text-secondary align-top">Key Certifications</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-sm text-text-secondary">
                        <ul className="space-y-1">
                          {careerLibrary[careerKey].certifications.slice(0, 3).map((cert, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-yellow-400">&#9733;</span>
                              <TextWithAcronyms text={cert} />
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Key Skills */}
                  <tr className="border-b border-surface-light">
                    <td className="p-3 font-medium text-text-secondary align-top">Key Skills</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-sm text-text-secondary">
                        <ul className="space-y-1">
                          {careerLibrary[careerKey].keySkills.slice(0, 3).map((skill, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-400">&#10003;</span>
                              <TextWithAcronyms text={skill} />
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Pros */}
                  <tr className="border-b border-surface-light bg-green-500/5">
                    <td className="p-3 font-medium text-green-400 align-top">Pros</td>
                    {compareList.map((careerKey) => (
                      <td key={careerKey} className="p-3 text-sm text-text-secondary">
                        <ul className="space-y-1">
                          {careerLibrary[careerKey].prosAndCons.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-400">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Cons */}
                  <tr className="bg-red-500/5">
                    <td className="p-3 font-medium text-red-400 align-top rounded-bl-lg">Cons</td>
                    {compareList.map((careerKey, idx) => (
                      <td
                        key={careerKey}
                        className={`p-3 text-sm text-text-secondary ${
                          idx === compareList.length - 1 ? "rounded-br-lg" : ""
                        }`}
                      >
                        <ul className="space-y-1">
                          {careerLibrary[careerKey].prosAndCons.cons.slice(0, 3).map((con, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-red-400">&minus;</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center p-6 border-t border-surface-light bg-surface">
              <button
                onClick={() => {
                  setShowComparison(false);
                  setCompareList([]);
                }}
                className="text-text-secondary hover:text-text-primary text-sm"
              >
                Clear &amp; Close
              </button>
              <button
                onClick={() => setShowComparison(false)}
                className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Career Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCareers.map((careerKey) => {
              const career = careerPaths[careerKey];
              const isInCompare = compareList.includes(careerKey);

              return (
                <div
                  key={careerKey}
                  id={careerKey}
                  className={`bg-surface rounded-xl border overflow-hidden transition-colors ${
                    isInCompare ? "border-primary" : "border-surface-light"
                  }`}
                >
                  {/* Card Content */}
                  <Link
                    href={`/careers/${careerKey}`}
                    className="block p-5 hover:bg-surface-light/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{career.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1">{career.title}</h3>
                        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                          {career.tagline}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                          <span className="text-primary font-medium">{career.salary}</span>
                          <span className="text-text-muted">{career.training}</span>
                          <span className="text-success">{career.growth} growth</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Card Footer */}
                  <div className="px-5 py-3 border-t border-surface-light flex items-center justify-between bg-surface-light/30">
                    <Link
                      href={`/careers/${careerKey}`}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      View Details &rarr;
                    </Link>
                    <button
                      onClick={() => toggleCompare(careerKey)}
                      disabled={!isInCompare && compareList.length >= 3}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isInCompare
                          ? "bg-primary text-white"
                          : compareList.length >= 3
                          ? "bg-surface-light text-text-muted cursor-not-allowed"
                          : "bg-surface-light hover:bg-primary/20 text-text-secondary hover:text-primary"
                      }`}
                      title={compareList.length >= 3 && !isInCompare ? "Max 3 careers" : ""}
                    >
                      {isInCompare ? "✓ Compare" : "+ Compare"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad - Between Career Cards and YouTube */}
      <InContentAd />

      {/* YouTube Channels Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#282828]/30 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#FF0000] text-sm font-medium mb-4 block">
              Learn from the Pros
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              YouTube Channels by Trade
            </h2>
            <p className="text-text-secondary">
              Watch experienced professionals share their knowledge and day-to-day work
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {channelCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedChannelCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedChannelCategory === cat.key
                    ? "bg-[#FF0000] text-white"
                    : "bg-surface hover:bg-surface-light text-text-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Channel Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {youtubeChannels[selectedChannelCategory].map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface rounded-xl p-5 border border-surface-light hover:border-[#FF0000]/50 transition-all group flex gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-surface-light">
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to YouTube icon if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="w-full h-full bg-[#FF0000]/20 flex items-center justify-center"><svg class="w-6 h-6 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></div>`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold group-hover:text-[#FF0000] transition-colors truncate">
                      {channel.name}
                    </h3>
                    <span className="text-text-muted text-xs flex-shrink-0">
                      {channel.subscribers}
                    </span>
                  </div>
                  <p className="text-text-muted text-xs mb-2">{channel.handle}</p>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ad - Before CTA */}
      <InContentAd />

      {/* CTA */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Career Fits You?</h2>
          <p className="text-text-secondary mb-6">
            Take our quick quiz to discover careers that match your interests and skills.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Take the Career Quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-8 px-4 border-t border-surface-light">
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
          &copy; 2025 Degree2Trade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
