import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { PartnerBrands } from "@/components/common/partner-brands";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  const brands = [
    {
      name: "Nike",
      logo: "/brand_nike.png",
      alt: "Nike logo",
    },
    {
      name: "Adidas",
      logo: "/brand_adidas.png",
      alt: "Adidas logo",
    },
    {
      name: "Puma",
      logo: "/brand_puma.png",
      alt: "Puma logo",
    },
    {
      name: "New Balance",
      logo: "/brand_new_balance.png",
      alt: "New Balance logo",
    },
    {
      name: "Converse",
      logo: "/brand_converse.png",
      alt: "Converse logo",
    },
    {
      name: "Polo",
      logo: "/brand_polo.png",
      alt: "Polo logo",
    },
    {
      name: "Zara",
      logo: "/brand_zara.png",
      alt: "Zara logo",
    },
  ];

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="px-5">
          <PartnerBrands brands={brands} />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
