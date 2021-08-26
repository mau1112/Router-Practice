import QuoteForm from "../components/quotes/QuoteForm"
import {useHistory} from 'react-router-dom'
const NewQuote = props =>{
    const history = useHistory()
    const onAddQuote = (quoteObj) =>{
        history.push('/quotes')
        const newArray = [...props.data, {id:(Math.random() + 1).toString(36).substring(7), text:quoteObj.text, author: quoteObj.author }]
        props.setQuoteData(newArray)
        console.log(quoteObj)
        return
    }
    return <QuoteForm onAddQuote={onAddQuote}></QuoteForm>
}

export default NewQuote