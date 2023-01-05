import { useEffect, useState } from "react";

export default function LikedPosts(){
    const [likedArticles, setLikedArticles] = useState([]);

    useEffect(() => {
        const likedArticles = JSON.parse(localStorage.getItem("likedArticles"));
        console.log(likedArticles);
        setLikedArticles(likedArticles || []);
    }, []);

    return(
        <div className="posts">
            {likedArticles.length > 0 ? (
                likedArticles.map(article => (
                    <div key={article.url} className="post">
                        <img src={article.urlToImage} alt="" />
                        <div className="post-content">
                            <h2 className="post-title">{article.title}</h2>
                            <div className="post-description">
                                {article.description}
                                <a href={article.url} target="_blank" rel="noreferrer noopener" className="post-full">
                                    Read More
                                </a>
                            </div>
                            <div className="more-info">
                                <div className="post-date">{article.publishedAt}</div>
                                <div className="post-author">{article.author}</div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>You haven't liked any articles yet</div>
            )}
        </div>
    );
}
