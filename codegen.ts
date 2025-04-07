import "./env.config.js";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./env";

const config: CodegenConfig = {
  generates: {
    "./gql/": {
      documents: [
        "app/**/*.{ts,tsx}",
        "services/api/**/*.{ts,tsx,graphql}",
        "components/**/*.{ts,tsx}",
      ],
      preset: "client",
    },
  },
  config: {
    useTypeImports: true,
    avoidOptionals: true,
  },
  schema: env.NEXT_PUBLIC_API_URL,

  ignoreNoDocuments: true, // for better experience with the watcher
};

export default config;
