import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/0cbb9f01dbda35cd12669109/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                console.log("API Response:", res.conversion_rates);
                setData(res.conversion_rates);
            })
            .catch((err) => console.error("Error fetching currency data:", err));
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
