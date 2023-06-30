const BASE_URL = 'https://openspace-api.netlify.app/v1';

async function register({ id, name, password }) {
   await fetch('https://openspace-api.netlify.app/v1/users', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         id,
         name,
         password
      }),
   })

   const responseJson = await response.json();
   const { status, message } = responseJson;

   if (status !== 'success') {
      throw new Error(message);
   }

   const { data: { user } } = responseJson;

   return user;
}

register('idtio', 'tio', 'tio12345').then((user) => console.log(user));
