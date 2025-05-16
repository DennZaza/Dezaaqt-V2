export interface NavItem {
    label: string;
    href: string;
}

export interface Skill {
    name: string;
    proficiency: number; 
    icon?: string;
    category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export type Theme = 'light' | 'dark';