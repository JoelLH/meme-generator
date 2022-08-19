import troll from "../troll-face.png"
export default function Header(){
    return (
        <header className="main-header">
            <div className="logo-box">
                <img src={troll} alt="troll face" className="logo"/>
                <h2 className="logo-name">Meme Generator</h2>
            </div>
            <p className="page-title">React Course - Project 3</p>
        </header>
    )
}