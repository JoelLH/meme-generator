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

    return (
        <section className="inputs-section">
            <div action="" className="form" >
                <div className="inputs-wrapper">
                <input type="text" placeholder="Top Text" className="form-input"/>
                <input placeholder="Bottom Text" type="text" className="form-input"/>
                </div>
                <button className="get-btn" onClick={getImg}>
                    Get a new meme image 🖼
                </button>
                <img src={meme.randomImg} alt="New Meme" className="newimg-meme"/>
            </div>
        </section>
    )
}