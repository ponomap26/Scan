import React, {useEffect, useState} from "react";
import Datas from "../Date/DataHistogram.jsx";
import ResultsSimpleSlider, {formatData} from "../ResultHistogramSlider/HistogramSlider.jsx";
import "./HistogramBlock.css";
import HistogramCard from "./HisrtiogramCard";
import axios from "axios";
import {Button} from "react-bootstrap";

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

        searchPublications();
    }, []);

    useEffect(() => {
        setTotalCards(cardsIds.length);
    }, [cardsIds]);

    useEffect(() => {
        addCards();
    }, [totalCards]);

    const searchPublications = async () => {
        const request = localStorage.getItem("request");
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post("https://gateway.scan-interfax.ru/api/v1/objectsearch", request, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json" // Set the appropriate media type
                }
            });
            setCardsIds(response.data.items);
        } catch (err) {
            console.log(err);
        }
    }

    const addCards = async () => {
        const cardsArr = [...cards];
        let localIndex = index;
        if (totalCards !== 0) {
            for (let counter = 0; counter < 10; counter++) {
                if (localIndex < totalCards) {
                    try {
                        // const LOGIN_URL = "/documents";
                        const request = {
                            ids: [cardsIds[localIndex].encodedId]
                        };
                        const token = localStorage.getItem("token"); 
                        const response = await axios.post(
                            "https://gateway.scan-interfax.ru/api/v1/documents",
                            request,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        );
                        cardsArr.push(response.data[0].ok);
                        localIndex++;
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }
        setIndex(localIndex);
        setCards(cardsArr);
        setLoadedResults(true);
        setLoadedCards(true);
    };


    function formatDate(str) {
        let date = new Date(str);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        return day + "." + month + "." + year;
    }

    return (
        <main className="resultspage">
            <div className="wrapper">
                <div className="information-block">
                    <div className={loadedResults && loadedCards ? "left-side invisible" : "left-side"}>
                        <title

                        >Ищем. Скоро будут результаты</title>
                        <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    {/*<img src={mainImage} alt="" />*/}
                </div>
                <div className="summary-block">
                    <title

                    >Общая сводка</title>
                    <p>Найдено {totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} вариантов</p>
                    <ResultsSimpleSlider results={results}/>
                    {/*<MobileResultsSimpleSlider results={results} />*/}
                </div>
                <div className="resultsblock">
                    <title

                    >Список документов</title>
                    <div className="resultslist">
                        {
                            cards.map((item) => {
                                return <HistogramCard
                                    title={JSON.stringify(item.title.text).replaceAll('\\"', '"').slice(1).slice(0, -1)}
                                    issueDate={formatDate(item.issueDate)}
                                    sourceName={item.source.name}
                                    sourceURL={item.url}
                                    isTechNews={item.attributes.isTechNews}
                                    isAnnouncement={item.attributes.isAnnouncement}
                                    isDigest={item.attributes.isDigest}
                                    description={item.content.markup}
                                    wordCount={item.attributes.wordCount}
                                />
                            })
                        }
                        {
                            index < totalCards ?
                                <a href="#"
                                   onClick={async (e) => {
                                       e.preventDefault();
                                       addCards();
                                   }}
                                >
                                    <Button
                                        type="button"
                                        stylization="primary"
                                        disabled={false}
                                    >Показать больше</Button>
                                </a>
                                : null
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HistogramBlock