import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Milestones", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for AI, CP & development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently deep diving into Cloud",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "MedCare Insights",
    des: "Medcare Insights is a healthcare analytics project that leverages patient data to uncover meaningful trends and support smarter clinical decisions.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/py.png", "/gc.png","/sql.svg"],
    // link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/Dashcloud-ML/MedCare_Insight_Cloud_Hosted",
  },
  {
    id: 2,
    title: "Dristikon AI",
    des: "Drstikon AI is a real-time surveillance analytics project leveraging computer vision and AI to detect and report unusual activities for enhanced public safety.",
    img: "/p2.svg",
    iconLists: ["/re.svg","/tail.svg", "/gc.png", "/py.png"],
    // link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/Dashcloud-ML/dristikon-ai",
  },
  {
    id: 3,
    title: "F1 Big Data Analytics",
    des: "F1 Big Data Analytics is a data-driven project that analyzes race telemetry and performance metrics to uncover insights and optimize racing strategies.",
    img: "/p2.svg",
    iconLists: ["/py.png", "/sql.svg", "/gc.png"],
    // link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/Dashcloud-ML/F1-Big-data-analysis/tree/master",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://app-iphone.netlify.app",
  //   sourceCode: "https://github.com/sanidhyy/apple-clone",
  // },
] as const;

export const testimonials = [

  {
    quote: `Secured first place at the GDSC Nirmaan Ideathon 2022 hosted by MIT Academy of Engineering, Pune, competing against 50+ teams. As team lead, I proposed and prototyped an innovative assistive technology designed to enhance communication for semi-deaf individuals. The solution combined real-time sound recognition with haptic and visual feedback mechanisms, ensuring accessibility through scalable and cost-effective hardware. The project was recognized for its societal impact, practical feasibility, and engineering excellence by a panel of academic and industry experts.`,
    name: "GDSC",
    title: "GDSC Nirmaan Ideathon 2022",
    image: "/gdsc.png",
  },

 {
    quote: `As a core volunteer for AWS User Group Nashik since 2022, I played a key role in organizing large-scale tech events like AWS Community Day and re:Invent Recap, engaging 500+ participants annually. My responsibilities included speaker coordination, session logistics, and technical content curation. I also led knowledge-sharing sessions on emerging topics such as Generative AI and data engineering, fostering a collaborative learning environment. This experience sharpened my leadership, event management, and community engagement skills while deepening my expertise in AWS and cloud technologies.`,
    name: "AWS User Group Nashik",
    title: "Community Volunteer – AWS UG Nashik",
    image: "/awsug.png",
  },

 {
  quote: `Completed the AWS Cloud Quest: Cloud Practitioner certification, gaining a strong foundation in core AWS services and cloud computing concepts through interactive, gamified labs. Developed hands-on skills in deploying and managing cloud infrastructure using services like EC2, S3, Lambda, and IAM. This certification strengthened my ability to architect scalable, secure, and cost-effective solutions on the AWS platform, laying the groundwork for advanced cloud development and DevOps practices.`,
  name: "Amazon Web Services",
  title: "AWS Cloud Quest: Cloud Practitioner",
  image: "/cert1.png",
  },

  {
    quote: `Earned the GitHub Foundations certification by mastering version control, branching strategies, and collaborative workflows using Git and GitHub. Learned to manage repositories, resolve merge conflicts, and streamline development processes through GitHub Actions and pull requests. This certification solidified my understanding of modern DevOps workflows and improved my ability to contribute effectively in team-based software projects.`,
    name: "GitHub",
    title: "GitHub Foundations Certification",
    image: "/github.jpg"
  }

  
  
]as const;

export const workExperience = [
  {
    id: 1,
  title: "Associate Consultant Intern – Utrecht IT Consulting",
  desc: "Engineered event-driven applications using Solace PubSub+, reducing message latency by 40%. Designed and deployed scalable AWS cloud infrastructure, boosting system scalability by 30% and reducing downtime by 25%. Automated CI/CD pipelines, cutting deployment time by 50%.",
  className: "md:col-span-2",
  thumbnail: "/exp2.svg",
  },
  {
   id: 2,
  title: "Frontend Developer Intern – OPM Corporation",
  desc: "Collaborated with a team to build a responsive React.js website, improving load times by 20%. Led cross-browser testing, ensuring 99% compatibility across major browsers and devices, while enhancing UI interactivity and accessibility.",
  className: "md:col-span-2",
  thumbnail: "/exp1.svg",
  },

] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Dashcloud-ML",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/darshan-wagh-1a1411203/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "MongoDB"],
  stack2: ["Vue.js", "Typescript", "Python"],
} as const;
