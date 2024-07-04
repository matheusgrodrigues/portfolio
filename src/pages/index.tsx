import React, { useCallback, useRef } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { z } from 'zod';

import BaseField from './components/Base/BaseField';
import BaseForm from './components/Base/BaseForm';
import BaseModal, { BaseModalRef } from './components/Base/BaseModal';
import InputCheckbox from './components/Input/InputCheckbox';
import InputTextarea from './components/Input/InputTextarea';
import InputTelefone from './components/Input/InputTelefone';
import InputText from './components/Input/InputText';
import Button, { ButtonRef } from './components/Button/Button';

import EmailService from '../services/EmailService';

const formContactRules = z.object({
    mensagem: z.string().min(1, { message: 'Mensagem é um campo obrigatório' }),
    telefone: z.string().min(1, { message: 'Telefone é um campo obrigatório' }),
    email: z
        .string()
        .min(1, { message: 'Email é um campo obrigatório' })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
            message: 'E-mail invalido!',
        }),
    nome: z.string().min(1, { message: 'Nome é um campo obrigatório' }),
    manter_informado: z.unknown(),
});

interface ModalContatoFields {
    receber_informacoes: boolean;
    mensagem: string;
    telefone: string;
    email: string;
    nome: string;
}

interface ModalContatoProps {
    baseModalRef: React.RefObject<BaseModalRef>;
}

const ModalContato: React.FC<ModalContatoProps> = ({ baseModalRef }) => {
    const submitButtonRef = useRef<ButtonRef>(null);

    const handleSubmit = async (data: ModalContatoFields) => {
        submitButtonRef.current.setLoading(true);

        try {
            await EmailService.sendContact(data);
            submitButtonRef.current.setLoading(false);
        } catch (error) {
            submitButtonRef.current.setLoading(false);
        }
    };

    return (
        <BaseModal ref={baseModalRef}>
            <section className="container items-center flex-col flex mb-40">
                <h5 className="text-purple-900">Contato</h5>
                <h1 className="dark:text-white">Entrar em Contato</h1>
                <p>Entrarei em contato com você ainda hoje!</p>

                <BaseForm
                    validationSchema={formContactRules}
                    className="max-w-lg flex-col w-full flex gap-6 mt-4"
                    onSubmit={handleSubmit}
                >
                    <BaseField render={<InputText label="Nome" />} name="nome" />
                    <BaseField render={<InputText label="E-mail" />} type="email" name="email" />
                    <BaseField render={<InputTelefone label="Telefone" />} name="telefone" />
                    <BaseField render={<InputTextarea label="Mensagem" />} name="mensagem" />

                    <BaseField
                        render={
                            <InputCheckbox label="Gostaria de estar atualizado sobre os próximos projetos e receber informações a respeito." />
                        }
                        name="manter_informado"
                    />

                    <Button variant="gradient-purple" ref={submitButtonRef}>
                        Enviar mensagem
                    </Button>
                </BaseForm>
            </section>
        </BaseModal>
    );
};

export default function Home(): React.ReactElement {
    const modalContatoRef = useRef<BaseModalRef>(null);

    const { siteConfig } = useDocusaurusContext();

    const handleDownloadCV = useCallback(() => {
        const fileName = 'curriculo-matheus-gomes-rodrigues-de-jesus';

        const pdfUrl = `/img/${fileName}.pdf`;

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }, []);

    return (
        <Layout description="Descrição dos meus processos de trabalho" title={siteConfig.title}>
            <section className="container max-w-2xl items-center flex-col flex mt-10 lg:mt-16">
                <div className="items-center flex-col size-max flex gap-3">
                    <div className="overflow-hidden border-slate-200 border-solid rounded-full bg-slate-400 border-3 w-20 h-20">
                        <img className="w-full h-full" src="/img/foto.jpeg" alt={`${siteConfig.tagline}`} />
                    </div>
                    <p className="text-sm">{siteConfig.title}</p>
                </div>

                <h1 className="text-center text-lg2 m-0">
                    <span className="text-purple-900 block">Programador Frontend</span> apaixonado por criação de
                    interfaces inovadoras
                </h1>

                <p className="text-center text-md1 my-8">
                    Desenvolvedor Frontend com mais de 6 anos de experiência, criativo e especializado em
                    Javascript/Typescript, ReactJS/Next.JS. Tenho ampla experiência em testes automatizados, criação de
                    componentes reutilizáveis, TDD, DDD, Clean Code e Clean Architecture. Adepto das metodologias ágeis,
                    desenvolvo soluções eficazes e simplificadas para a resolução de problemas complexos.
                </p>

                <div className="gap-4 flex mt-4">
                    <Button onClick={handleDownloadCV} variant="gradient-purple">
                        Download CV
                    </Button>
                </div>
            </section>

            <ModalContato baseModalRef={modalContatoRef} />
        </Layout>
    );
}
