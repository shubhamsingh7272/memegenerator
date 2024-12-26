import Header from "./components/Header"
import Main from "./components/Main"
import "./index.css"
import React from "react"



export default function App() {
    const[state,setState]=React.useState(null)
    return (
        <>
            <Header />
            <Main />
        </>
    )
}