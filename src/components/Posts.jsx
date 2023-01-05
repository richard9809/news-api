import { useEffect, useState } from "react";
import { NEWS_API_URL, NEWS_API_KEY } from "../api.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart);

function Posts(){
    const [news, setNews] = useState(null);
    const [clicked, setClicked] = useState([]);
    const [likedArticles, setLikedArticles] = useState([]);

    const likeArticle = (article, index) => {
        setLikedArticles([...likedArticles, article]);
        setClicked([...clicked, index]);
        localStorage.setItem("likedArticles", JSON.stringify([...likedArticles, article]));
    }

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`${NEWS_API_URL}/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`);
          const json = await response.json();
          setNews(json);
        }
        fetchData();
      }, []); // this second argument makes the effect only run once

    
    

    return(
        <div className="posts">
            {news ? (
                news.articles.map((article, index) => (
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
                                <button className={`like-button ${clicked.includes(index) ? "clicked" : ""}`} onClick={() => likeArticle(article, index)}>
                                    <FontAwesomeIcon icon={faHeart} className="fa-2x fa-thin" />
                                </button>
                                <div className="post-date">{article.publishedAt}</div>
                                <div className="post-author">{article.author}</div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Posts;