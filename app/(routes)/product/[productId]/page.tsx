import getProduct from "@/actions/products/get-product";
import {getProducts} from "@/actions/products/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { GetServerSidePropsContext } from "next";
import { getStrapiMedia } from "@/utils/api-helpers";
interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  // console.log("Product", product);

  const { gallery } = product?.attributes;
  // console.log("ProductImage", image1);  
  // console.log("ProductName", name);  

  // let imageUrl;
  // if (gallery && gallery.data && gallery.data.length > 0) {
  //     imageUrl = getStrapiMedia(product.attributes.gallery.data[0].attributes.url);
  // }


  // TODO: get Products by category

  // const Products = await getProducts({
  //   categoryId: product.category?.data.id,
  // });

  // // remove product selected from suggested products, randomize the suggested products and then reduce to 8
  // const suggestedProducts = await Products.filter(
  //   (item) => item.id !== params.productId
  // )
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 8);

  // if (!product) {
  //   return null;
  // }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={gallery.data} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          {/* <ProductList title="Related items" items={suggestedProducts} /> */}
        </div>
      </Container>
    </div>
  );
};


export async function getServerSideProps(context:GetServerSidePropsContext) {
  if (typeof context.params?.productId !== 'string') {
    // Handle error here. For example, you can return a 404 error.
    return {
      notFound: true,
    };
  }
  const product = await getProduct(context.params.productId);
  console.log("Product", product);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
