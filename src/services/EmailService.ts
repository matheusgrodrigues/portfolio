import axios from 'axios';

import { EmailBodySchema } from '../schemas/EmailSchema';

const apiUrl = 'https://matheusgomesdev.com.br';

const EmailService = {
    sendEmail: async (data: EmailBodySchema) => {
        const req = await axios.post(`${apiUrl}/api/send/route`, {
            ...data,
        });

        return req.data;
    },
};

export default EmailService;
