export const Get = async (url) => {
  
  try {
    const response = await fetch(url);
    return await response.json();
  
  } catch (error) {
    Promise.reject(error);
  }
};


