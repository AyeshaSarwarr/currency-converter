import { useState, useEffect } from "react";

export function useCurrencyChanger(initialCurrency, convertedCurrency) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRate() {
            try {
                const res = await fetch(
                    `https://hexarate.paikama.co/api/rates/${initialCurrency}/${convertedCurrency}/latest`
                );

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const json = await res.json();
                setData(json?.data?.mid);
            } catch (err) {
                console.error("Error occurred:", err);
                setError(err.message);
            }
        }

        fetchRate();
    }, [initialCurrency, convertedCurrency]);

    return { data, error };
}
