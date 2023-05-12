import * as yup from 'yup';

const cidadaoSchema = yup.object().shape({
  nome: yup.string().min(3).required('Campo nome é obrigatório'),
  cpf: yup
    .string()
    .length(11)
    .required('Campo CPF é obrigatório')
    .trim('Não deve conter espaços no início ou no fim.'),
  sexo: yup.string().required('Campo sexo é obrigatório'),
  nascimento: yup.string().required('Campo nascimento é obrigatório'),
  telefone: yup
    .number()
    .moreThan(10)
    .required('Campo telefone obrigatório'),
  email: yup
    .string()
    .nullable()
    .email('Formato de e-mail digitado não é valido')
    .trim('Não deve conter espaços no início ou no fim.'),
  cidade: yup.string().min(3).required('Campo cidade é obrigatório'),
  bairro: yup.string().min(3).required('Campo bairro é obrigatório'),
  rua: yup.string().min(3).required('Campo rua é obrigatório'),
});

export default cidadaoSchema;
