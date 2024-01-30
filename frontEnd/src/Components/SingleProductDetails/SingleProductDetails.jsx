import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Button, IconButton, styled } from '@mui/material'
import  { useRef, useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import "./product-details.css";
import DetailsThumb from './DetailsThumb';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

function SingleProductDetails() {
  let { id } = useParams();
  // @ts-ignore
  const { SelectedProducts, selectedProductsID } = useSelector((state) => state.CartShop);
  // const { data} = useGetOneProductQuery(id);
  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // this.setState({index: index})
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };


  return (
    <Box>


    </Box>
  )
}

export default SingleProductDetails