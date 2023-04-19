import { useEffect, useState } from "react";
import Navbar from "./Componenets/Navbar";
import ThumbnailNews from "./Componenets/ThumbnailNews";

import axios from "axios";

const ArticleHomePage = () => {
	const [mostEmailedArticle, setMostEmailedArticle] = useState([]);
	const [mostSharedArticle, setMostSharedArticle] = useState([]);
	const [mostViewedArticle, setMostViewedArticle] = useState([]);

	const FetchEmailedData = async () => {
		const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=vRaxuZ0cD8TeSiHfif17niUJrP8fN5aS`;
		axios(url).then((response) => {
			setMostEmailedArticle([...response.data.results]);
		});
	};
	const FetchViewedData = async () => {
		const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=vRaxuZ0cD8TeSiHfif17niUJrP8fN5aS`;
		axios(url).then((response) => {
			setMostViewedArticle([...response.data.results]);
		});
	};
	const FetchSharedData = async () => {
		const url = `https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=vRaxuZ0cD8TeSiHfif17niUJrP8fN5aS`;
		axios(url).then((response) => {
			setMostSharedArticle([...response.data.results]);
		});
	};
	useEffect(() => {
		FetchEmailedData();
		FetchSharedData();
		FetchViewedData();
	}, []);
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div>
					<div
						style={{
							fontSize: "30px",
							fontWeight: 700,
							alignItems: "flex-start",
						}}
					>
						Most Emailed Article
					</div>
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
				<div>
					<div
						style={{
							fontSize: "30px",
							fontWeight: 700,
							alignItems: "flex-start",
						}}
					>
						Most Shared Article
					</div>
					{mostSharedArticle?.map((element, index) => {
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
				<div>
					<div
						style={{
							fontSize: "30px",
							fontWeight: 700,
							alignItems: "flex-start",
						}}
					>
						Most Viewed Article
					</div>
					{mostViewedArticle?.map((element, index) => {
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
			</div>
		</div>
	);
};
export default ArticleHomePage;
