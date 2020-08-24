
export let getQuery =  (params) => {
   return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/${params}`)
   .then(response => response.json())
} 

// putMyPhoto(photo) {
//    const formData = new FormData()
//    formData.append("image", photo)
//    return instance.put(`profile/photo`, formData, {}).then(response => {
//       return response.data
//    })
// },