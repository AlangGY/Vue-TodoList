const storage = localStorage;

export const storageKeys = {
  todos : 'todos'
};


export const getItem = (key, defaultValue) => {
  try{
    const data = storage.getItem(key);
  
    if (data) {
      return JSON.parse(data);
    }
    return defaultValue;
  }
  catch(e){
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};