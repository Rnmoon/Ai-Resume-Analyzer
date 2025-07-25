import React from "react";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "../components/Accordion";

// Define the Feedback type (assuming it's not defined elsewhere)
type Tip = {
  type: "good" | "improve";
  tip: string;
  explanation: string;
};

type Category = {
  score: number;
  tips: Tip[];
};

type Feedback = {
  toneAndStyle: Category;
  content: Category;
  structure: Category;
  skills: Category;
};

// ScoreBadge component
interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let bgColor = "";
  let textColor = "";
  let icon = null;

  if (score > 69) {
    bgColor = "bg-green-100";
    textColor = "text-green-600";
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-green-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  } else if (score > 39) {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-600";
  } else {
    bgColor = "bg-red-100";
    textColor = "text-red-600";
  }

  return (
    <div
      className={cn(
        "flex items-center space-x-1 px-2 py-1 rounded-full",
        bgColor
      )}
    >
      {icon && icon}
      <span className={cn("text-sm font-medium", textColor)}>
        {score}/100
      </span>
    </div>
  );
};

// CategoryHeader component
interface CategoryHeaderProps {
  title: string;
  categoryScore: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  categoryScore,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

// CategoryContent component
interface CategoryContentProps {
  tips: Tip[];
}

const CategoryContent: React.FC<CategoryContentProps> = ({ tips }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-2">
            {tip.type === "good" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="text-sm text-gray-700">{tip.tip}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={cn(
              "p-3 rounded-lg text-sm",
              tip.type === "good"
                ? "bg-green-50 border border-green-100"
                : "bg-yellow-50 border border-yellow-100"
            )}
          >
            <p
              className={cn(
                "font-medium mb-1",
                tip.type === "good" ? "text-green-700" : "text-yellow-700"
              )}
            >
              {tip.tip}
            </p>
            <p className="text-gray-700">{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Details component
interface DetailsProps {
  feedback: Feedback;
}

const Details: React.FC<DetailsProps> = ({ feedback }) => {
  return (
    <div className="w-full">
      <Accordion className="space-y-4">
        <AccordionItem id="tone-and-style" className="rounded-lg border">
          <AccordionHeader itemId="tone-and-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-and-style">
            <CategoryContent tips={feedback.toneAndStyle.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="content" className="rounded-lg border">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="structure" className="rounded-lg border">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="skills" className="rounded-lg border">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills.score}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;