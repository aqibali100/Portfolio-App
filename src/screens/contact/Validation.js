import * as Yup from 'yup';

const spamCheck = (value) => {
  const spamPatterns = [
    /(.)\1{4,}/, // Repeated characters (e.g., "aaaaa")
    /free\s+money/i, // Example spam phrase
    /http[s]?:\/\/\S+/, // URLs
    /[^a-zA-Z0-9\s]/, // Special characters that are unusual in normal text
  ];

  return spamPatterns.some((pattern) => pattern.test(value));
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is Required')
    .min(4, 'Name must be at least 4 characters')
    .max(20, 'Name must be less than 20 characters')
    .test('spam-check', 'Invalid name (suspected spam)', (value) => !spamCheck(value)),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is Required')
    .max(40, 'Email must be less than 40 characters'),
  phone: Yup.string()
    .required('Phone is Required')
    .matches(/^[0-9]+$/, 'Phone must be a number')
    .min(10, 'Phone must be at least 10 digits')
    .max(15, 'Phone must be less than 15 digits')
    .test('spam-check', 'Invalid phone (suspected spam)', (value) => !spamCheck(value)),
  message: Yup.string()
    .required('Message is Required')
    .min(20, 'Message must be at least 20 characters')
    .max(150, 'Message must be less than 150 characters')
});

export default validationSchema;
