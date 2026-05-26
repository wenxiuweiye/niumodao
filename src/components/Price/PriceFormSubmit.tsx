import React from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";

type PriceFormSubmitProps = {
    price: number;
    title: string;
    symbol: string;
    buttonText?: string;
}
export default function PriceFormSubmit({ price, title, symbol, buttonText  }: PriceFormSubmitProps) {
  return (
    <>
      <div className="ml-auto">
        <span>{title}</span>
        <span className="ml-8">{price}</span>
        <span>{symbol}</span>
      </div>
      {
        buttonText && (
          <Button type="submit" className=" ml-8">
            {buttonText}
          </Button>
        )
      }
   </>
  );
}
