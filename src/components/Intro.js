export const Intro = ({stack}) => {
    return (
        <header>
            <h1>Portfolio</h1>
            <div>
                <p>Voici un aperçu des derniers projets publics sur lesquels j'ai travaillé.</p>
                <ul>
                    {stack.map((e, idx) => <Stack key={`intro_stack_${idx}`} {...{e, idx}}/>)}
                </ul>
            </div>
        </header>
    )
}

const Stack = ({e, idx}) => {
    return (
        <li>
            <img key={`intro_stack_${idx}`} src={`${process.env.PUBLIC_URL}/assets/icons/${e}.svg`} alt={e}/>
            <span>{e}</span>
        </li>
    )
}