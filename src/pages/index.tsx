import React, { useCallback, useRef } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import BaseModal, { BaseModalRef } from './components/base/BaseModal';
import Button from './components/button/Button';

interface ModalContatoProps {
    baseModalRef: React.RefObject<BaseModalRef>;
}

const ModalContato: React.FC<ModalContatoProps> = ({ baseModalRef }) => {
    return <BaseModal ref={baseModalRef}>ModalContato</BaseModal>;
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
            <section className="max-w-2xl container items-center flex-col flex mt-10 lg:mt-16">
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
                    Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas
                    habilidades podem agregar valor á sua equipe.
                </p>

                <Link className={'text-center'} to={'/docs/visao-geral'}>
                    <p className="text-purple-900">
                        Saiba mais sobre as minhas técnicas e processos que utilizo no dia a dia.
                    </p>
                </Link>

                <div className="gap-4 flex mt-4">
                    <Button onClick={handleDownloadCV}>Download CV</Button>
                    <Button onClick={() => modalContatoRef.current.handleOpen()} variant="gradient-purple">
                        Entre em Contato
                    </Button>
                </div>
            </section>

            <ModalContato baseModalRef={modalContatoRef} />
        </Layout>
    );
}
