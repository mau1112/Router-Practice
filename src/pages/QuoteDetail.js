import Comments from "../components/comments/Comments";
import { useParams, Route, Link, useLocation, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const Quotes = (props) => {
  const match = useRouteMatch();
  console.log(match)
  let { quoteId } = useParams();
  const location = useLocation();
  const quote = props.data.find((val) => val.id === quoteId);
  if (!quote) {
    return <h1>No quote found with that id</h1>;
  }
  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>

      {location.pathname === `${match.url}` ? (
        <Link to={`${match.url}/comments`}>See coments</Link>
      ) : null}
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default Quotes;
