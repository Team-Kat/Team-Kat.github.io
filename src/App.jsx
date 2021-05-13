import React, { useEffect } from 'react'
import './styles/global.css'
import 'aos/dist/aos.css';
import 'reactjs-popup/dist/index.css';

import { init, refresh } from 'aos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './routes/Main'
import Privacy from './routes/Privacy'
import NotFound from './routes/NotFound'

const App = () => {
    useEffect(() => {
        init()
        refresh()
    }, [])

    if (window.innerWidth < 350 || window.innerHeight < 350)
        alert('가로, 세로 350px 미만 기기는 지원하지 않습니다.');

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/privacy' component={Privacy} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App