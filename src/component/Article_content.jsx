import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar_header from './Navbar_header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Progress } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Article_content() {
  const { id } = useParams()
  const [News, setNews] = useState([])
  const [loading,isloading] = useState(true)

  async function get_News() {
    const Get_new = await axios.get(`https://next-sample-api-roan.vercel.app/api/sample/thai/news/20`)
    return Get_new.data.results


  }
  useEffect(() => {
    async function fetchData() {
      const data = await get_News();
      const content = data[id]
      setNews(content);
      isloading(false)
    }

    fetchData();
  }, []);

  console.log(News)
 
  return (
    <>
      <Navbar_header />
    
      <main className="container mx-auto mt-1">
     
        <div className=" max-w-screen-xl lg:py-8 grid grid-cols-1 py-8 mx-auto">
        {loading?<Progress size='xs' isIndeterminate />:
            <div className="w-full md:w-8/12 px-4 mb-8">
              <h2 className="text-2xl font-bold mt-4 mb-5">{News.title}</h2>

              <img
                src={News.img_link}
                alt="Featured Image"
                className="w-full h-64 object-cover rounded mb-5"
              />
            <Link to={News.url} target='_blank'><h2 className=' text-blue-300 hover:text-red-500 mb-1'>ที่มา : {News.url}</h2></Link>
              <text style={{ whiteSpace: "pre-line" }} className="text-gray-700 mb-4 text-sm">
              {News.detail}
              </text>

            </div>
   

}
        </div>
  
      </main>
    

    </>
  )

}
