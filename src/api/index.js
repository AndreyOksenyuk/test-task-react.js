const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/'

export const getQuery = (params) => {
   return fetch(url + params)
      .then(response => response.json())
}

export const getUsers = (page, count, nextUrl = null) => {
   return fetch(nextUrl === null ? `${url}users?page=${page}&count=${count}` : nextUrl)
      .then(response => response.json())
}

export const postMyData = (data, token) => {
   let formData = new FormData();  
   formData.append('position_id', data.position_id); 
   formData.append('name', data.name); 
   formData.append('email', data.email); 
   formData.append('phone', data.phone); 
   formData.append('photo', data.photo );

   return fetch(url + 'users', {
      method: 'POST', 
      body: formData, 
      headers: { 'Token': token, },
   })
}

