import { Fragment } from 'react';
import { useHistory , useLocation} from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortAsc = queryParams.get('sort') === 'asc'
  const changeSortingHandler = () =>{
    isSortAsc ? history.push(`${location.pathname}?sort=dsc`) : history.push(`${location.pathname}?sort=asc`);
    
  }
  const sortedQuotes = sortQuotes(props.quotes, isSortAsc)
  return (
    <Fragment>
      <div className={classes.sorting}> <button onClick={changeSortingHandler}>Sort { isSortAsc ? 'descending' : 'ascending'}</button></div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
