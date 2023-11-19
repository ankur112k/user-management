import React ,{ useEffect , useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {

    const [data , setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/team/')
            const json = await response.json()

            if(response.ok) {
                setData(json)
            }
        }
        fetchData() 
    },[])
  return (
    <>
        <Navbar />
        {data && data.map((post) => (
            <Card key={post.id} post={post}/>
                // <div key={post.id}>{post.title}</div>
        ))}
    </>
  )
}

export default Home