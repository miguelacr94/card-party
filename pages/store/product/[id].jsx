import Head from "next/head";
import ProductDetailsForm from "../../../core/components/product-details/Form";
import ProductDetailsTabs from "../../../core/components/product-details/Tabs";
import Wrapper from "../../../core/components/shared/Wrapper";
import MainLayout from "../../../core/layouts/MainLayout";

const ProductDetail = () => {
  return (
    <MainLayout
      head={
        <Head>
          <title>Invitación Cars - Printable Party</title>
        </Head>
      }
    >
      <Wrapper maxScreen="w-[1000px] md:p-10 p-4 mt-12 md:mt-0">
        <div className="grid grid-cols-1 md:gap-10 gap-0 md:grid-cols-2 space-y-8 md:space-y-0">
          <ProductDetailsTabs />
          <ProductDetailsForm />
        </div>
      </Wrapper>
    </MainLayout>
  );
};

export default ProductDetail;
