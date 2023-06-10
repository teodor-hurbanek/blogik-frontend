import axios from 'axios'
import { useState, useEffect } from 'react'

export const useAxiosGet = <T,>(url: string) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAllData = async () => {
      try {
        setIsLoading(true)
        const { data: response } = await axios.get(url)
        setData(response)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getAllData()
  }, [])

  return { data, error, isLoading }
}

export default useAxiosGet
