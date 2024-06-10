import React from 'react'
import './main.css'
import Schedule from './Schedule.jsx'
import Trend from './Trend.jsx';
import Blog from './Blog.jsx';

function Main() {
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    )
}

export default Main;