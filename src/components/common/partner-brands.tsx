import Image from "next/image";

import { Card } from "@/components/ui/card";

interface Brand {
  name: string;
  logo: string;
  alt?: string;
}

interface PartnerBrandsProps {
  title?: string;
  brands: Brand[];
}

export function PartnerBrands({
  title = "Marcas parceiras",
  brands,
}: PartnerBrandsProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {brands.map((brand, index) => (
          <Card
            key={index}
            className="flex min-h-[60px] min-w-[106px] flex-col items-center justify-center border[#f1f1f1]  rounded-3xl"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.alt || `${brand.name} logo`}
                  width={80}
                  height={80}
                  className=""
                />
              </div>
            </div>
            <span className="text-x color-black text-center font-semibold whitespace-nowrap">
              {brand.name}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
