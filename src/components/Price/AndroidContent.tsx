import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { useStore } from "@nanostores/react";
import {
  $fabricPrice,
  $trimsAndAccessoriesPrice,
  $progressPrice,
  $washingProcessPrice,
  $finishingPackingPrice,
} from "../../stores/priceStore";
import { Field, FieldContent, FieldLabel } from "../ui/field";
import { chain } from "mathjs";
import { Separator } from "../ui/separator";

export default function AndroidContent() {
  const fabricPrice = useStore($fabricPrice);
  const trimsAndAccessoriesPrice = useStore($trimsAndAccessoriesPrice);
  const progressPrice = useStore($progressPrice);
  const washingFlowPrice = useStore($washingProcessPrice);
  const finishingPackingPrice = useStore($finishingPackingPrice);
  const totalPrice = chain(fabricPrice)
    .add(progressPrice)
    .add(trimsAndAccessoriesPrice)
    .add(washingFlowPrice)
    .add(finishingPackingPrice)
    .round(3)
    .done();

  return (
    <Field className="w-66 h-full flex  m-8">
      <Field className="w-full flex flex-wrap gap-4">
        <Field>
          <FieldLabel>布料价格</FieldLabel>
          <FieldContent>{fabricPrice}</FieldContent>
        </Field>
        <Field>
          <FieldLabel>工序价格</FieldLabel>
          <FieldContent>{progressPrice}</FieldContent>
        </Field>
        <Field>
          <FieldLabel>辅料价格</FieldLabel>
          <FieldContent>{trimsAndAccessoriesPrice}</FieldContent>
        </Field>
        <Field>
          <FieldLabel>水洗价格</FieldLabel>
          <FieldContent>{washingFlowPrice}</FieldContent>
        </Field>
        <Field>
          <FieldLabel>包装价格</FieldLabel>
          <FieldContent>{finishingPackingPrice}</FieldContent>
        </Field>
      </Field>

      <Field className="flex border-border border-t flex-wrap gap-4 mt-auto mb-26">
        <Field>
            <Separator orientation="vertical" />
        </Field>
        <FieldLabel>总价</FieldLabel>
        <FieldContent>{totalPrice}</FieldContent>
      </Field>
    </Field>
  );
}
