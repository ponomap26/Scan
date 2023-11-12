import React, {useContext} from "react";
import DataContext from "./DataContext";


const Histogram = () => {
 const info = useContext(DataContext);

  // Преобразовать объект info в массив
  const data = Object.entries(info).map(([date, values]) => ({
    date: date,
    totalDocuments: values.histogramTypes.totalDocuments,
    riskFactors: values.histogramTypes.riskFactors
  }));

  return (
    <div>
      <h2>Информация</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Documents</th>
              <th>Risk Factors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.totalDocuments}</td>
                <td>{item.riskFactors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Histogram;