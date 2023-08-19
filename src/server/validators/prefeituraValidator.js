import * as yup from 'yup';

const prefeituraSchema = yup.object().shape({
  nome: yup.string().min(3).required('Campo nome é obrigatório'),
  telefone: yup
    .number()
    .positive()
    .moreThan(10)
    .required('Campo telefone obrigatório'),
    email: yup
    .string()
    .nullable()
    .email('Formato de e-mail digitado não válido')
    .trim('Não deve conter espaços no início ou no fim.'),
  site: yup.string().notRequired(),
  prefeito: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .required('O campo prefeito é obrigatório'),
  login: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .max(20, 'Login precisa ter no máximo 20 caracteres')
    .required('Campo login obrigatório'),
  senha: yup
    .string()
    .min(3, 'Senha precisa ter no minímo 3 caracteres')
    .max(20, 'Senha precisa ter no máximo 10 caracteres')
    .required('Campo senha obrigatório'),
});

export default prefeituraSchema;
