import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/HomePage/Home";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import {CheckoutPage} from "../pages/ChekoutPage/CheckoutPage";
import LoginAndRegister from "../pages/LoginAndRegister/LoginAndRegister";
import AdminPanelLayout from "../admin/adminPanelLayout/layout/Layout";
import Admin from "../admin/adminPanel/Admin";
import AdvertisementBanner from "../admin/advertisementBanner/AdvertisementBanner";
import AdvertisementBannerAdd from "../admin/advertisementBanner/AdvertisementBannerAdd";
import AdvertisementBannerEdit from "../admin/advertisementBanner/AdvertisementBannerEdit";
import Category from "../admin/category/Category";
import CategoryAdd from "../admin/category/CategoryAdd";
import CategoryEdit from "../admin/category/CategoryEdit";
import Color from "../admin/color/Color";
import ColorAdd from "../admin/color/ColorAdd";
import ColorEdit from "../admin/color/ColorEdit";
import Product from "../admin/product/Product";
import ProductAdd from "../admin/product/ProductAdd";
import ProductEdit from "../admin/product/ProductEdit";
import ProductStatus from "../admin/productStatus/ProductStatus";
import ProductStatusAdd from "../admin/productStatus/ProductStatusAdd";
import ProductStatusEdit from "../admin/productStatus/ProductStatusEdit";
import SeasonDiscount from "../admin/seasonDiscount/SeasonDiscount";
import SeasonDiscountAdd from "../admin/seasonDiscount/SeasonDiscountAdd";
import SeasonDiscountEdit from "../admin/seasonDiscount/SeasonDiscountEdit";
import Size from "../admin/size/Size";
import SizeAdd from "../admin/size/SizeAdd";
import SizeEdit from "../admin/size/SizeEdit";
import SubCategory from "../admin/subCategory/SubCategory";
import SubCategoryAdd from "../admin/subCategory/SubCategoryAdd";
import SubCategoryEdit from "../admin/subCategory/SubCategoryEdit";




const LinkRouter = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<Layout />}>
        <Route path="shop" element={<ShopPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="loginAndRegister" element={<LoginAndRegister />} />
      </Route>

      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route index path="/admin" element={<Admin />} />
        <Route
          path="/admin/advertisementBanner"
          element={<AdvertisementBanner />}
        />
        <Route
          path="/admin/advertisementBannerAdd"
          element={<AdvertisementBannerAdd />}
        />
        <Route
          path="/admin/AdvertisementBannerEdit/:id"
          element={<AdvertisementBannerEdit />}
        />
        <Route path="/admin/Category" element={<Category />} />
        <Route path="/admin/CategoryAdd" element={<CategoryAdd />} />
        <Route path="/admin/CategoryEdit/:id" element={<CategoryEdit />} />

        <Route path="/admin/Color" element={<Color />} />
        <Route path="/admin/ColorAdd" element={<ColorAdd />} />
        <Route path="/admin/ColorEdit/:id" element={<ColorEdit />} />

        <Route path="/admin/Product" element={<Product />} />
        <Route path="/admin/ProductAdd" element={<ProductAdd />} />
        <Route path="/admin/ProductEdit/:id" element={<ProductEdit />} />

        <Route path="/admin/ProductStatus" element={<ProductStatus />} />
        <Route path="/admin/ProductStatusAdd" element={<ProductStatusAdd />} />
        <Route
          path="/admin/ProductStatusEdit/:id"
          element={<ProductStatusEdit />}
        />

        <Route path="/admin/SeasonDiscount" element={<SeasonDiscount />} />
        <Route
          path="/admin/SeasonDiscountAdd"
          element={<SeasonDiscountAdd />}
        />
        <Route
          path="/admin/SeasonDiscountEdit/:id"
          element={<SeasonDiscountEdit />}
        />

        <Route path="/admin/Size" element={<Size />} />
        <Route path="/admin/SizeAdd" element={<SizeAdd />} />
        <Route path="/admin/SizeEdit/:id" element={<SizeEdit />} />

        <Route path="/admin/SubCategory" element={<SubCategory />} />
        <Route path="/admin/SubCategoryAdd" element={<SubCategoryAdd />} />
        <Route
          path="/admin/SubCategoryEdit/:id"
          element={<SubCategoryEdit />}
        />
      </Route>
    </Routes>
  );
};

export default LinkRouter;
