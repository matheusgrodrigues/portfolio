interface EmailContactProps {
    receber_informacoes: boolean;
    mensagem: string;
    telefone: string;
    email: string;
    nome: string;
}

const EmailContact: React.FC<Readonly<EmailContactProps>> = ({
    nome,
    email,
    telefone,
    mensagem,
    receber_informacoes,
}) => (
    <ul>
        <li>
            <strong>Nome</strong>: {nome}
        </li>
        <li>
            <strong>E-mail</strong>: {email}
        </li>
        <li>
            <strong>Telefone</strong>: {telefone}
        </li>
        <li>
            <strong>Mensagem</strong>: {mensagem}
        </li>
        <li>
            <strong>Receber Informações</strong>: {receber_informacoes ? 'Sim' : 'Não'}
        </li>
    </ul>
);

export default EmailContact;
