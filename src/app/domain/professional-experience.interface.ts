export interface ProfessionalExperience {
    title: string;
    period: string;
    description: string;
    roles: ProfessionalExperienceRole[];
}

export interface ProfessionalExperienceRole {
    title: string;
    responsibilities: string[];
}