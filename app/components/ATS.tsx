import { cn } from "../lib/utils";

interface ATSProps {
  score: number;
  suggestions: {
    type: "good" | "improve";
    tip: string;
  }[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine background gradient based on score
  const gradientClass = score > 69
    ? "from-green-100"
    : score > 49
      ? "from-yellow-100"
      : "from-red-100";

  // Determine icon based on score
  const iconSrc = score > 69
    ? "/icons/ats-good.svg"
    : score > 49
      ? "/icons/ats-warning.svg"
      : "/icons/ats-bad.svg";

  return (
    <div className={cn(
      "rounded-lg p-6 bg-gradient-to-br to-white",
      gradientClass
    )}>
      {/* Top section with icon and headline */}
      <div className="flex items-center gap-4 mb-4">
        <img src={iconSrc} alt="ATS Score Icon" className="w-10 h-10" />
        <h2 className="text-xl font-semibold">ATS Score – {score}/100</h2>
      </div>

      {/* Description section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Applicant Tracking System Analysis</h3>
        <p className="text-gray-600 mb-4">
          This score reflects how well your resume is optimized for Applicant Tracking Systems.
          Higher scores indicate better chances of passing through automated resume screening.
        </p>

        {/* Suggestions list */}
        <ul className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-2">
              <img 
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"} 
                alt={suggestion.type === "good" ? "Check" : "Warning"} 
                className="w-5 h-5 mt-0.5" 
              />
              <span>{suggestion.tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing line */}
      <p className="text-sm text-gray-700 italic">
        Continue improving your resume to increase your chances of landing interviews.
      </p>
    </div>
  );
};

export default ATS;
