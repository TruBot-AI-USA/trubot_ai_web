"use client";

import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import JobRow from "./JobRow";

export interface Job {
  id: string;
  title: string;
  department: string;
  level: string;
  href: string;
  featured?: boolean;
}

const JobList = ({ jobList }: { jobList: Job[] }) => {
  const [search, setSearch] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [level, setLevel] = useState("All");

  const unique = (key: keyof Job) => [
    "All",
    ...Array.from(new Set(jobList.map((j) => String(j[key] ?? "")))),
  ];

  const departments = unique("department");
  const levels = unique("level");

  const filteredJobs = jobList.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDept =
      activeDepartment === "All" || job.department === activeDepartment;
    const matchesLevel = level === "All" || job.level === level;
    return matchesSearch && matchesDept && matchesLevel;
  });

  return (
    <PageLayout id="job-listing">
      <div className="space-y-8 font-body">
        {/* Filter Section */}
        <div className="space-y-4 md:space-y-0 md:flex md:items-end md:gap-6 justify-center">
          {/* Search Input */}
          <div className="w-full md:w-1/3">
            <label
              htmlFor="job-search"
              className="block text-sm font-medium text-navy mb-1"
            >
              Search by Title
            </label>
            <input
              id="job-search"
              type="text"
              placeholder="e.g. Product Manager"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Level Dropdown */}
          <div className="w-full md:w-1/4">
            <label
              htmlFor="job-level"
              className="block text-sm font-medium text-navy mb-1"
            >
              Filter by Job Level
            </label>
            <select
              id="job-level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              {levels.map((lvl, index) => (
                <option key={index}>{lvl}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Department Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar px-2 lg:justify-center">
          {departments.map((dep, index) => (
            <button
              key={index}
              onClick={() => setActiveDepartment(dep)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-200 whitespace-nowrap
              ${
                activeDepartment === dep
                  ? "bg-electric text-white border-electric shadow-sm"
                  : "bg-white text-navy/80 border-gray-300 hover:bg-light"
              }`}
            >
              {dep}
            </button>
          ))}
        </div>

        {/* Job Table */}
        <div className="border rounded-md overflow-hidden text-center">
          <div className="bg-light px-4 py-2 font-medium grid grid-cols-2 sm:grid-cols-4 text-sm sm:text-base text-navy">
            <span>Title</span>
            <span className="hidden sm:block">Department</span>
            <span className="hidden sm:block">Level</span>
            <span>Apply</span>
          </div>

          {filteredJobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}

          {filteredJobs.length === 0 && (
            <p className="p-4 text-navy/50">No jobs found for your filters.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default JobList;
