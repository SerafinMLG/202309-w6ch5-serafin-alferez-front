export const makeImageURL = (publicID: string, height: number) => {
  const urlBase = 'http://res.cloudinary.com/drv1kbmgi/image/upload';
  const url = `${urlBase}/h_${height}/v1701283748/${publicID}`;
  return url;
};
