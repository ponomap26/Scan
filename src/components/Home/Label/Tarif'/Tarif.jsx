// import React from "react"
// import "./Tarif.css";
//
// import Title from "../../title/Title";
// import TariffCard from "./TarrifCard";
//
// const TariffCard = [
//     {
//         color: "#FFB64F",
//         title: "Beginner",
//         titleDesc: "Для небольшого исследования",
//         imgName: "card1",
//         isCurrent: true,
//         price: 799,
//         oldPrice: 1200,
//         installments: 150,
//         includesArr: [
//             "Безлимитная история запросов",
//             "Безопасная сделка",
//             "Поддержка 24/7"
//         ],
//     },
//     {
//         color: "#7CE3E1",
//         title: "Pro",
//         titleDesc: "Для небольшого исследования",
//         imgName: "card2",
//         price: 1299,
//         oldPrice: 2600,
//         installments: 279,
//         includesArr: [
//             "Все пункты тарифа Beginner",
//             "Экспорт истории",
//             "Рекомендации по приоритетам"
//         ],
//     },
//     {
//         color: "#000000",
//         headerTextColor: "#ffffff",
//         title: "Business",
//         titleDesc: "Для корпоративных клиентов",
//         imgName: "card3",
//         price: 2379,
//         oldPrice: 3700,
//         includesArr: [
//             "Все пункты тарифа Pro",
//             "Безлимитное количество запросов",
//             "Приоритетная поддержка"
//         ],
//     }
// ]
//
// function TariffsBlock() {
//     return(
//         <div className="tariffsblock">
//             <div className="wrapper">
//                 <Title
//                     type="h2"
//                     fontSize="45px"
//                     lineHeight="54px"
//                 >наши тарифы</Title>
//                 <div className="cards">
//                     {
//                         TariffCard.map((card) => {
//                             return(
//                                 <TariffCard
//                                 color={card.color}
//                                 title={card.title}
//                                 titleDesc={card.titleDesc}
//                                 imgName={card.imgName}
//                                 isCurrent={card.isCurrent}
//                                 price={card.price}
//                                 oldPrice={card.oldPrice}
//                                 installments={card.installments}
//                                 includesArr={card.includesArr}
//                                 headerTextColor={card.headerTextColor}
//                             />
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default  TariffsBlock;
