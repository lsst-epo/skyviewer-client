import * as nextEnv from "@next/env";

const projectDir = process.cwd();

const { loadEnvConfig } = nextEnv.default ? nextEnv.default : nextEnv;
loadEnvConfig(projectDir);
