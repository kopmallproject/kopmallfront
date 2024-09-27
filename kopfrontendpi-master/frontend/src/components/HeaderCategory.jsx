import { Apple, Lamp, Laptop, Smartphone } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import { listCategories } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import {Link, useParams } from 'react-router-dom'

const HeaderCategory = () => {
    const dispatch = useDispatch()
    const categoryList = useSelector((state) => state.categoryList);
    const {error, loading, categories} = categoryList

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch])


  return (
    <>
        
            
        {
            loading ? (<Loader />) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <div className="bg-[#FAF7F7] w-[100%]  px-4 flex flex-col gap-2">
                    {categories.map(cat => (
                        <Link key={cat.id} className="flex flex-row gap-2 no-underline text-[#000000]" to={`/store/${cat.id}`}>
                            
                            <Smartphone />
                            <span>{cat.name}</span>
                            
                        </Link>
                    ))}
                </div>
            )
        }
    </>
  )
}

export default HeaderCategory