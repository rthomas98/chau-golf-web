import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Layout439 } from '../Components/CoursesPage/Layout439';
import { Layout27 } from '../Components/CoursesPage/Layout27';
import { Layout216 } from '../Components/CoursesPage/Layout216';
import { Layout239 } from '../Components/CoursesPage/Layout239';
import { Layout24 } from '../Components/CoursesPage/Layout24';
import { Testimonial19 } from '../Components/CoursesPage/Testimonial19';
import { Layout12 } from '../Components/CoursesPage/Layout12';
import { PartnershipForm } from '../Components/CoursesPage/PartnershipForm';

export default function Courses() {
    return (
        <MainLayout>
            <Layout439 />
            <Layout27 />
            <Layout239 />
            <Layout24 />
            <Layout216 />
            <Testimonial19 />
            <Layout12 />
            <PartnershipForm />
        </MainLayout>
    );
}
