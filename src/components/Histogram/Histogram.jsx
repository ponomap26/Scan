// import React from "react";
// import {Info} from "../Date/Data.jsx;
//
//
// const Histogram = () => {
//   const { data, responseData } = Info();
//
//   return (
//     <div className="display">
//       <h1>Data from API</h1>
//       {responseData ? (
//         <div className="data">
//           <p>INN: {data.inn}</p>
//           <p>Tone: {data.tone}</p>
//           <p>Fullness: {data.fullness ? "Yes" : "No"}</p>
//           <p>Business: {data.business ? "Yes" : "No"}</p>
//           <p>Main Role: {data.mainRole ? "Yes" : "No"}</p>
//           <p>Announcements: {data.announcements ? "Yes" : "No"}</p>
//           <p>Risk Factors: {data.riskFactors ? "Yes" : "No"}</p>
//           <p>Technical News: {data.technicalNews ? "Yes" : "No"}</p>
//           <p>Summaries: {data.summaries ? "Yes" : "No"}</p>
//           <p>Limit: {data.limit}</p>
//           <p>Start Date: {data.startDate}</p>
//           <p>End Date: {data.endDate}</p>
//
//         </div>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };
//
// export default Histogram;