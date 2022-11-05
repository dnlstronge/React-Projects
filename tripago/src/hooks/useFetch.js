import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            fetchData() //invokes function to fetch data
        }
    }, [url])
// not always possible but this time I can define the function
//inside useeffect, avoiding the previous inf loop issue.
}

// a function within a function can be async - this is why this works
// function needs to be invoked in order to fetch the data
export default useFetch;