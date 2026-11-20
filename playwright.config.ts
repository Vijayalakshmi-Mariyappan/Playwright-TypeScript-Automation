
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Execute test files in parallel
  fullyParallel: true,

  // CI settings
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Terminal + HTML execution reports
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // Common browser settings
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,

    // Slow down execution for visibility
    launchOptions: {
      slowMo: 1000,
    },

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Capture trace on retry
    trace: 'on-first-retry',
  },

  // Browser configuration
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],

});
