import React,
{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar_header from './Navbar_header'
import { Button, Progress } from '@chakra-ui/react';
export default function All_blog() {


    const [News, setNews] = useState([])
    const [loading, isloading] = useState(true)

    const [isArticle, set_isArticle] = useState([])

    async function get_News() {
        const Get_new = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/article/20')
        return Get_new.data.results


    }
    async function get_Article() {
        const Get_new = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/News/20')
        return Get_new.data.results


    }
    useEffect(() => {
        async function fetchData() {

            const data = await get_News();
            const article_data = await get_Article()
            set_isArticle(article_data)
            setNews(data);
            isloading(false)
        }

        fetchData();
    }, []);
    return (
        <>
            <Navbar_header />
            {loading?<Progress size='xs' isIndeterminate />:
            <>
            <div className="max-w-screen-2xl lg:py-32 grid grid-cols-12 py-16 mx-auto">
                <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6">
                    {News.map((article, index) => (
                        <li key={index} className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">

                            <img

                                src={article.image_url}
                                className="w-full mb-4 rounded-lg shadow-none duration-500 ease-in-out group-hover:shadow-lg"
                                alt="laravel9-1646792144.jpg"
                            />
                            <div className="flex items-center mb-3">

                                <p className="font-mono text-xs font-normal opacity-75 text-black">
                                    {article.date}
                                </p>
                            </div>
                            <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                                <span className="link-underline link-underline-black text-black">
                                    {article.title}
                                </span>
                            </p>
                            <Link to={`/blog/${index}`} >
                                <Button colorScheme='teal' size='sm'>
                                    อ่าน
                                </Button>
                            </Link>


                        </li>
                    ))}

                    {isArticle.map((isarticle, index) => (
                        <li key={index} className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
                          
                                <img

                                    src={isarticle.img_link}
                                    className="w-full mb-4 rounded-lg shadow-none duration-500 ease-in-out group-hover:shadow-lg"
                                    alt="laravel9-1646792144.jpg"
                                />
                                <div className="flex items-center mb-3">

                                    <p className="font-mono text-xs font-normal opacity-75 text-black">
                                        {isarticle.date}
                                    </p>
                                </div>
                                <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                                    <span className="link-underline link-underline-black text-black">
                                        {isarticle.title}
                                    </span>
                                </p>
                                <Link to={`/article/${index}`} >
                                <Button colorScheme='teal' size='sm'>
                                    อ่าน
                                </Button>
                            </Link>
                      
                        </li>
                    ))}

                </ul>
            </div>
            </>
}

        </>
    )
}
