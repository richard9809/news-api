import Country from "./Country";
import { NEWS_API_KEY, NEWS_API_URL } from "../api";
import { useEffect, useState } from "react";

export default function Headlines(){
    const [news, setNews] = useState(null);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(`${NEWS_API_URL}/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        const json = await response.json();
        setNews(json);
        }
        fetchData();
    }, []); // this second argument makes the effect only run once
    return (
        <div>
            <Country />
            <div className="posts">
            {news ? (
                news.articles.map(article => (
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
                <div>Loading...</div>
            )}
        </div>
        </div>
    );
}