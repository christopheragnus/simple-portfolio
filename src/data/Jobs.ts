/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Research Collaborator",
        startDate: "2024-05-1",
        endDate: "2024-11-1",
        company: "Rockefeller Uni (LaCava Lab)",
        location: "Amsterdam, Netherlands",
        description: "",
        goals: [
            "Developed Python pipelines on HPC GPU clusters to queue protein prediction jobs using AlphaFold and CombFold.",
            "Conducted combinatorial assembly using NumPy and Pandas to divide protein complexes into dimer chains for FASTA input.",
            "Created PAE, sequence coverage, and pLDDT position visualizations in Jupyter to compare predicted and experimental protein structures.",
        ],
        currentJob: false,
    },
    {
        title: "Research Assistant",
        startDate: "2023-11-1",
        endDate: "2024-01-1",
        company: "WEHI",
        location: "Melbourne, Australia",
        description: "",
        goals: [
            "Cleaned multiple unstructured datasets and transformed large CSV datasets containing clonal cell count data..",
            "Applied machine learning techniques like PCA and MDS to do feature extraction and generate visual plots and find insights.",
            "Automated bar plot visualizations using Seaborn and filtered data for export to R Studio.",
        ],
        currentJob: false,
    },
    {
        title: "React Engineer",
        startDate: "2023-06-1",
        endDate: "2023-09-1",
        company: "Sportsbet",
        location: "Melbourne, Australia",
        description: "",
        goals: [
            "Developed shared UI components for web and mobile using React Native, TypeScript, and Redux.",
            "Re-engineered a user registration flow, optimizing development time by 30%.",
            "Ran daily sprints and organised retros and story points",
            "Created and validated KYC Confirmation components for user verification, ensuring proper data format before submission.",
        ],
        currentJob: false,
    },
    {
        title: "Senior Frontend Developer",
        startDate: "2021-06-1",
        endDate: "2022-08-1",
        company: "AIA Insurance",
        location: "Melbourne, Australia",
        description: "",
        goals: [
            "Migrated legacy applications to modern React frameworks while integrating with Adobe Experience Manager.",
            "Built reusable React components using Figma-based UI designs and implemented Redux for state management.",
            "Reviewed and refactored peer code to improve application performance.",
        ],
        currentJob: false,
    },
    {
        title: "Senior Software Engineer",
        startDate: "2020-06-1",
        endDate: "2021-06-1",
        company: "Optus",
        location: "Melbourne, Australia",
        description: "",
        goals: [
            "Updated RactiveJS Checkout with ReactJS and re-implemented checkout APIs.",
            "Built a custom payment API integration with Bambora and created a reusable Select component",
            "Created and maintained Cypress and Jest tests for unit testing and code coverage.",
        ],
        currentJob: false,
    },
    {
        title: "Full Stack Developer",
        startDate: "2020-02-1",
        endDate: "2020-06-1",
        company: "OSDORO",
        location: "Sydney, Australia",
        description: "",
        goals: [
            "Created features for a Ruby on Rails app for a coworking startup.",
            "Integrated Google Maps API and geolocation features to allow customers find coworking spaces nearby.",
            "Implemented login systems and search, and ensured UI was coherent across the platform.",
        ],
        currentJob: false,
    },
    {
        title: "Frontend Engineer",
        startDate: "2019-02-1",
        endDate: "2019-06-1",
        company: "Ventia",
        location: "Sydney, Australia",
        description: "",
        goals: [
            "Built visualisations and single-page application to consume API data relating to water sensors",
        ],
        currentJob: false,
    },
    
];
export default workExperience;