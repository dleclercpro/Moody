import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"]
};

export default config;