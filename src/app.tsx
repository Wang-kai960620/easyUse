import {createRoot} from 'react-dom/client'
import React from 'react'
import './style.less'
import { Page } from '@/page'


const element   = document.getElementById('root')


const container = createRoot(element as HTMLElement)


container.render(<Page/>)

