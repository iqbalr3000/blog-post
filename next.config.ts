import withTM from "next-transpile-modules";

// Include all `rc-*` modules and related Ant Design packages requiring transpilation
const transpileModules = [
  "rc-pagination",
  "rc-util",
  "rc-picker",
  "rc-input",
  "rc-tree",
  "rc-table",
  "@ant-design/icons",
  "@ant-design/icons-svg"
];

const nextConfig = {
  reactStrictMode: true
};

// Apply transpilation
export default withTM(transpileModules)(nextConfig);
