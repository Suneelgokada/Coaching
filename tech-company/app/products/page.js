import ProductsNavbar from "../../src/components/Products/ProductsNavbar";
import Footer from "../../src/components/Footer";
import ProductsScroller from "../../src/components/Products/ProductsScroller/ProductsScroller";

export default function ProductsPage() {
  return (
    <>
      <ProductsNavbar />
      <ProductsScroller />
      <Footer />
    </>
  );
}