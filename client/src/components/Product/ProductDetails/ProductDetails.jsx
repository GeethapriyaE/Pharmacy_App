
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, LinearProgress } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { general_medicine } from '../../general_medicine';
import HomeSectionCard from '../../HomeSectionCard';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Header';
import { findProductById } from "../../../Redux/Admin/Product/Action";
import { addItemToCart } from "../../../Redux/Customers/Cart/Action";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Productdetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddtoCart = () => {
        const productId = adminsProduct.product._id;
        const userId = adminsProduct.product.user;
        const jwt = localStorage.getItem("jwt");
        dispatch(addItemToCart({ productId, userId, jwt }));

        navigate("/cart");
    }
    const { adminsProduct } = useSelector((store) => store);
    const { productId } = useParams();

    useEffect(() => {
        dispatch(findProductById({ productId }));
    }, [dispatch, productId]);
    // Check if adminsProduct.product is undefined
    if (!adminsProduct.product) {
        return <div>Loading...</div>;
    }

    // Destructure properties after checking for existence
    const { title, description, imageUrl,brand,price,discountedPrice,
        discountPersent, highlights, details } = adminsProduct.product;
    return (
        <div>
            <div className="bg-white lg:px-10">
                <div className="pt-6">
                    {/* <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav> */}
                    <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 '>
                        {/* Image gallery */}
                        <div className="flex flex-col items-center">
                            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                                <img
                                    src={imageUrl}
                                    alt=" "
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-wrap space-x-5 justify-center">

                            </div>

                        </div>
                        {/* Product info */}
                        <div className="lg:col-span-1 max-auto maw-wi2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                            <div className="lg:col-span-2 ">
                                <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{title}</h1>
                                <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
                                    {brand}
                                </h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                    <p className='font-semibold'>
                                        {discountedPrice}
                                    </p>
                                    <p className='opacity-50  line-through'>{price}</p>
                                    <p className='text-green-600 font-semibold'>{discountPersent} % off</p>
                                </div>


                                {/* Reviews */}
                                <div className="mt-6">
                                    <div className='flex items-center space-x-3 '>
                                        <Rating name="read-only" value={5.5} readOnly />
                                        <p className='opacity-50 text-sm '>56540 Ratings</p>
                                        <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
                                    </div>

                                </div>

                                <form className="mt-10">
                                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                        {/* Description and details */}
                                        <div>
                                            <h3 className="sr-only">Description</h3>

                                            <div className="space-y-6">
                                                <p className="text-base text-gray-900">{description}</p>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                            <div className="mt-4">
                                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                    {/* {highlights.map((highlight) => (
                                                        <li key={highlight} className="text-gray-400">
                                                            <span className="text-gray-600">{highlight}</span>
                                                        </li>
                                                    ))} */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                            <div className="mt-4 space-y-6">
                                                <p className="text-sm text-gray-600">{details}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={handleAddtoCart} color="secondary" variant="contained" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                                        Add to Cart
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* rating and reviews */}
                    <section >
                        <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating</h1>
                        <div className="border p-5">
                            <Grid container spacing={7}>
                                <Grid item xs={7}>
                                    <div className='space-y-5'>
                                        {[1, 2, 3].map((item, index) => <ProductReviewCard key={index} />)}
                                    </div>
                                </Grid>

                                <Grid item xs={5}>
                                    <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
                                    <div className='flex items-center space-x-3'>
                                        <Rating name='read-only' value={4.6} precision={.5} readOnly />
                                        <p className='opacity-60'>56899 Ratings</p>
                                    </div>
                                    <Box className='mt-5 space-y-3'>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={2}>
                                                <p>Excellent</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={40} color="success" />
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={2}>
                                                <p>Very Good</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={30} color="success" />
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={2}>
                                                <p>Good</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "yellow" }} variant="determinate" value={25} />
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={2}>
                                                <p>Average</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={20} color="warning" />
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" gap={2}>
                                            <Grid item xs={2}>
                                                <p>Poor</p>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={15} color="error" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>

                            </Grid>
                        </div>
                    </section>


                </div>
            </div>
            {/* similar products */}
            < h1 className="text-xl font-bold pt-5 px-2">Similar Products</h1>
            <div className="flex space-x-2">
                {general_medicine.map((item) => <HomeSectionCard product={item} />)}
            </div>
        </div>

    )
}
