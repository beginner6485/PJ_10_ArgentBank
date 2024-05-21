
export async function fetchUserData(email, password){
      try {

        const response = await fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {   // Lancer une erreur avec le code de statut
          throw new Error(response.status.toString());
           }
  
        const data = await response.json();
        return data;
      } 
      catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      
      }
    
  };

  // Log In
  
  export const setAuthentication = (isAuthenticated) => ({
    type: 'SET_AUTHENTICATION',
    payload: isAuthenticated,
  });

  //Log Out

  export const logOutUser = () => {
      return {
        type: 'LOGOUT_USER'
      };

  };

  // Name

  export const setFirstName = (firstName) =>{
    return {
      type : 'SET_FIRST_NAME',
      payload : firstName,
    };
  }

  export const setLastName = (lastName) =>{
    return {
      type : 'SET_LAST_NAME',
      payload : lastName,
    };
  }
