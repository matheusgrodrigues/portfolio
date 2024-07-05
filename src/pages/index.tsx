import React, { useCallback } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Button from '../components/Button/Button';

export default function Home(): React.ReactElement {
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
            <section className="container items-center flex-col flex mt-10 lg:mt-16">
                <div className="items-center flex-col size-max flex gap-3">
                    <div className="overflow-hidden border-slate-200 border-solid rounded-full bg-slate-400 border-3 w-20 h-20">
                        <img className="w-full h-full" src="/img/foto.jpeg" alt={`${siteConfig.tagline}`} />
                    </div>
                    <p className="text-sm">{siteConfig.title}</p>
                </div>

                <h1 className="max-w-2xl text-center text-lg2 m-0">
                    <span className="text-purple-900 block">Programador Frontend</span> apaixonado por criação de
                    interfaces inovadoras
                </h1>

                <p className="max-w-2xl text-center text-md1 my-8">
                    Com mais de <span className="text-purple-300">6 anos de experiência</span>, criativo e especializado
                    em Javascript/Typescript, ReactJS/Next.JS. Tenho ampla experiência em criação de componentes
                    reutilizáveis, TDD, DDD, Clean Code, Clean Architecture e testes automatizados. Adepto das
                    metodologias ágeis, desenvolvo soluções eficazes e simplificadas para a resolução de problemas
                    complexos.
                </p>

                <div className="gap-4 flex mt-4">
                    <Button onClick={handleDownloadCV} variant="gradient-purple">
                        Download CV
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
