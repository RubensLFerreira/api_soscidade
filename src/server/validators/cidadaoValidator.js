import * as yup from 'yup';

const cidadaoSchema = yup.object().shape({
  nome: yup.string().min(3).required('Campo nome é obrigatório'),
  cpf: yup
    .string()
    .length(11, 'Campo CPF deve ter no máximo 11 caracteres')
    .required('Campo CPF é obrigatório')
    .trim('Não deve conter espaços no início ou no fim.'),
  sexo: yup.string().required('Campo sexo é obrigatório'),
  nascimento: yup.date().required('A data de nascimento é obrigatória'),
  telefone: yup.number().min(10).required('Campo telefone obrigatório'),
  email: yup
    .string()
    .nullable()
    .email('Formato de e-mail digitado não válido')
    .trim('Não deve conter espaços no início ou no fim.'),
  login: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .max(20, 'Login precisa ter no máximo 20 caracteres')
    .required('Campo login obrigatório'),
  senha: yup
    .string()
    .min(3, 'Senha precisa ter no minímo 3 caracteres')
    .max(10, 'Senha precisa ter no máximo 10 caracteres')
    .required('Campo senha obrigatório'),
});

export default cidadaoSchema;
