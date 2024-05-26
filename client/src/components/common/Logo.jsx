import React from 'react';
import { Typography, useTheme } from '@mui/material';

const Logo = () => {
    const theme = useTheme();

    return (
        <Typography fontWeight="900" fontSize="1.9rem">
            Stream<span style={{ color: theme.palette.primary.main }}>It</span>
        </Typography>
    );
};

export default Logo;