export const checkStatus = (response: any): any => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.status);
};
