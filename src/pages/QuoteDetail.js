import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "Q1", author: "Parker", text: "Learning is fun" },
  { id: "Q2", author: "Aven", text: "Learning is great" },
  { id: "Q3", author: "Faner", text: "Learning is greater fun" },
  { id: "Q4", author: "Parker", text: "Learning NodeJs" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log( match)

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
