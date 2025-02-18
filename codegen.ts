import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  generates: {
    "./gql/": {
      documents: [
        "app/[locale]/tours/[tour]/tour/**/*.{ts,tsx}",
        "app/[locale]/embed/**/*.{ts,tsx}",
        "services/api/**/*.{ts,tsx}",
        "components/organisms/**/*.{ts,tsx}",
      ],
      preset: "client",
    },
  },
  config: {
    useTypeImports: true,
    avoidOptionals: true,
  },
  schema: process.env.NEXT_PUBLIC_API_URL,

  ignoreNoDocuments: true, // for better experience with the watcher
};

export default config;
