export const rootPath = () => "/";
export const selfIntroPath = () => "/selfintro";
export const productsPath = () => "/products";
export const accessPath = () => "/access";
export const blogsPath = () => "/blogs";
export const blogPath = ({ id }: { id?: number }) =>
  `${blogsPath()}/${id || ":id"}`;
