// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  return (
    process.env.REACT_APP_DATOCMS_ROR_TOKEN ||
    process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ||
    process.env.REACT_APP_DATOCMS_NODE_TOKEN ||
    ''
  );
};
