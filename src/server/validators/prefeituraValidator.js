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
    .email('Campo e-mail é obrigatório')
    .trim('Não deve conter espaços no início ou no fim'),
  site: yup.string().notRequired(),
  prefeito: yup.string().min(3).required('O campo prefeito é obrigatório'),
  cidade: yup.string().min(3).required('O campo cidade é obrigatório'),
  bairro: yup.string().min(3).required('O campo bairro é obrigatório'),
  rua: yup.string().min(3).required('O campo rua é obrigatório'),
});

export default prefeituraSchema;
