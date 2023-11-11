import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "./Data.css";


const Data = () => {
    const navigate = useNavigate();
    // Create a state variable to store the input data
    const [data, setData] = useState({
        inn: "",
        tone: "any",
        fullness: false,
        business: false,
        mainRole: false,
        announcements: false,
        riskFactors: false,
        technicalNews: false,
        summaries: false,
        limit: 10,
        startDate: "",
        endDate: ""
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
           const response = await axios.post(
            "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
            data,
            {headers: {Authorization: `Bearer ${token}`}}
        );
            // Do something with the response data
            console.log(data)
            console.log(response.data);
            const Info = response.data
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
        // navigate("/histogram")
    };

    return (
        <div className="box">
            <div className="group">
                <div className="overlap">
                    <div className="div">
                        <div className="text-wrapper">ИНН компании</div>
                        <div className="overlap-group">
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
                        <div className="text-wrapper-3">*</div>
                    </div>
                    <div className="group-2">
                        <div className="text-wrapper-4">Тональность</div>
                        <div className="overlap-2">
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
                    <div className="group-3">
                        <div className="group-4">
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
                        <div className="group-5">
                            <div className="text-wrapper-6">Упоминания в бизнес-контексте</div>
                            <div className="icons-wrapper">
                                <input
                                    type="checkbox"
                                    id="business"
                                    name="business"
                                    checked={data.business.value}
                                    onChange={handleToggle}
                                />
                            </div>
                        </div>
                        <div className="group-6">
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
                        <div className="text-wrapper-6">Анонсы</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="announcements"
                                name="announcements"
                                checked={data.announcements.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                    <div className="group-8">
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
                    <div className="group-9">
                        <div className="text-wrapper-6">Технические новости</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="technicalNews"
                                name="technicalNews"
                                checked={data.technicalNews.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                    <div className="group-10">
                        <div className="text-wrapper-6">Сводки</div>
                        <div className="icons-wrapper">
                            <input
                                type="checkbox"
                                id="summaries"
                                name="summaries"
                                checked={data.summaries.value}
                                onChange={handleToggle}
                            />
                        </div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="text-wrapper-8">Количество новостей</div>
                    <div className="div-2">
                        <input
                            type="text"
                            id="limit"
                            name="limit"
                            value={data.limit.value}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="group-12">
                    <div className="text-wrapper-8">Начальная дата</div>
                    <div className="div-3">
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={data.startDate.value}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="group-13">
                    <div className="text-wrapper-8">Конечная дата</div>
                    <div className="div-4">
                        <input
                            type="datetime-local"
                            id="endDate"
                            name="endDate"
                            value={data.endDate.value}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className="submit-button" onClick={handleSubmit}>
                    Получить
                </button>
            </div>
        </div>
    );
};

export default Data;