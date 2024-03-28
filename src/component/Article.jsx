import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Button, Image, Box, StackDivider,Tag} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Progress } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Article() {

    const [article, set_article] = useState([])
    const [showmore,showless] = useState(false)
    const [loading,isloading]  = useState(true)


    async function get_article() {
        const articles = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/thai/news/8')
        return articles.data.results


    }

    useEffect(() => {
        async function fetchArticle() {
            const data = await get_article();
            set_article(data);
            isloading(false)
        }
      
        fetchArticle()
      

    }
        , [])
    return (

        <>
            
            <div className="md:col-span-2">
          
                   
                <Card>
                 <CardHeader>
                        <Heading size='md'>Article </Heading>
                    </CardHeader>
                 
                    {loading?<Progress size='xs' isIndeterminate />:
                    
                  <>
                    {article.map((content, index) => (

                        <Card  key={index}
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
                                    <Tag className='mt-2'>{content.category}</Tag>
                                    <Text py='2' size='md' className=' font-bold'>
                                        {content.title}
                                    </Text>
                                  
                                    <div className='my-2 '>
                                    {showmore ? content.detail : `${content.detail.substring(0, 200)}  ...  `}
                                    <Button colorScheme='teal' size='sm'>
                                        <Link to={`article/${index}`}>อ่านต่อ</Link>
                                    </Button>
                              
                                    </div>
                                    
                                </CardBody>
                              
                            </Stack>
                        </Card>


                    ))}
                  </>
                   }
                </Card>
               
                  
            </div>



        </>
    )
}