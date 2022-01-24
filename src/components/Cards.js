import React from 'react'

export const Cards = ({data}) => {
    return (
        <main>
            {data.map(e => <Card {...{...e}} key={`card_${e.id}`}/>)}
        </main>
    )
}

const Card = (props) => {
    const {name, link, srcset, desc, stack} = props
    
    return (
        <div className='card__block'>
            <h2>{name}</h2>
            <div className='card__info'>
                <Base {...{name, srcset, link}} />
                <Drawer {...{desc, stack}}/>
            </div>
        </div>
    )
}

const Base = ({name, srcset, link}) => {

    const src = Object.entries(srcset)
    const sources = src.map(e => `${process.env.PUBLIC_URL}/${e[1]} ${e[0]}`).join(',')
    const img = `${process.env.PUBLIC_URL}/${src.slice(-1)[0][1]}`

    return (
        <div className='card__base'>
            <div>
                <img src={img} srcSet={sources} sizes='90%' alt={`Aperçu de "${name}"`}/>
                <a href={link} target='_blank' rel='noopener noreferrer'>Voir</a>
            </div>
        </div>
    )
}

const Drawer = ({desc, stack}) => {
    const [open, setOpen] = React.useState(null)
    const isOpen =
        open === true ? 'open'
        : open === false ? 'closed'
            : 'default'

    const setDrawer = () => {open ? setOpen(false) : setOpen(true)}

    return (
        <div className={`card__drawer ${isOpen}`}>
            <div onClick={() => setDrawer()} className='card__drawer__tip'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M958.1,520.31c.88-1.55,2.3-1.55,3.18,0L971,537.53c.88,1.55,1.27,5.62-1.51,5.62H949.87c-2.88,0-2.4-4.07-1.52-5.62Z" transform="translate(-947.67 -519.15)"/>
                </svg>
            </div>
            <div className='card__drawer__info'>
                <ul className="card__description">
                    {desc.map((e, idx) => <li key={`desc_${idx}`}>{e}</li>)}
                </ul>
                <div className='card__stack'>
                    {stack.map((e, idx) => <img key={`card_stack_${idx}`} src={`${process.env.PUBLIC_URL}/assets/icons/${e}.svg`} alt={e}/>)}
                </div>
            </div>
        </div>
    )
}