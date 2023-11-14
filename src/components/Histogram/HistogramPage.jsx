import HistogramBlock from "./HistogramResultat/HistogramBlock.jsx";



const HistogramPage = () => {
    return(
        <RequireAuth>
            <HistogramBlock />
        </RequireAuth>
    )
}

export default HistogramPage;