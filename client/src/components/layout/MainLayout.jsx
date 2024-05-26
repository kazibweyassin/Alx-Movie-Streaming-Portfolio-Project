import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import Topbar from '../common/Topbar'
import GlobalLoading from '../common/GlobalLoading'



const MainLayout = () => {
    return (
        <>
                {/* <GLOBAL LOADING> */}
                <GlobalLoading />
                {/* <GLOBAL LOADING /> */}

                {/* <LOGIN MODAL> */}
                {/* </LOGIN MODAL> */}

                <Box  display={'flex'} minHeight={'100vh'}>
                    {/* <header> */}
                    <Topbar />
                    {/* <header /> */}

                    {/* <main> */}
                    <Box 
                    component= "main"
                    flexGrow={1}
                    overflow={'hidden'}
                    minHeight={'100vh'}
                    >
                        <Outlet />

                    </Box>

                    {/* </footer> */}
                    <Footer/>
                    
                </Box>
        </>
    )
}

export default MainLayout;