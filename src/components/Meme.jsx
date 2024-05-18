import React from "react"
import memesData from "../memesData.js"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )
    }

    return (
        <div className="meme">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input
                        id="top-text"
                        type="text"
                        className="form-input"
                        placeholder="Shut up" />
                </div>
                <div className="form-group">
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input
                        id="bottom-text"
                        type="text"
                        className="form-input"
                        placeholder="Bottom-Text" />
                </div>
                <button className="form-button" onClick={getMeme}>
                    Get a new meme image  🖼
                </button>
                <img className="meme-image" src={meme.randomImage} alt="" />
            </div>
        </div>
    )
}
export default Meme
