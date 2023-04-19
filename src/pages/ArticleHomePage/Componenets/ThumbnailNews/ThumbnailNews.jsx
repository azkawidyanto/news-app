import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
const StyledDiv = styled.div`
	border: 5px solid;
	width: 18vw;
	padding: 2vw;
	height: 35vw;
	margin: 0vw 5vw 5vw;
`;
const StyledContainer = styled.div`
	height: 5vw;
	width: 15vw;
	padding: 2vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledImage = styled.img`
	height: 10vw;
`;
const StyledTypography = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;
const Button = styled.button`
	background-color: #fffff;
	color: #00000;
	width: 7vw;
	padding: 1vw;
	font-size: 16px;
`;
const ThumbnailNews = ({
	image,
	title,
	abstract,
	source,
	handleBuy,
	publishDate,
}) => {
	const [price, setPrice] = useState(0);
	const setArticlePrice = (publishDate) => {
		let date_1 = new Date(publishDate);
		let date_2 = new Date();
		let difference = date_2.getTime() - date_1.getTime();
		var Difference_In_Days = Math.floor(difference / (1000 * 3600 * 24));
		if (Difference_In_Days <= 1) {
			setPrice(50000);
		}
		if (Difference_In_Days > 1 && Difference_In_Days <= 7) {
			setPrice(20000);
		}
		if (Difference_In_Days > 7) {
			setPrice(0);
		}
	};
	useEffect(() => {
		setArticlePrice(publishDate);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<StyledDiv>
			<StyledContainer>
				{image && <StyledImage src={image} alt={source} />}
				<StyledTypography>
					<StyledContainer style={{ fontWeight: 700, fontSize: "18px" }}>
						{title}
					</StyledContainer>
					<StyledContainer style={{ fontWeight: 700, fontSize: "14px" }}>
						{abstract}
					</StyledContainer>
				</StyledTypography>
				<StyledContainer>{`Price ${price}`}</StyledContainer>
				<Button onClick={() => handleBuy(price)}>Buy Article</Button>
			</StyledContainer>
		</StyledDiv>
	);
};

export default ThumbnailNews;
