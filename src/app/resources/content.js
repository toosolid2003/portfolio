import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Thibaut",
  lastName: "Segura",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web3 Builder. Strategic Operator. No BS.",
  avatar: "/images/avatar.jpg",
  email: "contact@segura.design",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Web3 founder? Need product traction?</>,
  description: (
    <>     
      I turn early ideas into live apps.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/toosolid2003",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thibautsegura",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/thedesignmojo?s=11",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  // title: `${person.name}'s Portfolio`,
  title: 'Thibaut Segura, Web3 holistic builder',
  description: `Portfolio website showcasing my work and thoughts as a ${person.role}`,
  headline: <>Web3 Product Lead & Builder</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Rental Scoring dApp</strong></>,
    href: "/work/rental-scoring",
  },
  subline: (
    <>
      I help early teams move from vague ideas to usable products fast. UX, product thinking, and Solidity — all in one builder.
      <br />
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I am a seasoned designe lead, turned Web3 Product Lead and builder. I put 15 years of experience,
       having released more than 20 products, to help Web3 projects ship relevant, profitable and desirable
       products at speed.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Segura Design",
        timeframe: "2022 - Present",
        role: "Founder & Product Lead",
        achievements: [
          <>
            Helped Web3 projects narrow down their product-market fit, generating sustained user adoption and
            generating stable fees in turbulent markets.
          </>,
          <>
            Streamlined product development processes, providing purpose, clarity and additional velocity to Web3 project. 
            Result: reduced burn rate and increased capital efficiency (user acquisition, product discovery, etc)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Fjord / Accenture",
        timeframe: "2013 - 2021",
        role: "Design Lead",
        achievements: [
          <>
            Delivered high-impact design projects for major Fortune 500 companies, tackling customer
            issues such as acquisition, retention or LTV, through a design lens.
          </>,
          <>
            Grew a multi-disciplianry set of design skills (business, service and product design) to approach
            increasignly challenging situations, from creating a start-up from scratch to spinning joint venutres
            with multiple high-value players.
          </>,
          <>
            Led product teams of up to 40 professionals, from concept creation to v1, acting as product lead, preserving the product initial
            intents throughout the development process. 
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Training",
    institutions: [
      {
        name: "Ensci-Les Ateliers",
        description: <>Masters in Design</>,
      },
      {
        name: "ESCP Europe",
        description: <>Grande Ecole, Master Strategy</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Quick prototyping using the latest Figma features, including
        AI generation.</>,
        // optional: leave the array empty if you don't want to display images
        images:[],
      },
      {
        title: "Solidity",
        description: <>Smart contract development, with a focus on security and clever used
        of the most recent tooling (Hardhat, Foundry)</>,
        // optional: leave the array empty if you don't want to display images
        images:[],
      },
      {
        title: "React",
        description: <>Front-end development using the latest combos in Web3 (React, Wagmi, etc)</>,
        // optional: leave the array empty if you don't want to display images
        images:[],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design, tech and Web3...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Build projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
