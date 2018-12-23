export const rootPath = () => "/";
export const selfIntroPath = () => "/selfintro";
export const productsPath = () => "/products";
export const contactPath = () => "/contact";
export const blogsPath = () => "/blogs";
export const blogPath = ({ id }: { id?: string }) =>
  `${blogsPath()}/${id || ":id"}`;
