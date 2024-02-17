import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ToggleTheme } from "../App"

const UseState=()=>{

    let [content,setContent]=useState("")
    let [like,setLike]=useState(0)

    let theme=useContext(ToggleTheme)

    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
    }



    let para="Everybody who is living on this earth is leading his life, but if we talk about the human beings then their life is not the bed of roses, it has problems and struggles. But the life has some beautiful aspects also which gives him a ray of hope and positivity. We have family, relatives and friends who make our life special and make us feel about the specialty of our life."

    const handlepara=()=>{
        setContent(content==""?para:"")
    }

    useEffect(()=>{
        alert("Content button clicked")
    },[content])

    return(
        <div className="style" style={themeStyle}>
            <h3>{content}</h3>
            <button onClick={handlepara}>Content</button>
            <h3>{like}</h3>
            <button onClick={()=>setLike((prevLike)=>prevLike+1)}>Like</button>
        </div>
    )
}

export default UseState