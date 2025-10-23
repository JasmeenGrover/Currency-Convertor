import {useState , useEffect} from 'react';

// custom hook
function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) //converts string to json
        .then((res) => setData(res[currency])) //store JSON data
        console.log(data);
    },[currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;