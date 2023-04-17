import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ArticleHomePage from "./pages/ArticleHomePage";
import ArticleDetailtPage from "./pages/ArticleDetail/ArticleDetailPage";
import SummaryPage from "./pages/SummaaryPage/SummaryPage";

function App() {
	return (
		<Router>
			<div className="App">
				<ArticleHomePage />
			</div>
			<Routes>
				<Route path="/" exact component={ArticleHomePage} />
				<Route path="/detail" component={ArticleDetailtPage} />
				<Route path="/summary" component={SummaryPage} />
			</Routes>
		</Router>
	);
}

export default App;
