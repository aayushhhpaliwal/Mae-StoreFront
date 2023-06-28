import { useEffect } from "react"
import check from "@/maestore";



export default function Home() {
  const message: string = "Bhai Bhai"
  useEffect (() => {
    check();
  }, [])
  return (
   <div>
    {message}
   </div>
  )
}
