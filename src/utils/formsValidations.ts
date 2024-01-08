import Joi from 'joi';

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface IFieldError {
  [key: string]: string;
}

export const signInValidation = (formValues: ISignInFormValues) => {
  const fieldsValidationSchema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .trim()
      .messages({
        'string.base': 'Email must be a string',
        'string.email': 'Enter a valid email address',
        'any.required': 'You must enter an email',
        'string.empty': 'You must enter an email'
      }),
    password: Joi.string().required().trim().messages({
      'string.base': 'Password must be a string',
      'any.required': 'You must enter a password',
      'string.empty': 'You must enter a password'
    })
  };

  const errors: IFieldError = {};

  const schema = Joi.object(fieldsValidationSchema);

  const objError = schema.validate(formValues, { abortEarly: false });

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
};
