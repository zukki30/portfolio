const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    const nextConfig = require("../next.config.js");

    config.resolve.alias = {
      "@": path.resolve(__dirname, "../src"),
    };

    const svgRule = config.module.rules.find((rule) => rule.test.test(".svg"));

    svgRule.test = /\.(png|jpe?g|gif|webp)$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src/styles"),
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    // merge whatever from nextConfig into the webpack config storybook will use
    return config;
  },
};
