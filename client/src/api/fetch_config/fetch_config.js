export const fetch_config = (method, body, auth) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  return config;
};
