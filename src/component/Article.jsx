import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Button, Image, Box, StackDivider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios'

export function Article() {

    const [article, set_article] = useState([])


    async function get_article() {
        const articles = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/news/8')
        return articles.data.results


    }

   

    useEffect(() => {
        async function fetchArticle() {
            const data = await get_article();
            set_article(data);


        }
      
        fetchArticle()
      

    }
        , [])
    return (

        <>
            



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
