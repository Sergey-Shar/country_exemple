import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {

 const [response, setResponse] = useState<T[]>([])
 
 const [error, setError] = useState<unknown>(null)

 const fetchData = useCallback( async () => {
  try {
   const response = await axios.get(url)
   setResponse(response.data)
   
  } catch (error) {
   setError(error)
  }
 
 },[url])
 
 useEffect(() => {
  fetchData()
 }, [fetchData])

 return {
		response,
		error,
		setResponse
	}
}