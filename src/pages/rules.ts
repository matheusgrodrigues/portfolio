import { z } from 'zod';

const formContactRules = z.object({
    mensagem: z.string().min(1, { message: 'Mensagem é um campo obrigatório' }),
    telefone: z.string().min(1, { message: 'Telefone é um campo obrigatório' }),
    email: z.string().min(1, { message: 'Email é um campo obrigatório' }),
    nome: z.string().min(1, { message: 'Nome é um campo obrigatório' }),
    manter_informado: z.unknown(),
});

export default formContactRules;
