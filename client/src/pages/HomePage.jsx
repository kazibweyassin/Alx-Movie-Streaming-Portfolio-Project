import React from 'react'
import HeroSlide from '../components/common/HeroSlide'
import tmdbConfigs from "../api/configs/tmdb.configs"



const HomePage = () => {
  return (
    <>
    <HeroSlide meddiaType={tmdbConfigs.mediaType.movie} 
    mediaCategory={tmdbConfigs.mediaCategory.top_rated} 
    
    
    
    />
    </>
  )
}

export default HomePage;