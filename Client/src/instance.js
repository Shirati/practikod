const instance = axios.create({
    baseURL:  'https://localhost:7186'
  });
  
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  