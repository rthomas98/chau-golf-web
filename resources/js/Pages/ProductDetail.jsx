import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ProductHeader3 from '@/Components/ProductPage/ProductHeader3';
import Layout101 from '@/Components/ProductPage/Layout101';
import Testimonial4 from '@/Components/ProductPage/Testimonial4';
import CTA13 from '@/Components/ProductPage/CTA13';
import Product11 from '@/Components/ProductPage/Product11';
import FAQ3 from '@/Components/ProductPage/FAQ3';

export default function ProductDetail() {
    return (
        <MainLayout>
            <Head title="Pro Series Driver X1 - Product Details" />
            <ProductHeader3 />
            <Layout101 />
            <Testimonial4 />
            <Product11 />
            <FAQ3 />
            <CTA13 />
        </MainLayout>
    );
}
