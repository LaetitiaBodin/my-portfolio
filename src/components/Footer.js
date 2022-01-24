export const Footer = () => {
    return (
        <footer>
            <p>En savoir plus</p>
            <div>
                <a href='https://github.com/LaetitiaBodin?tab=repositories' target='_blank' rel='noopener noreferrer'>
                    <ImgGithub/>
                </a>
                <a href={`${process.env.PUBLIC_URL}/assets/docs/cv--dev-web-junior--laetitia-bodin.pdf`} target='_blank' rel='noopener noreferrer'>
                    <ImgResume/>
                </a>
            </div>
        </footer>
    )
}

const ImgGithub = () => {
    return (
        <svg className='icon__git' role='img' aria-label='Github' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path className='front' d="M11 31.18a15.88 15.88 0 0 0 10.06 0 .78.78 0 0 1-1-.51.69.69 0 0 1 0-.25v-4.4a3.8 3.8 0 0 0-1.08-3c3.56-.4 7.3-1.76 7.3-7.9a6.17 
                6.17 0 0 0-1.64-4.3 5.76 5.76 0 0 0-.16-4.24c0 0-1.38-.4-4.48 1.68a15.08 15.08 0 0 0-8 0C8.94 6.2 7.6 6.62 7.6 6.62a5.76 5.76 0 0 0-.16 
                4.24 6.22 6.22 0 0 0-1.6 4.3c0 6.12 3.72 7.5 7.28 7.9a3.38 3.38 0 0 0-1 2.14 3.43 3.43 0 0 1-4.68-1.31h0A3.18 3.18 0 0 0 5 22.24c-1.34 
                0-.54.76 0 1.06a5.86 5.86 0 0 1 1.64 2.26C7 26.46 8 28.18 12 27.44v3c0 .4-.3.88-1.07.76z"/>
            <path className='back' d="M16-.04c-8.837 0-16 7.163-16 16a16 16 0 0 0 11 15.22c.74.12 1-.34 1-.76v-3c-4 .76-5-.96-5.36-1.86A5.94 5.94 0 0 0 5 23.3c-.56-.3-1.36-1 
                0-1.06a3.2 3.2 0 0 1 2.44 1.64h0a3.42 3.42 0 0 0 4.66 1.32h0a3.38 3.38 0 0 1 1-2.14c-3.54-.4-7.26-1.78-7.26-7.9a6.22 6.22 0 0 1 1.64-4.3 5.76 
                5.76 0 0 1 .16-4.24S9 6.2 12 8.26a15.08 15.08 0 0 1 8 0c3.06-2.08 4.4-1.64 4.4-1.64a5.76 5.76 0 0 1 .16 4.24 6.17 6.17 0 0 1 1.64 4.3c0 
                6.14-3.74 7.5-7.3 7.9a3.79 3.79 0 0 1 1.08 3v4.4a.78.78 0 0 0 .78.8.73.73 0 0 0 .25 0A16 16 0 0 0 32 15.96c0-8.837-7.163-16-16-16z"/>
            </svg>
    )
}

const ImgResume = () => {
    return (
        <svg className='icon__cv' role='img' aria-label='CV' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32">
            <path className='frame' d="M26.83 0H1.17A1.12 1.12 0 0 0 0 1.07h0v29.86A1.12 1.12 0 0 0 1.17 32h25.66A1.12 1.12 0 0 0 28 30.93h0V1.07A1.12 1.12 0 0 0 26.83 0z"/>
            <path className='back' d="M2.33 2.13h23.34v27.74H2.33z"/>
            <path className='rect_l' d="M11.67 25.6h11.66v2.13H11.67zm0-4.27h11.66v2.14H11.67zm0-4.26h11.66v2.13H11.67zm0-4.27h11.66v2.13H11.67zm0-4.27h11.66v2.14H11.67z"/>
            <path className='rect_s' d="M4.67 17.07h4.66v2.13H4.67zm0-4.27h4.66v2.13H4.67z"/>
            <path className='pic' d="M9.33 8.53A1.59 1.59 0 0 0 8.19 7a1.56 1.56 0 0 0 .56-1.17 1.76 1.76 0 0 0-3.5 0A1.56 1.56 0 0 0 5.81 7a1.61 1.61 0 0 0-1.14 1.49v2.14h4.66z"/>
            </svg>
    )
}