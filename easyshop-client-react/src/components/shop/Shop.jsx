import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState, useRef  } from 'react'
import Filter from './Filter'
import SearchBar from './SearchBar'
import FilterDrawer from './FilterDrawer'
import './Shop.css'
import TuneIcon from '@mui/icons-material/Tune';
import Tooltip from '@mui/material/Tooltip';
import ProductsCard from './ProductsCard';
import baseUrl from '../config/baseUrl';
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { useMessage } from '../alerts/MessageContext'
import useFilter from '../hooks/useFilter'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Shop = () => {
  const inputRef = useRef();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { handleSearchFilterChange, handlePriceRange, searchFilter, productsData } = useFilter(); // using custom hook
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { currentUser } = useAuth()
  const { displayMessage } = useMessage()

  const toggleDrawer = () => { // sets usestate the oppsite of what it is
    setIsDrawerOpen(!isDrawerOpen)
  }

  // grid styles
  const gridSyle = {
    height: '100%',
    marginTop: isSmall ? '56px' : '64px',
    backgroundColor: '#C0C0C0',
    fontFamily: 'Roboto, sans-serif'
  }

  const headerGrid = {
    height: '10vh',
    width: '100%',
    borderBottom: '1px solid white',
    backgroundColor: '#063970',
    color: 'white'
  }

  const deskTopProductGrid = {
    height: '100vh',
    display: 'flex',
    overflow: 'auto'
  }

  const productContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px'
  }

  const mobileProductGrid = {
    height: '90vh',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'auto',
    gap: '5px'
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
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
      // vertical padding + font size from searchIcon
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

  // products get request
  // useEffect(() => {
  //     const url = `${baseUrl}/products`
  //           axios.get(url)
  //           .then(response => {
  //             setProductData(response.data)
  //           })
  //           .catch(error => {
  //             console.log("failed to get data");
  //           })
  // }, [])

  const handleAddToCart = (id) => {
    const url = `${baseUrl}/cart/products/${id}`;
    axios.post(url, {}, {
      headers: { // passing the current user token every time the req is called
              'Authorization': `Bearer ${currentUser.token}`,
            },
    })
    .then(resonse => {
      console.log(resonse.data);
      displayMessage("Product added to cart", "success")
    })
    .catch(err => {
      displayMessage("Failed to add product to cart", "error")
    })
  }


  const handleFilterChange = () =>{

  }
  return (
    <Grid container spacing={2}  sx={gridSyle}>
      {/* removes side grid and renders drawer inside if the screen is small */}
      {/* Mobile screen */}
      {isMedium ? (
        <> 
          <Grid sx={headerGrid} >

              <div  className='shop-header'>
                  <Tooltip title='Toggle Filter' >
                    <Button onClick={toggleDrawer}  variant="contained">
                    <TuneIcon
                        sx={{color: 'white'}}
                      />
                    </Button>
                  </Tooltip>
              </div>

            </Grid>
            <Grid item xs={12} sx={mobileProductGrid}>

              <FilterDrawer 
                open={isDrawerOpen} 
                onClose={toggleDrawer}
                handleSearchFilterChange={handleSearchFilterChange} // passing function into the filter
                handlePriceRange={handlePriceRange}
              />
              {
                productsData.map((product, index) => (
                  <ProductsCard 
                    key={product.productId}
                    id={product.productId}
                    categoryId={product.categoryId}
                    price={product.price}
                    productName={product.name}
                    stock={product.stock}
                    imageUrl={product.imageUrl}
                    quantity={product.stock}
                    onAddToCart={handleAddToCart}
                    className="product-card" />
                ))
              }
            </Grid>
        </>
        // Desktop screen 
      ) : ( 
        
        <>
          <Grid sx={headerGrid} >

            <div className='shop-header'>
              <h1>Products</h1>
            </div>

          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: '#063970',
           height: '100vh',
            borderRight: '1px solid white',
             display: 'flex',
              justifyContent: 'center' }}>

            <Filter
              handleSearchFilterChange={handleSearchFilterChange} // passing function into the filter
              handlePriceRange={handlePriceRange}
             /> {/* products filter */}
          </Grid>
          <Grid item xs={9} sx={deskTopProductGrid}>
            <div style={productContainer}>
            {/* mapping the data to a product card */}

              {
                productsData.map((product, index) => (
                  <ProductsCard 
                    key={product.productId}
                    id={product.productId}
                    categoryId={product.categoryId}
                    price={product.price}
                    productName={product.name}
                    stock={product.stock}
                    imageUrl={product.imageUrl}
                    quantity={product.stock}
                    onAddToCart={handleAddToCart}
                    className="product-card" />
                ))
              }
            </div>
          </Grid>
        </>
        )}
    </Grid>
  )
}
export default Shop
