import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {

        }
    }, [])
// not always possible but this time I can define the function
//inside useeffect, avoiding the previous inf loop issue.
}
export default useFetch;