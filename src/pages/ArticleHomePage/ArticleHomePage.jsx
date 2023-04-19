import React, { useEffect, useState } from "react";
import Navbar from "./Componenets/Navbar";
import ThumbnailNews from "./Componenets/ThumbnailNews";

import axios from "axios";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const StyledDiv = styled.div`
	font-size: 30px;
	font-weight: 700;
	align-items: flex-start;
	margin-bottom: 3vw;
`;
const ArticleHomePage = () => {
	const navigate = useNavigate();

	const [userCoins, setUserCoins] = useState(100000);
	const [userSpent, setUserSpent] = useState(0);
	const [mostEmailedArticle, setMostEmailedArticle] = useState([]);
	const [mostSharedArticle, setMostSharedArticle] = useState([]);
	const [mostViewedArticle, setMostViewedArticle] = useState([]);

	const FetchEmailedData = async () => {
		const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=vRaxuZ0cD8TeSiHfif17niUJrP8fN5aS`;
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

	const handleUserBought = () => {
		setUserCoins(userCoins - userSpent);
	};
	const handleBuy = (price, title, image) => {
		setUserSpent(price);
		navigate(`/summary?title=${title}&price=${userSpent}`);
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
					<StyledDiv>Most Emailed Article</StyledDiv>
					{mostEmailedArticle?.map((element, index) => {
						const media = element?.media?.[0]?.["media-metadata"];
						return (
							<ThumbnailNews
								key={index}
								publishDate={element.published_date}
								image={media?.[0].url}
								title={element.title}
								abstract={element.abstract}
								source={element.source}
								url={element.url}
								handleBuy={handleBuy}
							/>
						);
					})}
				</div>
				<div>
					<StyledDiv>Most Shared Article</StyledDiv>
					{mostSharedArticle?.map((element, index) => {
						const media = element?.media?.[0]?.["media-metadata"];
						return (
							<ThumbnailNews
								key={index}
								image={media?.[0].url}
								publishDate={element.published_date}
								title={element.title}
								abstract={element.abstract}
								source={element.source}
								url={element.url}
								handleBuy={handleBuy}
							/>
						);
					})}
				</div>
				<div>
					<StyledDiv>Most Viewed Article</StyledDiv>
					{mostViewedArticle?.map((element, index) => {
						const media = element?.media?.[0]?.["media-metadata"];
						return (
							<ThumbnailNews
								key={index}
								image={media?.[0].url}
								title={element.title}
								publishDate={element.published_date}
								abstract={element.abstract}
								source={element.source}
								url={element.url}
								handleBuy={handleBuy}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default ArticleHomePage;
