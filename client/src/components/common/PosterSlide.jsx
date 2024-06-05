import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import AutoSwiper from "./AutoSwiper";

// Define the PosterSlide component
const PosterSlide = ({ posters }) => {
  return (
    <AutoSwiper>
      {/* Iterate over the first 10 posters */}
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              paddingTop: "160%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`
            }}
          />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;