import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import { SimpleGrid, Box, Button, Flex } from '@chakra-ui/react'
const All = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [length,setLength]=useState(0)
    const [page,setPage]=useState(1);
    let getData = async ()=>{
        setLoading(true)
        await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&per_page=10&page=${page}`)
        .then((res)=>{
            setData(res.data.items)
            setLength(res.data.toal_count)
        })
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[page])
    // console.log('length:', length)
    if(loading){
        return <h1>Loding...</h1>
    }
  return (
    <div>
        <Button isDisabled={page===1} onClick={()=>{setPage(page-1)}} _hover={{bg:"#F6AD55"}} fontSize="30px"marginBottom="20px">-</Button>
        <Button m="0px 10px" marginBottom="20px" >Page No{page}</Button>
        <Button isDisabled={page===length} onClick={()=>{setPage(page+1)}} _hover={{bg:"#F6AD55"}} fontSize="30px"marginBottom="20px">+</Button>

        <SimpleGrid columns={{base:1, sm:2, md:4}} spacing={10} m="0px 50px" >
            {data.map((el)=>(
                <Box key={el.id} border="1px solid gray" p="20px 10px" style={{cursor:"pointer"}} onClick={()=>window.location.replace(el.html_url)} >
                    <h3>- Repository name <p style={{fontWeight:"900"}}>{el.name}</p></h3>
                    <h3>- Language {el.language}</h3>
                    <Flex justifyContent="space-between" >
                        <p>- Stars {el.stargazers_count}</p>
                        <p>- Forks {el.forks_count}</p>
                    </Flex>
                </Box>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default All