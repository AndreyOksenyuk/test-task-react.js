export const required = value => (
   value || typeof value === 'number'
      ? undefined
      : 'Field must not be empty'
)

const maxLength = max => value =>
   value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength60 = maxLength(60)

const maxLength2 = max => value =>
   value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength100 = maxLength2(100)

export const minLength = min => value =>
   value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

export const email = value =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined

export const phoneNumber = value =>
   value && !/^(\+380[1-9][0-9]{8})$/i.test(value)
      ? 'Invalid phone number, must be 12 digits and start with +380'
      : undefined
