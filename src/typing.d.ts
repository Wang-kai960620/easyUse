declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
  }
}
