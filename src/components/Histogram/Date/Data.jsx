import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Data.css";
import {Button} from "react-bootstrap";


const Data = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        startDate: "",
        endDate: "",
        inn: "",
        tone: "any",
        fullness: false,
        business: null,
        mainRole: true,
        riskFactors: false,
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
        limit: 1000,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"]
    });
    const token = localStorage.getItem("token");
    // Create a function to handle the change of the input data
    // const handleChange = (e) => {
    //     // Get the name and value of the input field
    //     const {name, value} = e.target;
    //     // Set the data state with the updated value
    //     setData((prevData) => ({...prevData, [name]: value}));
    // };
    //
    // Create a function to handle the toggle of the checkbox data
    // const handleToggle = (e) => {
    //     // Get the name and checked status of the checkbox field
    //     const {name, checked} = e.target;
    //     // Set the data state with the updated status
    //     setData((prevData) => ({...prevData, [name]: checked}));
    // };

    // Create a function to submit the input data to the API
    const handleSubmit = async (e) => {
        // Prevent the default behavior of the form
        e.preventDefault();
        try {
            // Make a POST request with the URL and the data
            const res = await axios.post(
                "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
                {
                    issueDateInterval: {
                        startDate: data.startDate,
                        endDate: data.endDate
                    },
                    searchContext: {
                        targetSearchEntitiesContext: {
                            targetSearchEntities: [
                                {
                                    type: "company",
                                    sparkId: null,
                                    entityId: null,
                                    inn: data.inn,
                                    maxFullness: data.fullness,
                                    inBusinessNews: data.business
                                }
                            ],
                            onlyMainRole: data.mainRole,
                            tonality: data.tone,
                            onlyWithRiskFactors: data.riskFactors,
                            riskFactors: {
                                and: [],
                                or: [],
                                not: []
                            },
                            themes: {
                                and: [],
                                or: [],
                                not: []
                            }
                        },
                        themesFilter: {
                            and: [],
                            or: [],
                            not: []
                        }
                    },
                    searchArea: {
                        includedSources: [],
                        excludedSources: [],
                        includedSourceGroups: [],
                        excludedSourceGroups: []
                    },
                    attributeFilters: {
                        excludeTechNews: data.excludeTechNews,
                        excludeAnnouncements: data.excludeAnnouncements,
                        excludeDigests: data.excludeDigests
                    },
                    similarMode: "duplicates",
                    limit: data.limit,
                    sortType: data.sortType,
                    sortDirectionType: data.sortDirectionType,
                    intervalType: data.intervalType,
                    histogramTypes: data.histogramTypes
                },
                {headers: {Authorization: `Bearer ${token}`}}
            );
            // const Datas = [...response.data];
            console.log(res);
            // Сохранить данные в state переменную с помощью useState хука
            localStorage.setItem("results", JSON.stringify(res.data.data));


        } catch (error) {
            // Handle any errors
            console.error(error);
        }
        navigate("/histogram");
    };

    return (
        <main className="searchpage">
            <div className="wrapper">
                <div className="left-side">
                    <p>
                        Найдите необходимые данные в пару кликов.
                    </p>
                    <p>
                        Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="left-side">
                            <label htmlFor="inn">
                                ИНН компании
                                <input
                                    type="number"

                                    placeholder="10 цифр"


                                />
                            </label>

                            <label htmlFor="tonality">
                                Тональность
                                <select

                                    defaultValue="any"

                                >
                                    <option value="positive">Позитивная</option>
                                    <option value="negative">Негативная</option>
                                    <option value="any">Любая</option>
                                </select>
                            </label>
                            <label htmlFor="amount">
                                Количество документов в выдаче
                                <input
                                    type="number"

                                    min="1"
                                    max="1000"
                                    placeholder="От 1 до 1000"
                                />
                            </label>


                            <div className="range">
                                <label>Диапазон поиск</label>
                                <div className="range-inputs">
                                    <input
                                        type="text"

                                        placeholder="Дата начала"


                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                    />
                                    <input
                                        type="text"

                                        placeholder="Дата конца"


                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="right-side">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    id="maxsign"
                                    defaultChecked={true}


                                />
                                <label htmlFor="maxsign">Признак максимальной полноты</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"

                                    defaultChecked={true}


                                />
                                <label htmlFor="mentionbusiness">Упоминания в бизнес-контексте</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"

                                    defaultChecked={true}


                                />
                                <label htmlFor="mainrole">Главная роль в публикации</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"


                                />
                                <label htmlFor="riskonly">Публикации только с риск-факторами</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"


                                />
                                <label htmlFor="techmarketnews">Включать технические новости рынков</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    defaultChecked={true}


                                />
                                <label htmlFor="announces">Включать анонсы и календари</label>
                            </div>
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                />
                                <label htmlFor="newsbulletins">Включать сводки новостей</label>
                            </div>
                            <Button
                                type="submit"
                                stylization="primary"

                            >Поиск</Button>
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                    </form>
                </div>

            </div>
        </main>

    )
};

export default Data;
