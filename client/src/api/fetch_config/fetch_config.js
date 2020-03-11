export const fetch_config = (method, body) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  return config;
};
