import { useEffect, useState } from "react";
import Navbar from "./Componenets/Navbar";
import ThumbnailNews from "./Componenets/ThumbnailNews";

import axios from "axios";

const ArticleHomePage = () => {
	const [mostEmailedArticle, setMostEmailedArticle] = useState([]);
	const [mostSharedArticle, setMostSharedArticle] = useState([]);
	const [mostViewedArticle, setMostViewedArticle] = useState([]);

	const FetchData = async () => {
		const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=vRaxuZ0cD8TeSiHfif17niUJrP8fN5aS`;
		axios(url).then((response) => {
			setMostEmailedArticle([...response.data.results]);
		});
	};
	useEffect(() => {
		FetchData();
	}, []);
	console.log(mostEmailedArticle, "p");
	return (
		<div>
			<Navbar />
			<div style={{ fontSize: "40px", fontWeight: 700 }}>Delos News</div>
			{mostEmailedArticle?.map((element, index) => {
				const media = element?.media?.[0]?.["media-metadata"];
				return (
					<ThumbnailNews
						key={index}
						image={media?.[0].url}
						title={element.title}
						abstract={element.abstract}
						source={element.source}
						url={element.url}
					/>
				);
			})}
		</div>
	);
};
export default ArticleHomePage;
