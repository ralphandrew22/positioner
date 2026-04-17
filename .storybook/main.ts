import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    console.log('Vite config before modification:', config.plugins);
    config.plugins = (config.plugins || []).filter(
      (plugin: any) => !(Array.isArray(plugin) && plugin.some(p => p?.name?.toLowerCase().includes('react-router')))
    )
    console.log('Vite config after modification:', config.plugins);
    return config;
  }
};
export default config;