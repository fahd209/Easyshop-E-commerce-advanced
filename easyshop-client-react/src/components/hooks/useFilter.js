import React, { useCallback, useEffect, useState } from 'react'
import baseUrl from '../config/baseUrl';
import axios from 'axios';

const useFilter = () => {
    // filter state
    const [searchFilter, setSearchFilter] = useState({
        categoryId: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        color: undefined,
        sortId: undefined,
        search: undefined,
      });

      const [productsData, setProductData] = useState([{}]);

      // handling filter change
      const handleSearchFilterChange = useCallback((e) => {
        const { name, value } = e.target;
        setSearchFilter(prevValue => ({
            ...prevValue,
            [name]: value,
        }));
    }, []);

      const handlePriceRange = (minPrice, maxPrice) => {
        setSearchFilter(prevValue => (console.log(prevValue), {
            ...prevValue,
            minPrice: Number(minPrice),
            maxPrice: Number(maxPrice),
        }))
      }

      // building query string
      const buildQueryString = () => {
        let queryString = "";
        if(searchFilter.categoryId && searchFilter.categoryId !== 'All'){ queryString = `cat=${searchFilter.categoryId}`; }
            if(searchFilter.minPrice) // if minPrice exist and it to queryString
            {
                const minP = `minPrice=${searchFilter.minPrice}`;
                if(queryString.length>0) {   queryString += `&${minP}`; } // if the queryString is greater then 0 and a & before minPrice
                else { queryString = minP; }
            }
            if(searchFilter.maxPrice)
            {
                const maxP = `maxPrice=${searchFilter.maxPrice}`;
                if(queryString.length>0) {   queryString += `&${maxP}`; }
                else { queryString = maxP; }
            }
            if(searchFilter.color && searchFilter.color !== 'All')
            {
                const col = `color=${searchFilter.color}`;
                if(queryString.length>0) {   queryString += `&${col}`; }
                else { queryString = col; }
            }

        return queryString.length > 0 ? `?${queryString}` : '';
      }

      useEffect(() => {
        console.log(searchFilter)
        const url = `${baseUrl}/products${buildQueryString()}`
        axios.get(url)
          .then(res => {
            console.log(res.data)
            setProductData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }, [searchFilter])

      // building query string

      // get request

    return { searchFilter, handleSearchFilterChange, handlePriceRange, productsData };
}

export default useFilter
