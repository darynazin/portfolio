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
          `Developed a custom HubSpot theme with responsive layouts
          and reusable components. Worked with APIs to retrieve data
          from the PIM system and synchronize it with HubDB. Maintained
          a TypeScript-based product synchronization service.
          Developed Power Automate workflow for process automation.`
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