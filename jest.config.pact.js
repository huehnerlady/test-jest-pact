module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['**/+(*.)+(spec).(pact).(ts)'],
  setupFilesAfterEnv: ['./src/setup.jest.ts'],
  testEnvironmentOptions: {
    url: 'http://127.0.0.1:8181',
  },
};
