import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Button, Image, Box, StackDivider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios'

export function Article() {

    const [article, set_article] = useState([])
    const [thainews, set_thainews] = useState([])

    async function get_article() {
        const articles = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/news/8')
        return articles.data.results


    }

    async function get_thainews() {
        const thainews = await axios.get(`https://newsapi.org/v2/top-headlines?country=th&apiKey=998063d57fdc42cc85b1183f6cefbbc1`)
        return thainews.data.articles


    }

    useEffect(() => {
        async function fetchArticle() {
            const data = await get_article();
            set_article(data);


        }
        async function fetch_thainews() {
            const thainews = await get_thainews()
            set_thainews(thainews)
        }
        fetchArticle()
        fetch_thainews()

    }
        , [])
    return (

        <>
            <div className="md:col-span-1 ">
                <Card>
                    <CardHeader>
                        <Heading size='md'>Thai News Daily</Heading>
                    </CardHeader>
                    {thainews.slice(0,10).map((thainew, index) => (



                        <CardBody>
                            <Stack key={index} divider={<StackDivider />} spacing='4'>
                                <Box>
                                    <Heading size='md' textTransform='uppercase'>
                                        {thainew.author}
                                    </Heading>
                                    <Text pt='2' fontSize='sm' className='font-bold' >
                                        วันที่ :{thainew.publishedAt}
                                        
                                    </Text>
                                    <Text pt='2'py='2' fontSize='md'>
                                        ข่าว : {thainew.title}
                                        
                                    </Text>
                                  
                                    
                                    <Button colorScheme='teal' size='xs'>
                                        
                                        <a href={thainew.url}target='_blank'>read more...</a>
                                        
                                    </Button>
                                </Box>
                            </Stack>
                        </CardBody>

                    ))}
                </Card>
            </div>



            <div className="md:col-span-1">
                <Card>

                    <CardHeader>
                        <Heading size='md'>Article </Heading>
                    </CardHeader>
                    {article.map((content, index) => (

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image 
                                objectFit='cover'
                                maxW={{ base: '100%', md: '200px' }}
                                src={content.img_link}
                               
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='sm'>{content.date}</Heading>
                                    <Text py='2' size='md'>
                                        {content.title}
                                      category :{content.category}
                                    </Text>
                                    <Button variant='solid' colorScheme='blue'>
                                        อ่านต่อ...
                                    </Button>
                                </CardBody>
                              
                            </Stack>
                        </Card>


                    ))}
                </Card>

            </div>



        </>
    )
}
