import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ArticleHomePage from "./ArticleHomePage";
import { BrowserRouter } from "react-router-dom";

test("Article Home Page", () => {
	render(
		<BrowserRouter>
			<ArticleHomePage />
		</BrowserRouter>,
	);
	const most_emailed = screen.queryByText("Most Emailed Article");
	const most_shared = screen.queryByText("Most Shared Article");
	const most_viewed = screen.queryByText("Most Viewed Article");

	expect(most_emailed).toBeInTheDocument();
	expect(most_shared).toBeInTheDocument();
	expect(most_viewed).toBeInTheDocument();
});
