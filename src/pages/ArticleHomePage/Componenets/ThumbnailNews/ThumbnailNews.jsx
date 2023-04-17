import styled from "@emotion/styled";
import React from "react";
const StyledDiv = styled.div`
	border: 5px solid;
	width: 90vw;
	height: 15w;
	margin: 5vw;
`;
const StyledContainer = styled.div`
	height: 2w;
	padding: 2vw;
	display: flex;
`;
const StyledImage = styled.img`
	height: 10vw;
`;
const StyledTypography = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;
const ThumbnailNews = ({ image, title, abstract, source, url }) => {
	const handleClick = () => {};
	return (
		<StyledDiv onClick={handleClick}>
			<StyledContainer>
				{image && <StyledImage src={image} alt={source} />}
				<StyledTypography>
					<StyledContainer>{title}</StyledContainer>
					<StyledContainer>{abstract}</StyledContainer>
				</StyledTypography>
			</StyledContainer>
		</StyledDiv>
	);
};

export default ThumbnailNews;
