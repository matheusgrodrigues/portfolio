import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';

export default function Home(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout description="Descrição dos meus processos de trabalho" title={siteConfig.title}>
            <section className="max-w-2xl container items-center flex-col flex mt-10 lg:mt-16">
                <div className="items-center flex-col w-max flex gap-3">
                    <div className="overflow-hidden border-slate-200 border-solid rounded-full bg-slate-400 border-3 w-20 h-20">
                        <img className="w-full h-full" src="/img/foto.jpeg" />
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

                <p className="text-purple-900">Vamos criar algo incrível juntos?</p>

                <div className="gap-4 flex mt-4">
                    <button className="text-slate-900 dark:text-white bg-transparent font-semibold cursor-pointer border-none text-sm">
                        Download CV
                    </button>
                    <button className="text-white bg-gradient-to-r from-purple-900 to-purple-500 hover:opacity-90 cursor-pointer font-semibold rounded-lg border-none text-sm w-40 py-4">
                        Entre em Contato
                    </button>
                </div>
            </section>
        </Layout>
    );
}

/*

import Link from '@docusaurus/Link';

interface ButtonLink {
    children: React.ReactNode;
    to: string;
}

const ButtonLink: React.FC<ButtonLink> = ({ children, to }) => (
    <Link
        className="bg-gradient-to-b from-purple-700 to-purple-500 text-white button hover:text-white shadow--tl rounded-lg text-md1 w-auto py-3 px-6 mt-4"
        to={to}
    >
        {children}
    </Link>
);


export default function Home(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout description="Descrição dos meus processos de trabalho" title={`${siteConfig.title} - Processos`}>
            <header className=" padding--lg hero">
                <section className="container text-center md:my-[16vh]">
                    <div className=" avatar avatar--vertical">
                        <img className="shadow--tl avatar__photo avatar__photo--xl" src="/img/foto.jpeg" />
                        <div className="avatar__intro">
                            <div className="avatar__name font-sans mt-2">GomesDev</div>
                            <small className="avatar__subtitle">Frontend Developer</small>
                        </div>
                    </div>

                    <span className="badge badge--secondary my-4">Este projeto está em andamento</span>

                    <h3 className="my-2">{siteConfig.tagline}</h3>

                    <ButtonLink to="/docs/visao-geral">Começar</ButtonLink>
                </section>
            </header>
        </Layout>
    );
}
*/
