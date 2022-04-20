import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'Q1', author:'Parker', text:'Learning is fun'},
    {id: 'Q2', author:'Aven', text:'Learning is great'},
    {id: 'Q3', author:'Faner', text:'Learning is greater fun'},
    {id: 'Q4', author:'Parker', text:'Learning NodeJs'},
]

const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;