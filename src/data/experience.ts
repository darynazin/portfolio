import type { ExperienceItem } from "../types/experience";

export const experienceData: ExperienceItem[] = [
  {
      index: 2,
      title: {
        company: 'Lichtline GmbH',
        position: 'Web Developer',
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
        company: 'Freelance',
        position: 'Web Developer',
        duration: '12/2024 – 11/2025'
      },
        content: 
          `Provided backend and frontend development services for various web projects, focusing on React, Node.js, MongoDB, and API integration. 
          Delivered custom solutions, bug fixes, and consultation for web projects. 
          Managed client requirements, deadlines, and provided ongoing technical support.`
    },
    {
      index: 0,
      title: {
        company: 'Savoi GmbH',
        position: 'SEO Specialist',
        duration: '06/2021 - 08/2022'
      },
        content: 
          `Website auditing and creating an improvement plans, writing specifications 
          for copywriting. Developed analytical skills and proficiency with web tools.`
    }
  ];