import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import liveStock from '../../img/livestock (1).png'
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  marginRight: theme.spacing(1),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavLinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  marginLeft: '80px',  
  fontSize: '1rem',
  fontFamily: "'Roboto', sans-serif",
  position: 'relative',
  '&:hover::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottom: `2px solid white`,
  },
}));

export default function SearchAppBar() {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img width={'60px'} src={liveStock} alt="" onClick={() => navigate('/')} />
          </IconButton>
          <Typography
  variant="h4"
  noWrap
  component="div"
  onClick={() => navigate('/')}
  sx={{ cursor: 'pointer', fontFamily: 'Euclid Circular, sans-serif', fontWeight: '700' }}
>
  GrazeMind
</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <NavLinkStyled to="/productlist">Наш продукт</NavLinkStyled>
            <NavLinkStyled to="/about">Об устройстве</NavLinkStyled>
            <NavLinkStyled to="/payments">Оплата</NavLinkStyled>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
