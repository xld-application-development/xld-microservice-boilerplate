export const success = (data: any, message = 'no custom message provided') => {
  const response = {
    success: true,
    message: message,
    data: data,
    copyright: 'Copyright 2022, XLD Finance',
  };
  return response;
};

export const fail = (data = null, message = null) => {
  const response = {
    success: false,
    message: message,
    data: data,
    copyright: 'Copyright 2022, XLD Finance',
  };
  return response;
};
