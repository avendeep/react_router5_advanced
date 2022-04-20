import { useHistory } from "react-router-dom";
import Quoteform from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
      history.push('/quotes')
  };

  return <Quoteform onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
