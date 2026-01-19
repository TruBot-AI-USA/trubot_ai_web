import Button from "@/app/ui/components/shared/Button";

interface Job {
  title: string;
  featured?: boolean;
  department: string;
  level: string;
  href: string;
}

interface JobRowProps {
  job: Job;
}

const JobRow: React.FC<JobRowProps> = ({ job }) => {
  return (
    <div className="px-4 py-3 border-t grid grid-cols-2 sm:grid-cols-4 items-center hover:bg-light/50 text-sm sm:text-base font-body transition-colors duration-200">
      {/* Title + Featured + Mobile Badges */}
      <div className="col-span-1">
        <div className="flex items-center gap-2 font-semibold text-navy text-left">
          {job.title}
          {job.featured && (
            <span className="text-xs bg-coral text-black px-2 py-0.5 rounded font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* Mobile-only badges */}
        <div className="sm:hidden mt-1 flex flex-wrap gap-2 text-xs text-navy/70 text-center">
          <span className="bg-light px-2 py-0.5 rounded-full border border-navy/10">
            {job.department}
          </span>
          <span className="bg-light px-2 py-0.5 rounded-full border border-navy/10">
            {job.level}
          </span>
        </div>
      </div>

      {/* Department (desktop only) */}
      <div className="hidden sm:block text-navy/70 text-center">
        {job.department}
      </div>

      {/* Level (desktop only) */}
      <div className="hidden sm:block text-navy/70 text-center">
        {job.level}
      </div>

      {/* View Link */}
      <Button href={job.href} label="View" variant="link" />
    </div>
  );
};

export default JobRow;
