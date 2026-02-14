import React from "react";

interface SectionType {
  title: string;
  subTitle: string;
  description: string;
}

const TitleSection = ({ title, subTitle, description }: SectionType) => {
  return (
    <div className="mb-10">
      <div className="section-title mb-3">{subTitle}</div>
      <h2 className="text-4xl md:text-5xl font-display text-ink">{title}</h2>
      <p className="mt-3 text-text-secondary max-w-xl">{description}</p>
    </div>
  );
};

export default TitleSection;
