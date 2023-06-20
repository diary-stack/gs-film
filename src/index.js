import React from 'react'
import ReactDOM from'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./main.css"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)


// http://192.168.221.145:9000/api/movies