import React from 'react';

const RadioInputValidation = React.memo(({ input, meta, AssistiveText, ...props }) => {

   return (
      <>
         <input type='radio' {...input} {...props}
            style={(meta.touched && meta.error) 
               ? { boxShadow: '0px 0px 4px #dc3545', border: '1px solid #dc3545'} 
            : null} />
      </>
   );
})

export default RadioInputValidation;
