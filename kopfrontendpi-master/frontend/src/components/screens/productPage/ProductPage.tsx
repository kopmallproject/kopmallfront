import React, { useState, useEffect } from 'react';
import Header2 from '../../layouts/Header2';
import Footer from '../../layouts/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader';
import Message from '../../Message';
import Category from '../../Category';
import ProductCardiii from '../../ProductCardiii';
import { listProducts } from '../../../actions/productsActions';
import { AppDispatch } from '../../../store';

interface ProductPageParams {
  id: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const productsList = useSelector((state: AppDispatch) => state.productsList);
  const { error, loading, products } = productsList;

  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      dispatch(listProducts(id));
    }
  }, [dispatch, id]);

  const addToCartHandler = (id: number, qty: number): void => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
      {/* <Header2 /> */}

      <div className="h-[100%] mt-20 lg:px-28 px-[5%] flex gap-7">
        <Category />

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="card_wrapper w-[100%] lg:w-[80%] flex flex-row flex-wrap gap-3">
            {products.map((product: Product) => (
              <ProductCardiii key={product.id} data={product} addToCartHandler={() => addToCartHandler(product.id, 1)} />
            ))}
          </div>
        )}
      </div>
      

      <Footer />
    </>
  );
};

export default ProductPage;
