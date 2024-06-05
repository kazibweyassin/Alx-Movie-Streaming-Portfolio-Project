import React, { useEffect, useState } from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import fetchAfricanMovies from "../api/configs/fetchAfricanMovies";

const HomePage = () => {
  const [africanMovies, setAfricanMovies] = useState([]);

  useEffect(() => {
    const getAfricanMovies = async () => {
      const movies = await fetchAfricanMovies();
      setAfricanMovies(movies);
    };

    getAfricanMovies();
  }, []);

  return (
    <>
      {/* Hero Slide Section */}
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />

      {/* Main Content Section */}
      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        
        {/* Popular Movies */}
        <Container header="Popular Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        {/* African Movies */}
        <Container header="African Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} customMedia={africanMovies} />
        </Container>

        {/* Popular Series */}
        <Container header="Popular Series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        {/* Top Rated Movies */}
        <Container header="Top Rated Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

        {/* Top Rated Series */}
        <Container header="Top Rated Series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>
        
      </Box>
    </>
  );
};

export default HomePage;
