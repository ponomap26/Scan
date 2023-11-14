import React, {useEffect, useState} from "react"
import Datas from '../Date/Data.jsx'
import ResultsSimpleSlider from "../ResultHistogramSlider/ResultsSimpleSlider.jsx";


function HistogramBlock() {
    const [results, setResults] = useState("loading");
    const [totalResults, setTotalResults] = useState(0);
    const [loadedResults, setLoadedResults] = useState(false);
    const [loadedCards, setLoadedCards] = useState(false);
    const [cardsIds, setCardsIds] = useState([]);
    const [totalCards, setTotalCards] = useState(0);
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);


    useEffect(() => {
        window.scrollTo(0, 0);
        const results = JSON.parse(localStorage.getItem("results"));
        setResults(results);

        let counter = 0;
        results[0].data.forEach(element => {
            counter += element.value;
        });
        results[1].data.forEach(element => {
            counter += element.value;
        });
        setTotalResults(counter);


    }, []);
    console.log(results)

    // const searchPublications = async () => {
    //     const request = localStorage.getItem("request");
    //     const response = await axios.post("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms")


        return (
            <div>
               <div className="summary-block">
                    <title
                    >Общая сводка</title>
                    <p>Найдено {totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} вариантов</p>
                    <ResultsSimpleSlider results={results} />
                    {/*<MobileResultsSimpleSlider results={results} />*/}
                </div>
            </div>
        )
    }
    export default HistogramBlock