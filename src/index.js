import React from 'react'
import ReactDOM from 'react-dom'

import { Intro }  from './components/Intro'
import { Cards }  from './components/Cards'
import { Footer } from './components/Footer'

import './styles/main.css'

const App = () => {
    const [data, setData] = React.useState([])
    const [stack, setStack] = React.useState([])

    React.useEffect(() => {

        async function fetchData () {
            const fetched = await (await fetch(`${process.env.PUBLIC_URL}/assets/data/Data.json`)).json()
            
            let arr = []
            for (let i = 0; i < fetched.length; i++) {
                for (let j = 0; j < fetched[i].stack.length; j++) {
                    !arr.includes(fetched[i].stack[j]) && arr.push(fetched[i].stack[j])
                }
            }
            arr.sort()

            setData(fetched)
            setStack(arr)
        }

        fetchData()
    }, [])
    
    return (
        <>
            <Intro {...{stack}}/>
            <Cards {...{data}}/>
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
