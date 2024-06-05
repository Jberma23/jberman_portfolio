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
                  "<ul><li>Defined and executed the technology roadmap, specifications, and milestones to build and launch MCPro, a subscription SaaS platform that provides data, charts, and insights on industry trends to 10,000+ active users.</li><li>Built and implemented a Next.js frontend and a PHP API to display 40K+ articles from a custom WordPress CMS.</li><li>Slashed page load times by 50% by spearheading code optimizations and test-driven development.</li><li>Increased MOM revenue by 40% by enabling self-service subscriptions and memberships using Stripe SDK.</li><li>Strengthened information security, protected data privacy, mitigated risk, and maintained compliance by developing and deploying an authentication and authorization system using OAuth, JWT, JWKS, and Next Auth.</li><li>Streamlined frontend and backend deployments by developing and implementing a robust CI/CD pipeline.</li></ul>",
                companyWebSite: "https://pro.morningconsult.com",
                companyMeta: "",
                datesBetween: "April 2022 - January 2024",
                descriptionTags: [],
              },
              {
                title: "Software Engineer II",
                company: "Enovational",
                description:
                  "<ul><li>Designed, developed, and deployed core features for Formability, a no-code form building and processing platform with 1M+ users managing 500+ forms across dozens of state agencies.</li><li>Architected and delivered a drag-and-drop canvas to seamlessly build custom forms and workflows.</li><li>Created and implemented record management, automated workflows, a custom document builder, electronic signature, built-in analytics/reporting, and custom notifications to improve usability and expand functionality.</li><li>Improved stability by extending code coverage, fixing bugs, and building file snapshots to streamline debugging.</li><li>Cultivated a collaborative, high-performance culture by establishing and strengthening the relationship between engineering, product, and design teams to deliver high-impact features and increase dev velocity.</li></ul>",
                companyWebSite: "https://formability.com",
                companyMeta: "",
                datesBetween: "April 2021 - March 2022",
              },
              {
                title: "Web Applications Developer",
                company: "IMG-CROWN",
                description:
                  "<ul><li>Built and implemented an interactive dashboard for Department of Energy employees to seamlessly load, process, sanitize, deploy, and analyze country-level energy data and utilization using Angular.</li><li>Improved data quality by writing SQL functions to sanitize a database with 12M+ records on a monthly basis.</li><li>Optimized analytics workflows by implementing automation to automatically update database units for cross-country calculations and comparisons, as well as record updates based on published data corrections.</li><li>Served as the technical SME providing progress updates to stakeholders within the Department of Energy to ensure alignment on deliverable timeframes, scope fulfillment, and acceptance of all customer deliverables.</li></ul>",
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
