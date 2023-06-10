import axios from 'axios'
import { useState, useEffect } from 'react'

export const useAxiosGetSingle = <T,>(url: string, id: number) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getSingleData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get<T>(url + id)
        setData(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getSingleData()
  }, [])

  return { data, error, isLoading }
}

export default useAxiosGetSingle
