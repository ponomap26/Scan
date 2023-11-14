import {Button} from "react-bootstrap";

function Histogram(){
    return(
        <div className="resultcard">
            <div className="card-info">
                <time>{issueDate}</time>
                <a href={sourceURL}>{sourceName}</a>
            </div>
            <p className="card-title">{title}</p>
            <div className="card-badges">
                { isTechNews ? <div className="card-badge">Технические новости</div> : null }
                { isAnnouncement ? <div className="card-badge">Анонсы и события</div> : null }
                { isDigest ? <div className="card-badge">Сводки новостей</div> : null }
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png" alt={title} className="card-img" />
            <p className="card-description">{(DOMPurify.sanitize(description)).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&lt;…&gt;/g, '').replace(/<[^>]*>?/gm, '')}</p>
            <div className="card-footer">
                <a href={sourceURL}>
                    <Button
                        type="button"
                        stylization="resultcardbutton"
                        disabled={false}
                    >Читать в источнике</Button>
                </a>
                <p className="words">{wordCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} слова</p>
            </div>
        </div>
    )
}
export default Histogram