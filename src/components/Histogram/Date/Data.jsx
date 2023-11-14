import React, { useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Data.css";


const Data = () => {
    const navigate = useNavigate();
    // Create a state variable to store the input data
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
    const handleChange = (e) => {
        // Get the name and value of the input field
        const {name, value} = e.target;
        // Set the data state with the updated value
        setData((prevData) => ({...prevData, [name]: value}));
    };

    // Create a function to handle the toggle of the checkbox data
    const handleToggle = (e) => {
        // Get the name and checked status of the checkbox field
        const {name, checked} = e.target;
        // Set the data state with the updated status
        setData((prevData) => ({...prevData, [name]: checked}));
    };

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

        <div className="box">
            <div className="group">
                <div className="overlap">
                    <div className="div">
                        <div className="text-wrapper">Начальная дата</div>
                        <div className="overlap-group">
                            <input
                                type="datetime-local"
                                id="startDate"
                                name="startDate"
                                value={data.startDate.value}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-wrapper-3">*</div>
                    </div>
                    <div className="group-2">
                        <div className="text-wrapper-4">Конечная дата</div>
                        <div className="overlap-2">
                            <input
                                type="datetime-local"
                                id="endDate"
                                name="endDate"
                                value={data.endDate.value}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="group-3">
                        <div className="group-4">
                            <div className="text-wrapper-6">ИНН компании</div>
                            <div className="icons-wrapper">
                                <input
                                    type="text"
                                    id="inn"
                                    name="inn"
                                    value={data.inn.value}
                                    onChange={handleChange}
                                    maxLength="10"
                                    placeholder="10 цифр"
                                />
                            </div>
                        </div>
                        <div className="group-5">
                            <div className="text-wrapper-6">Тональность</div>
                            <div className="icons-wrapper">
                                <select
                                    id="tone"
                                    name="tone"
                                    value={data.tone.value}
                                    onChange={handleChange}
                                >
                                    <option value="any">Любая</option>
                                    <option value="positive">Положительная</option>
                                    <option value="negative">Отрицательная</option>
                                    <option value="neutral">Нейтральная</option>
                                </select>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="text-wrapper-6">Признак максимальной полноты</div>
                            <div className="icons-wrapper">
                                <input
                                    type="checkbox"
                                    id="fullness"
                                    name="fullness"
                                    checked={data.fullness.value}
                                    onChange={handleToggle}
                                />
                            </div>
                        </div>
                        {/*<div className="text-wrapper-6">Упоминания в бизнес-контексте</div>*/}
                        {/*<div className="icons-wrapper">*/}
                        {/*    <input*/}
                        {/*        type="checkbox"*/}
                        {/*        id="business"*/}
                        {/*        name="business"*/}
                        {/*        checked={data.business.value}*/}
                        {/*        onChange={handleToggle}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-6">Главная роль в публикации</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="mainRole"
                                name="mainRole"
                                checked={data.mainRole.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-6">Риски</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="riskFactors"
                                name="riskFactors"
                                checked={data.riskFactors.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                    <div className="group-10">
                        <div className="text-wrapper-6">Технические новости</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="excludeTechNews"
                                name="excludeTechNews"
                                checked={data.excludeTechNews.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="text-wrapper-8">Анонсы</div>
                    <div className="icons-wrapper">
                        <input
                            type="checkbox"
                            id="excludeAnnouncements"
                            name="excludeAnnouncements"
                            checked={data.excludeAnnouncements.value}
                            onChange={handleToggle}
                        />
                    </div>
                </div>
                <div className="group-12">
                    <div className="text-wrapper-8">Сводки</div>
                    <div className="icons-wrapper">
                        <input
                            type="checkbox"
                            id="excludeDigests"
                            name="excludeDigests"
                            checked={data.excludeDigests.value}
                            onChange={handleToggle}
                        />
                    </div>
                </div>


                <button className="submit-button" onClick={handleSubmit}>
                    Получить
                </button>
            </div>
        </div>

    )
};

export default Data;
