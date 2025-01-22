interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Master of Quantitative Biology",
        startDate: "2022-06-01",
        endDate: "",
        school: "University of Queensland",
        location: "Melbourne, Australia",
        description: "",
        currentUni: true,
    },
    {
        title: "University Exchange",
        startDate: "2024-02-01",
        endDate: "2024-08-01",
        school: "Vrije Universiteit (VU) Amsterdam",
        location: "Amsterdam, Netherlands",
        description: "",
        currentUni: false,
    },
    {
        title: "Diploma of IT",
        startDate: "2018-01-01",
        endDate: "2018-11-1",
        school: "Coder Academy",
        location: "Sydney, Australia",
        description: "",
        currentUni: false,
    },
    {
        title: "Bachelor of Commerce",
        startDate: "2013-02-01",
        endDate: "2016-11-1",
        school: "Macquarie University",
        location: "Sydney, Australia",
        description: "",
        currentUni: false,
    },
];

export default education;