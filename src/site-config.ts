type SiteConfig = {
  name: string;
  headlineOne: string;
  headlineTwo?: string;
  timeline: {
    name: string;
    url: string;
    time: string;
    description?: string;
  }[];
  contact: {
    name: string;
    url: string;
  }[];
};

// type TwitterConfig = {
//   url: string;
//   handleName: string;
// };

// export const TWITTER_CONFIG: TwitterConfig = {
//   url: "",
//   handleName: "",
// };

export const SITE_CONFIG: SiteConfig = {
  name: "Nipun Agarwal",
  headlineOne: "Wanna be Software Engineer.",
  headlineTwo: "Want to be an entrepreneur.",
  timeline: [
    {
      name: "Freelancer",
      url: "https://www.nipunagarwal.com/",
      time: "2024",
      description: "Working with Tads Education, Unimad",
    },
    {
      name: "Sabudh Foundation",
      url: "https://sabudh.org/",
      time: "2024",
      description: "Final Semester Internship",
    },
    {
      name: "YHR Technologies",
      url: "https://play.google.com/store/apps/details?id=com.sdc.agrovet.store&pcampaignid=web_share",
      time: "2024",
      description: "Developed first mobile app ",
    },
    {
      name: "BML Munjal University",
      url: "https://www.bmu.edu.in/",
      time: "2020-2024",
      description: "Got a computer science degree",
    },
    {
      name: "ACIC-BMU Foundation",
      url: "https://acic-bmu.in/",
      time: "2022-2023",
      description: "Another offer to make a website.",
    },
    {
      name: "Global Enterprise",
      url: "https://abyudhi.vercel.app/",
      time: "2024",
      description: "My first summer internship",
    },
  ],
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nipun--agarwal/",
    },
    {
      name: "Mail",
      url: "mailto:nipunagarwal322@gmail.com",
    },
    {
      name: "GitHub",
      url: "https://github.com/nipunagarwal4235",
    },
  ],
};
