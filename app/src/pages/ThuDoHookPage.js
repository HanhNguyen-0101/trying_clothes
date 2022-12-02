import React from 'react'
import HeaderComponent from '../components/ThuDoHook/HeaderComponent'
import ProductModelComponent from '../components/ThuDoHook/ProductModelComponent'
import data from './../assets/data/Data.json';
import './../assets/css/style.css';
import CategoriesComponent from '../components/ThuDoHook/CategoriesComponent';
import ProductListComponent from '../components/ThuDoHook/ProductListComponent';

export default function ThuDoHookPage() {
  return (
    <div className='container-fluid thuDoApp'>
      <div className='row'>
        <div className='col-sm-12'>
          <HeaderComponent />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <CategoriesComponent navPills={data.navPills} />
          <ProductListComponent tabPanes={data.tabPanes} navPills={data.navPills} />
        </div>
        <div className='col-md-4'>
          <ProductModelComponent />
        </div>
      </div>
    </div>
  )
}
