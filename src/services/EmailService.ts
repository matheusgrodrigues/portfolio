import { EmailBodySchema } from '../schemas/EmailSchema';

const apiUrl = 'https://matheusgomesdev.com.br';

const EmailService = {
    sendContact: async (data: EmailBodySchema) => {
        const req = await fetch(`${apiUrl}/api/send/route`, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors',
        });

        return req.body;
    },
};

export default EmailService;
