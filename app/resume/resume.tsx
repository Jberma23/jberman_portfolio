import type { Blog } from "@/.contentlayer/generated";
import CV from "react-cv";

type Props = {};

export const Resume: React.FC<Props> = () => {
  return (
    <div className="pt-[100px]">
      <CV
        personalData={{
          name: "Jesse Berman",
          title: "Full-Stack Software Developer",
          image: "/me.jpeg",
          contacts: [
            { type: "email", value: "jesse.ben.berman@gmail.com" },
            { type: "phone", value: "+1 (240) 370 3371" },
            { type: "location", value: "Denver" },
            { type: "website", value: "https://www.jesseberman.me/" },
            { type: "linkedin", value: "linkedin.com/in/jberma23" },
            { type: "twitter", value: "twitter.com/Jberma2023" },
            { type: "github", value: "github.com/Jberma23" },
          ],
        }}
        sections={[
          {
            type: "experiences-list",
            title: "Professional Experience",
            description: "",
            icon: "usertie",
            items: [
              {
                title: "Software Engineer II",
                company: "Morning Consult",
                description:
                  "<ul><li>Conceptualized MCPro, web-based application bolstering original long-form analysis of proprietary public opinion survey data; fueled proprietary data analytics to garner strategic platform modifications</li><ul><li>Heavily leveraged Static Generation for maximum SEO benefits and speed — decreasing initial page load-time by an estimated 50% across Vercel’s edge network</li><li>Initiated monetization of application via self-serve Stripe subscriptions; accelerated conversion of customers from freemium to revenue-generating via utilization of Piano, Amplitude, and Iterable; Leading to an estimated 40% MoM increase in revenue</li><li>Built PHP API to serve up data pulled from customized Wordpress CMS</li><li>Developed NextJS frontend, React component library, and custom UI-library</li><li>Implemented robust authentication and authorization protocols including JWT, JWKS,  and MFA; enhanced security measures to user's PPI</li></ul><li>Implemented continuous integration systems used across engineering team to efficiently deploy both frontend and backend changes (Chromatic, Storybook, and canary deployments)</li><li>Achieved enhancements to stability, response rates, page load times, and application uptime with Datadog and Vercel</li></ul>",
                companyWebSite: "https://pro.morningconsult.com",
                companyMeta: "",
                datesBetween: "April 2022 - January 2024",
                descriptionTags: [],
              },
              {
                title: "Software Engineer II",
                company: "Enovational",
                description:
                  "<ul><li>Deployed dozens of features, and hundreds of bug fixes for Formability platform, a no-code application supporting dozens of state agencies, more than 500 government forms, and over 1,000,000  user accounts</li><li>Pioneered cross-functional collaboration initiatives between product and design teams; initiated strategic approaches to planning, designing, and developing critical components such as a drag and drop canvas for building customized forms and workflows</li></ul>",
                companyWebSite: "https://formability.com",
                companyMeta: "",
                datesBetween: "April 2021 - March 2022",
              },
              {
                title: "Web Applications Developer",
                company: "IMG-CROWN",
                description:
                  "<ul><li>Optimized, modified, and enhanced application enabling loading, processing, and publishing of large .gov data sets; designed formatting for country-level energy data with global utilization</li><li>Served as stakeholder representative in weekly correspondence with The Department of Energy; managed deliverable timeframe and fulfillment of customer scope implementation</li></ul>",
                companyWebSite: "https://www.eia.gov/",
                companyMeta: "",
                datesBetween: "January 2020 - April 2021",
              },
            ],
          },
          {
            type: "common-list",
            title: "Education",
            icon: "graduation",
            items: [
              {
                title: "Full Stack Web Development Bootcamp",
                authority: "Flatiron School",
                rightSide: "October 2019",
              },
              {
                title: "Bachelor of Arts, Economics",
                authority: "University of Maryland, College Park, MD",
                rightSide: "May 2019",
              },
            ],
          },
          //   {
          //     type: "projects-list",
          //     title: "Projects",
          //     description: "Optional",
          //     icon: "tasks",
          //     groups: [
          //       {
          //         sectionHeader: "Company Name",
          //         description: "Optional",
          //         items: [
          //           {
          //             title: "Project",
          //             projectUrl: "optional",
          //             description: "Optional",
          //           },
          //           {
          //             title: "Project",
          //             projectUrl: "optional",
          //             description: "Optional",
          //           },
          //           {
          //             title: "Project",
          //             projectUrl: "optional",
          //             description: "Optional",
          //           },
          //         ],
          //       },
          //     ],
          //   },
          //   {
          //     type: "common-list",
          //     title: "Conferences & Certificates",
          //     description: "",
          //     icon: "comments",
          //     items: [
          //       {
          //         title: "Some Conferences / 2019",
          //         authority: "SomeConf",
          //         authorityWebSite: "https://www.someconf.somesome",
          //       },
          //       {
          //         title: "Some Conferences / 2019",
          //         authority: "SomeConf",
          //         authorityMeta: "Speaker",
          //         authorityWebSite: "https://www.someconf.somesome",
          //         rightSide: "test",
          //       },
          //       {
          //         title: "Some Conferences / 2012",
          //         authorityMeta: "Speaker",
          //       },
          //     ],
          //   },
          {
            type: "common-list",
            title: "Languages",
            icon: "language",
            items: [
              {
                authority: "English",
                authorityMeta: "Professional",
              },
              {
                authority: "Spanish",
                authorityMeta: "Conversational",
              },
              {
                authority: "Hebrew",
                authorityMeta: "Beginner",
              },
              {
                authority: "American Sign Langague",
                authorityMeta: "Beginner",
              },
            ],
          },
          {
            type: "tag-list",
            title: "Skills Proficiency",
            icon: "rocket",
            items: [
              "Ruby on Rails",
              "PHP",
              "JavaScript",
              "React",
              "Next.js",
              "Vue.js",
              "Angular.js",
              "Node.js",
              "TypeScript",
              "Amazon Web Services (AWS)",
              "Docker",
              "Vercel",
              "WordPress",
              "SQL",
              "MongoDB",
              "Piano",
              "Iterable",
              "Stripe",
              "GitLab",
              "Kubernetes",
              "Figma",
              "Datadog",
              "Agile Software Development",
              "Application architecture",
              "DevOps",
              "GraphQL",
              "UX/UI",
              "Postgres",
              "HTML",
              "CSS",
              "Database Management",
            ],
          },
          //   {
          //     type: "tag-list",
          //     title: "Hobbies & Interests",
          //     icon: "cubes",
          //     items: ["Photography", "Poetry"],
          //   },
        ]}
        branding={false} // or false to hide it.
      />
    </div>
  );
};
