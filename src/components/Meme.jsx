import React from "react"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemes, setallMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes))
    }, [])

    React.useEffect(() => {
        if (allMemes.length > 0) {
            getMemeImage()
        }
    }, [allMemes])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input
                        id="top-text"
                        type="text"
                        className="form-input"
                        placeholder="Top text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input
                        id="bottom-text"
                        type="text"
                        className="form-input"
                        placeholder="Bottom-Text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
export default Meme
