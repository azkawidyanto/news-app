import styled from "@emotion/styled";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledTypography = styled.div`
	font-size: 16px;
`;

const Button = styled.button`
	background-color: #fffff;
	color: #00000;
	width: 7vw;
	padding: 1vw;
	font-size: 16px;
`;
const SummaryPage = ({ price, title, setUserCoins }) => {
	return (
		<StyledContainer>
			<StyledBodyContainer>
				<StyledTypography>{`Title: ${title}`}</StyledTypography>
				<StyledTypography>{`price: ${price}`}</StyledTypography>
				<Button onClick={setUserCoins}>Buy</Button>
			</StyledBodyContainer>
		</StyledContainer>
	);
};
export default SummaryPage;
