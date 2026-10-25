import type { ExperienceItem } from "../types/experience";

export const experienceData: ExperienceItem[] = [
  {
      index: 2,
      title: {
        company: 'Lichtline GmbH',
        position: 'Full-Stack Engineer',
        duration: '11/2025 – Present'
      },
        content: 
          `Took ownership of an existing HubSpot website and continued development as the sole developer. 
          Developed and maintained a custom HubSpot theme with responsive layouts and reusable components. 
          Maintained and improved a TypeScript-based product synchronization service and resolved data and asset-related issues. 
          Automated parts of the synchronization process and handled ongoing development, troubleshooting, and maintenance.`
    },
    {
      index: 1,
      title: {
        company: 'Pet Projects',
        position: 'Full-Stack Engineer',
        duration: '12/2024 – 11/2025'
      },
        content: 
          `Developed backend and frontend services for various web projects, focusing on React, Node.js, MongoDB, and API integration. 
          Delivered custom solutions and bug fixes.`
    },
    {
      index: 0,
      title: {
        company: 'Savoi GmbH',
        position: 'SEO Specialist',
        duration: '06/2021 - 08/2022'
      },
        content: 
          `Conducted website audits and created improvement plans, as well as writing specifications for copywriting. 
          Developed analytical skills and proficiency with web tools.`
    }
  ];