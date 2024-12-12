import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Layout207 from '@/Components/StorePage/Layout207';
import Products4 from '@/Components/StorePage/Products4';
import Layout24 from '@/Components/StorePage/Layout24';
import Product12 from '@/Components/StorePage/Product12';
import Testimonial5 from '@/Components/StorePage/Testimonial5';
import CTA3 from '@/Components/StorePage/CTA3';

export default function Store() {
    return (
        <MainLayout>
            <Head title="Store" />
            <Layout207 />
            <Products4 />
            <Layout24 />
            <Product12 />
            <Testimonial5 />
            <CTA3 />
        </MainLayout>
    );
}
