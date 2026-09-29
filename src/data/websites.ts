const thisPage = {
  id: "thisPage",
  logo: "/assets/icons/male_mage.png",
  title: "My Portfolio",
  description: "Literally this page",
  whatIs: [
    "This is my portfolio page where I showcase my projects and websites.",
  ],
  why: ["My last portfolio was outdated and heavy."],
  challenges: ["next/image works a bit differently than img"],
  stack: {
    frontend: "Next.js | TypeScript | CSS",
    backend: "",
    database: "",
    devops: "",
    other: "Motion Framer",
  },
  links: {
    github: "https://github.com/reijjo/reijjo.github.io",
    live: "",
  },
  images: {
    desktop: [
      "/assets/images/projects/websites/thislanding.png",
      "/assets/images/projects/websites/thisabout.png",
    ],
    mobile: [],
  },
};

const luisaLore = {
  id: "luisaLore",
  logo: "/assets/icons/luisaicon.png",
  title: "Luisa Lore",
  description: "Artist portfolio",
  whatIs: ["Artist portfolio page for Luisa Lore."],
  why: ["She asked, I delivered."],
  challenges: [
    "For an artist everything should look extra polished",
    "I'm still figuring out how to make page more 'alive'",
  ],
  stack: {
    frontend: "Next.js | TypeScript | CSS",
    backend: "",
    database: "",
    devops: "",
    other: "",
  },
  links: {
    github: "https://www.luisalore.fi/",
    live: "",
    extraText: "luisalore.fi",
  },
  images: {
    desktop: ["/assets/images/projects/websites/luisa.webp"],
    mobile: ["/assets/images/projects/websites/luisa.webp"],
  },
};

const teaTingria = {
  id: "teaTingria",
  logo: "/assets/icons/teaLogo.png",
  title: "Tea Tingria",
  description: "Circus performancer",
  whatIs: ["Portfolio page for circus performancer and teacher."],
  why: [
    "She struggled to do pages on her own with WordPress, so I offered to do the pages if we are not using WordPress",
  ],
  challenges: [
    "Adding the nameservers on the domain/hosting service, specially finding the right place for Resend nameservers",
  ],
  stack: {
    frontend: "SvelteKit | TypeScript | CSS",
    backend: "",
    database: "",
    devops: "Cloudflare | Hostingpalvelu.fi",
    other: "Resend",
  },
  links: {
    github: "https://teatingria.com/",
    live: "",
    extraText: "teatingria.com",
  },
  images: {
    desktop: ["/assets/images/projects/websites/teaWebsite.webp"],
    mobile: ["/assets/images/projects/websites/teaWebsite.webp"],
  },
};

export const websiteInfo = [luisaLore, teaTingria, thisPage];
