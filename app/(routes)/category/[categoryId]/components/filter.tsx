"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import React , { useEffect } from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {


  // console.log("Filter Props", data);
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: number) => {

    // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const current = qs.parse(searchParams.toString());
    const idStr = id.toString();
  
    const query = {
      ...current,
      [valueKey]: idStr,
    };
  
    if (current[valueKey] === idStr) {
      query[valueKey] = null;
    }
  
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
   
  
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id.toString() && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.attributes.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
