import dayjs from 'dayjs'
import Weekday from 'dayjs/plugin/weekday'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/index.css'

dayjs.extend(Weekday)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
