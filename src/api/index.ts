import {IUserCredentials} from '../interfaces/types';

const API_URL = 'http://10.110.3.246:2210';

export default {
  initializeApp: async () => {   
    try {
      const response = await fetch(`${API_URL}/myapp`, {method: 'POST',});
      return await response.json();
    } catch (error) {
      console.log(error);
      throw (error)     
    }
  },

  requestLogin: async (loginData: IUserCredentials) => {
    try {
      const response = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
    return await response.json();
    } catch (error) {
      console.log(error);
      throw(error)      
    }
  },
  
};
