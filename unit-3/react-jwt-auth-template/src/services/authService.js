// const BACKEND_URL = 'http://localhost:3000'; // this is our Express API url

// const signup = async (formData) => {
//   try {
//     const res = await fetch(`${BACKEND_URL}/auth/sign-up`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//     const json = await res.json()
//     if (json.token) {
//         localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
  
//         const user = JSON.parse(atob(json.token.split('.')[1]));
  
//         return user
//     }
//     if (json.err) {
//       throw new Error(json.err)
//     }
//     return json
//   } catch (err) {
//     console.log(err)
//     throw err
//   }
// }

// const signin = async (user) => {
//     try {
//       const res = await fetch(`${BACKEND_URL}/users/signin`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user),
//       });
//       const json = await res.json();

//       if (json.token) {
//         localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage
  
//         const user = JSON.parse(atob(json.token.split('.')[1]));
  
//         return user
//       }
  
//       if (json.error) {
//         throw new Error(json.error);
//       }
  
//       if (json.token) {
//         const user = JSON.parse(atob(json.token.split('.')[1]));
//         return user;
//       }
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
// };

// const getUser = () =>  {
//     const token = localStorage.getItem('token');
//     if (!token) return null;
//     const user = JSON.parse(atob(token.split('.')[1]));
//     return user
// }

// const signout = () => {
//     localStorage.removeItem('token');
// };


// export {
//   signup,
//   signin,
//   getUser,
//   signout
// }

const BACKEND_URL = 'http://localhost:3000'

export const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    const json = await res.json()
    if(json.err) {
      throw new Error(json.err)
    }
    if(json.token) {
      localStorage.setItem('token', json.token)
    }
    return json
  } catch (err) {
    console.log(err)
    throw err;
  }
}

export const signin = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    const json = await res.json()
    if(json.err) {
      throw new Error(json.err)
    }

    if(json.token) {
      localStorage.setItem('token', json.token)
      const user = JSON.parse(atob(json.token.split('.')[1]))
      console.log(user)
      return user
    }
  } catch (err) {
    console.log(err)
    throw err;
  }
}

export const getUser = () => {
  const token = localStorage.getItem('token')
  if(!token) return null
  const user = JSON.parse(atob(token.split('.')[1]))?.payload
  return user
}

export const signout = () => {
  localStorage.removeItem('token')
}