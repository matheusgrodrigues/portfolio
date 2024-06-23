import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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

                <Link className={'text-center'} to={'/docs/visao-geral'}>
                    <p className="text-purple-900">Saiba mais sobre as minhas técnicas e processos que no dia a dia.</p>
                </Link>

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
