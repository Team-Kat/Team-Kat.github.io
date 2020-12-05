import React, { useEffect } from 'react'
import './styles/global.css'
import 'aos/dist/aos.css';
import 'reactjs-popup/dist/index.css';

import { init, refresh }  from 'aos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './routes/Main'
import Privacy from './routes/Privacy'
import NotFound from './routes/NotFound'

const App = () => {
    useEffect(() => {
        init()
        refresh()
    }, [])

    if (window.innerWidth < 350) alert('스마트폰 화면에서 컨테이너가 겹치는 현상이 있습니다. 현재 고치는 중입니다.')
    if (window.innerHeight < 350) alert('너무 세로 길이가 짧아서 화면이 재대로 보이지 않을수 있습니다')

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route exact path = '/privacy' component = {Privacy} />
                <Route component = {NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App