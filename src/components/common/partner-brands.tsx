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
            className="border[#f1f1f1] flex min-h-[50px] min-w-[116px] flex-col items-center justify-center rounded-3xl"
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
            <span className="color-black text-center text-sm font-semibold">
              {brand.name}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
