import QuoteList from "../components/quotes/QuoteList";

const Quotes = (props) => {
  return <QuoteList quotes={props.data}></QuoteList>;
};

export default Quotes;
