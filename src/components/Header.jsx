import trollface from "../images/troll-face.png"

function Header() {
    return (
        <nav className="header">
            <img className="header-img" src={trollface} alt="" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </nav>
    )
}
export default Header