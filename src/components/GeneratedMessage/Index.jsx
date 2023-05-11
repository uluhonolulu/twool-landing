import './GeneratedMessage.css'
const GeneratedMessage = ({twoolMessage, otherMessage}) => {

    return (
        <div className="gen-section">
            <h2>Generated Message</h2>
            <div className="gen-cards">
               <div className="gen-card">
                    <h2>other tools</h2>
                    <p>{otherMessage}</p>
                </div>

                 <div className="gen-card">
                    <h2 className='logo'>twool</h2>
                    <p>{twoolMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default GeneratedMessage