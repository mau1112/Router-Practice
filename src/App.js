import { Route, Switch, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import { useState } from "react";
function App() {
  const [quoteData, setQuoteData] = useState([
    {
      id: (Math.random() + 1).toString(36).substring(7),
      author: "Mau",
      text: "esta bien chevere El riakt",
    },
    {
      id: (Math.random() + 1).toString(36).substring(7),
      author: "Mau",
      text: "Algun dia terminare el proyecto",
    },
  ]);

  return (
    <>
      <MainNavigation />
      <Layout>
        <Switch>
          <Route path="/quotes/:quoteId">
            <QuoteDetail data={quoteData}></QuoteDetail>
          </Route>
          <Route path="/quotes">
            <Quotes data={quoteData}></Quotes>
          </Route>
          <Route path="/new-quote">
            <NewQuote setQuoteData={setQuoteData} data={quoteData}></NewQuote>
          </Route>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
