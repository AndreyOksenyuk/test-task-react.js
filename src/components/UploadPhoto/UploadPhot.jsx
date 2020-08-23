import React from 'react';

const UploadPhot = () => {
   return (
      <>
      <label htmlFor="inputFile" style={{cursor: 'pointer'}}>
         <span>Browse</span>
         <input type="file" id="inputFile" style={{display: 'none'}}/>
      </label>
      </>
   );
}

export default UploadPhot;
