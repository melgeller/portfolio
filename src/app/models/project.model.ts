export interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  slug: string;

  context?: string;
  built?: string;
  keys?: string[];
  implementation?: string[];
  result?: string;
  role?: string;
  tech?: string[];
  platform?: string[];
  links?: string[];

  picUrl?: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
}