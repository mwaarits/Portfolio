export type ProjectType = 'cloud' | 'dev' | 'qa';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  type: ProjectType;
  categoryLabel?: string;
  url: string;
  image: string;
  problemStatement?: string;
  solutionContext?: string;
  resultsMetrics?: string[];
  lessonsLearned?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  merit?: boolean;
  link: string;
  type: 'defense' | 'offense' | 'foundation';
}

export interface TargetMetric {
  id: string;
  mark: string;
  label: string;
  value: string;
  tag: string;
  type: 'purple' | 'blue' | 'red' | 'vol';
}

export interface SkillCategoryGroup {
  title: string;
  tag: string;
  skills: string[];
}
