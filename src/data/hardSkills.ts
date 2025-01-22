interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Python",
    description: "I use Python mostly for data science, with Jupyter and libraries such as Numpy, Tensorflow, Pytorch and SciPy",
    icon: "python"
  },
  {
    name: "NextJs",
    description: "The most popular React framework for building modern web apps. I commonly use this with Redux and CSS Modules.",
    icon: "nextjs_icon_dark"
  },
  {
    name: "Typescript / Javascript",
    description: "I've been using ES6 Javascript back since 2016. And then Typescript soon after.",
    icon: "typescript"
  },
  {
    name: "ReactJS / React Native",
    description: "",
    icon: "react"
  },
  {
    name: "Svelte / Sveltekit",
    description: "",
    icon: "svelte"
  },

];

export default hardSkills;