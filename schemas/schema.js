// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "projects",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Work",
      name: "work",
      type: "object",
      fields: [
        {
          title: "Position",
          name: "position",
          type: "text",
        },
        {
          title: "Company",
          name: "company",
          type: "text",
        },
        {
          title: "Time",
          name: "time",
          type: "text",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
      ],
    },
    {
      title: "Contact",
      name: "contact",
      type: "object",
      fields: [
        {
          title: "Mail",
          name: "mail",
          type: "text",
        },
        {
          title: "Phone",
          name: "phone",
          type: "text",
        },
        {
          title: "Address",
          name: "address",
          type: "text",
        },
        {
          title: "Website",
          name: "website",
          type: "text",
        },
        {
          title: "Linkedin",
          name: "linkedin",
          type: "text",
        },
        {
          title: "Github",
          name: "github",
          type: "text",
        },
      ],
    },
    {
      name: "Projects",
      title: "Projects",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "text",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Thumbnail",
          name: "thumbnail",
          type: "text",
        },
        {
          title: "Github",
          name: "github",
          type: "text",
        },
        {
          title: "Live",
          name: "live",
          type: "text",
        },
      ],
    },
    {
      name: "resume",
      title: "Resume",
      type: "document",
      fields: [
        {
          title: "Designation",
          name: "designation",
          type: "text",
        },
        {
          title: "Contact",
          name: "contact",
          type: "contact",
        },
        {
          title: "Summary",
          name: "summary",
          type: "text",
        },
        {
          title: "Skills",
          name: "skills",
          type: "array",
          of: [
            {
              title: "Skill",
              name: "skill",
              type: "text",
            },
          ],
        },
        {
          title: "Education",
          name: "education",
          type: "array",
          of: [
            {
              title: "School",
              name: "school",
              type: "text",
            },
          ],
        },
        {
          title: "Certifcation",
          name: "certifcation",
          type: "array",
          of: [
            {
              title: "Certificate",
              name: "certificate",
              type: "text",
            },
          ],
        },
        {
          title: "WorkHistory",
          name: "workHistory",
          type: "array",
          of: [
            {
              title: "Work",
              name: "work",
              type: "work",
            },
          ],
        },
      ],
    },
  ]),
});
