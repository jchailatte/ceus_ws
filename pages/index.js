import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'

import bg from '../graphics/homepage.gif'
import bgstyle from '../css/background.module.css'

import Drawer from '../components/Drawer'
import items from '../components/sbitems'

class Index extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
          <div className={bgstyle.container}>\
            <Drawer></Drawer>
          </div>
        )
    }
}

export default Index;