
function Meme() {
    return (
        <div className="meme">
            <form className="form">
                <div>
                    <label htmlFor="top-text" className="form-label">Top text</label>
                    <input
                        id="top-text"
                        type="text"
                        className="form-input"
                        placeholder="Shut up" />
                </div>
                <div>
                    <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                    <input
                        id="bottom-text"
                        type="text"
                        className="form-input"
                        placeholder="Bottom-Text" />
                </div>
                <button className="form-button">
                    Get a new meme image  🖼
                </button>
            </form>
        </div>
    )
}
export default Meme