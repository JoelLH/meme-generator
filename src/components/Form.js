import Memes from "./memeData"
import React from "react";

export default function Form(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    });

    function getImg(){
        let count = Math.round(Math.random() * 99);
        console.log(count);
        setMeme(prev=>{
            return{
                ...prev,
                randomImg: Memes.data["memes"][count]["url"]
            }
        })
    };
    function handleChange(event){
        const{name, value} = event.target
        setMeme(prev=>({
            ...prev,
            [name] : value
        }))
    }

    return (
        <section className="inputs-section">
            <div action="" className="form" >
                <div className="inputs-wrapper">
                <input
                type="text" 
                placeholder="Top Text" 
                className="form-input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                placeholder="Bottom Text" 
                type="text" 
                className="form-input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                </div>
                <button className="get-btn" onClick={getImg}>
                    Get a new meme image 🖼
                </button>
                <div className="meme-box">
                    <img src={meme.randomImg} alt="New Meme" className="newimg-meme"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom" >{meme.bottomText}</h2>
                </div>
                
            </div>
        </section>
    )
}