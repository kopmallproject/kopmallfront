import Product1 from '@/app/assets/images/img-10.png';
import Product2 from '@/app/assets/images/img-11.png';
import Product3 from '@/app/assets/images/img-12.png';
import Product4 from '@/app/assets/images/img-13.png';
import Product5 from '@/app/assets/images/img-14.png';
import Product6 from '@/app/assets/images/img-15.png';
import Product7 from '@/app/assets/images/img-16.png';
import Product8 from '@/app/assets/images/img-17.png';
import Product9 from '@/app/assets/images/img-18.png';
import Product10 from '@/app/assets/images/img-19.png';

export const products = [
  {
    productId: 'p1',
    productName: 'Wireless Bluetooth Earbuds',
    originalPrice: 49.99,
    discount: 10,
    discountedPrice: 44.99,
    rating: 3, // rounded from 4.5
    isLiked: true,
    productImage: Product1
  },
  {
    productId: 'p2',
    productName: 'Smart Fitness Watch',
    originalPrice: 99.99,
    discount: 15,
    discountedPrice: 84.99,
    rating: 4, // rounded from 4.2
    isLiked: false,
    productImage: Product2
  },
  {
    productId: 'p3',
    productName: 'Laptop Stand Adjustable',
    originalPrice: 29.99,
    discount: 5,
    discountedPrice: 28.49,
    rating: 2, // already a whole number
    isLiked: true,
    productImage: Product3
  },
  {
    productId: 'p4',
    productName: 'Portable Charger 10000mAh',
    originalPrice: 24.99,
    discount: 20,
    discountedPrice: 19.99,
    rating: 5, // rounded from 4.7
    isLiked: false,
    productImage: Product4
  },
  {
    productId: 'p5',
    productName: 'Wireless Mechanical Keyboard',
    originalPrice: 69.99,
    discount: 12,
    discountedPrice: 61.59,
    rating: 4, // rounded from 4.3
    isLiked: true,
    productImage: Product5
  },
  {
    productId: 'p6',
    productName: 'Noise Cancelling Headphones',
    originalPrice: 129.99,
    discount: 18,
    discountedPrice: 106.59,
    rating: 3, // rounded from 4.6
    isLiked: false,
    productImage: Product6
  },
  {
    productId: 'p7',
    productName: '4K Action Camera',
    originalPrice: 89.99,
    discount: 25,
    discountedPrice: 67.49,
    rating: 4, // rounded from 4.4
    isLiked: true,
    productImage: Product7
  },
  {
    productId: 'p8',
    productName: 'Smartphone Tripod Stand',
    originalPrice: 19.99,
    discount: 10,
    discountedPrice: 17.99,
    rating: 4, // rounded from 4.1
    isLiked: false,
    productImage: Product8
  },
  {
    productId: 'p9',
    productName: 'USB-C Hub Multiport Adapter',
    originalPrice: 34.99,
    discount: 15,
    discountedPrice: 29.74,
    rating: 4, // rounded from 4.3
    isLiked: true,
    productImage: Product9
  },
  {
    productId: 'p10',
    productName: 'Gaming Mouse RGB',
    originalPrice: 39.99,
    discount: 20,
    discountedPrice: 31.99,
    rating: 5, // rounded from 4.5
    isLiked: false,
    productImage: Product10
  },
  {
    productId: 'p11',
    productName: 'Portable LED Projector',
    originalPrice: 199.99,
    discount: 10,
    discountedPrice: 179.99,
    rating: 5, // rounded from 4.6
    isLiked: true,
    productImage: Product5
  },
  {
    productId: 'p12',
    productName: 'Wireless Charging Pad',
    originalPrice: 15.99,
    discount: 5,
    discountedPrice: 15.19,
    rating: 4, // rounded from 4.2
    isLiked: false,
    productImage: Product3
  }
];
