export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  metric?: string;
  tags?: string[];
}

export interface VentureItem {
  id: string;
  category: 'AI Automation' | 'Enterprise Systems' | 'Warehouse Technology' | 'Healthcare Technology' | 'Financial Technology' | 'Digital Transformation';
  name: string;
  oneLiner: string;
  architectureHighlight: string;
  specs: string[];
  status: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  descriptor: string;
}
