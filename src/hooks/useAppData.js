import axios from "axios"
import { useEffect, useState } from "react"

const useAppData = () => {
    const [appData, setAppData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get('../appData.json')
            .then(data => setAppData(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { appData, loading, error }
}

export default useAppData;