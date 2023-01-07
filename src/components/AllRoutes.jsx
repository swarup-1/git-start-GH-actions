import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../Pages/All'
import CSS from '../Pages/CSS'
import HTML from '../Pages/HTML'
import JavaScript from '../Pages/JavaScript'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<All />} />
            <Route path="/html" element={<HTML />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/javascript" element={<JavaScript />} />
        </Routes>
    </div>
  )
}

export default AllRoutes