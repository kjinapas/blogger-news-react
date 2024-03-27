import React from 'react'
import { Card, CardHeader, CardBody, Stack, Tag, Heading, Text, Button, Image, Box, StackDivider } from '@chakra-ui/react';
import axios from 'axios'

import { useState, useEffect } from 'react';
export default function () {

    const [News, setNews] = useState([])

    async function get_News() {
        const Get_new = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/article/8')
        return Get_new.data.results


    }
    useEffect(() => {
        async function fetchData() {
            const data = await get_News();
            setNews(data);
        }

        fetchData();
    }, []);
    // console.log(News)
    return (
        <div>
            <div className=" xl:col-span-1 md:col-span-1 ">
                <div className="bg-white shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4">บทความเก่า </h2>
                    <ul>
                        {News.map((news, index) => (


                            <li key={index}><a href="#" className="text-blue-600 hover:underline"></a>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                >
                                    <Image
                                        objectFit='cover'

                                        maxW={{ base: '100%', sm: '200px', }}
                                        src={news.image_url}

                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading py='1' size='md'>{news.title}</Heading>
                                            <Text py='1' size='sm'>
                                                {news.date}
                                            </Text>
                                            <Text py='2' size='sm'>
                                                ที่มา : {news.source}
                                            </Text>
                                            <Tag>{news.category} </Tag>

                                            <a href={news.url} target='_blank'>
                                                <Button colorScheme='teal' size='sm'>
                                                    อ่าน
                                                </Button>
                                            </a>


                                        </CardBody>
                                    </Stack>
                                </Card>

                            </li>

                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}
