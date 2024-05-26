/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function NewsItem({article}) {

    const {author, description, url, title, urlToImage} = article;

    if (title && description === "[Removed]") return 

    return <div className="card" style={{width: "18rem"}}>
    <img src={urlToImage ? urlToImage : "https://www.moroylab.org/wp-content/uploads/2018/05/news-2444778_640.jpg"} className="card-img-top" alt="..." style={{width:"100%", height:"195px"}}></img>
    <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 40)} ...</h5>
        <p className="card-text">{description ? description?.slice(0,50) : "Check the source to find the description"} ...</p>
        <p><strong>Author</strong> : {author ? ` ${author.slice(0, author.indexOf(","))}` : "Not mentioned"} </p>
        <a href={url} className="btn btn-outline-primary d-block" target="_blank" type="button">Find the article here</a>
    </div>
</div>
}

export default NewsItem
