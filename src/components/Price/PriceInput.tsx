import React from "react";
import { Field, FieldLabel, FieldDescription } from "../ui/field";
import { Input } from "../ui/input";
import * as z from "zod";
import type { UseFormRegister } from "react-hook-form";
import type { FabricPriceFormData } from "./zh_data";

type PriceInputProps = {
    title: string;
    value: number;
    description: string;
    onChange:  (...event: any[]) => void;
    placeholder: string;

};

export default function PriceInput({title, value, description, onChange, placeholder, }: PriceInputProps) {
  const schema = z.object({
    value: z.number()
  });
  return (
    <Field>
      <FieldLabel>{title}</FieldLabel>
      <Field orientation="horizontal">
        <Input 
         onChange={(e) => {
          if (typeof e.target.value === "number") {
            onChange(Number(e.target.value));
          }else{
            throw new Error("Invalid value");
          }
        }} value={value} placeholder={placeholder} />
      </Field>
      <FieldDescription>{description}</FieldDescription>
    </Field>
  );
}
