"use client";

import { useEffect, useState } from "react";

export const Formatter = new Intl.NumberFormat("fr-TN", {
  style: "currency",
  currency: "TND",
});

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-semibold">{Formatter.format(Number(value))}</div>;
};

export default Currency;
