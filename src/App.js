import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ArticleHomePage from "./pages/ArticleHomePage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
	return (
		<Router>
			<div className="App">
				<ArticleHomePage />
			</div>
			<Routes>
				<Route path="/" exact component={ArticleHomePage} />
				<Route path="/summary" component={SummaryPage} />
			</Routes>
		</Router>
	);
}

export default App;
