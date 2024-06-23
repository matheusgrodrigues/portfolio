import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ImgHTMLAttributes, useRef } from 'react';

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

interface AvatarProps extends React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
    return (
        <div className="">
            <img {...props} />
        </div>
    );
};

export default function Home(): React.ReactElement {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout description="Descrição dos meus processos de trabalho" title={siteConfig.title}>
            <Avatar />
        </Layout>
    );
}

/*
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
