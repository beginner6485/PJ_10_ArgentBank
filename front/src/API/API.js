


export function toLogin(id, email){

    fetch ('http://localhost:3001/api/v1/user/profile', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la vérification des informations d\'identification');
        }
        return response.json();
    })
    .then(data => {
        if (data.body) {
            console.log(data.body)
            return data.body; // Retourner le token si la réponse contient un token valide
        } else {
            throw new Error('Token non trouvé dans la réponse');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la tentative de connexion:', error);
        throw error; // Renvoyer l'erreur pour la gérer dans le composant Connexion
    });
  }

export async function obtainUserInfo(token){
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      console.log(data)
      return data;
    } 
    catch (error) {
      console.error('erreur de connexion', error);
      throw error;
    }
  
};
