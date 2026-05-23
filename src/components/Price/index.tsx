import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import PriceOption from "./PriceOption";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import PriceInput from "./PriceInput";
import { add, chain } from "mathjs";
import z from "zod";
import { HTML5Backend } from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {
  fitOptions,
  lengthOptions,
  shrinkageOptions,
  pocketOptions,
  type FabricPriceFormData,
  type ProgressPriceFormData,
  type TrimsAndAccessoriesPriceFormData,
  waistOptions,
  backRiseOptions,
  beltLoopOptions,
  backPocketOptions,
  pocketBagOptions,
  zipperOptions,
  polybagOptions,
  buttonOptions,
  backPocketLabelOptions,
  cuttingTableOptions,
  leatherPatchOptions,
  careLabelOptions,
} from "./zh_data";
import {
  $fabricPrice,
  $progressPrice,
  $trimsAndAccessoriesPrice,
} from "src/stores/priceStore";
import { useStore } from "@nanostores/react";
import WashingFlow from "./WashingFlow";

export default function PriceContent() {
  const fabricPrice = useStore($fabricPrice);
  const progressPrice = useStore($progressPrice);
  const trimsAndAccessoriesPrice = useStore($trimsAndAccessoriesPrice);

  // 布料价格
  const fabricPriceForm = useForm<FabricPriceFormData>();
  const onfabricPriceFormSubmit: SubmitHandler<FabricPriceFormData> = (data) =>
    $fabricPrice.set(
      chain(data.fitFactor)
        .multiply(data.lengthFactor)
        .multiply(data.pricePerMeter)
        .multiply(data.shrinkageFactor)
        .done(),
    );

  //加工价格
  const progressForm = useForm<ProgressPriceFormData>();
  const onProgressFormSubmit: SubmitHandler<ProgressPriceFormData> = (data) => {
    console.log("progressForm", data);
    $progressPrice.set(
      chain(data.cuttingtableCost)
        .add(data.pocketCost)
        .add(data.backRiseCost)
        .add(data.backPocketCost)
        .multiply(data.waistFactor)
        .multiply(data.beltLoopFactor)
        .done(),
    );
  };

  //辅料价格
  const trimsAndAccessoriesForm = useForm<TrimsAndAccessoriesPriceFormData>();
  const onTrimsAndAccessoriesFormSubmit: SubmitHandler<
    TrimsAndAccessoriesPriceFormData
  > = (data) =>
    $trimsAndAccessoriesPrice.set(
      chain(data.pocketBagCost)
        .add(data.zipperCost)
        .add(data.polyBagCost)
        .add(data.buttonCost)
        .add(data.backPocketLabelCost)
        .done(),
    );

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">裤子</TabsTrigger>
        <TabsTrigger value="password">衣服</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <form onSubmit={fabricPriceForm.handleSubmit(onfabricPriceFormSubmit)}>
          <Card className="w-full p-4">
            <CardTitle>布料</CardTitle>
            <CardContent className=" flex gap-6 w-full flex-wrap ">
              <Controller
                name="lengthFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"款式"}
                    onValueChange={field.onChange}
                    radioGroupOptions={lengthOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="fitFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"版型"}
                    onValueChange={field.onChange}
                    radioGroupOptions={fitOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="shrinkageFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"缩水率"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={shrinkageOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="pricePerMeter"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceInput
                    {...field}
                    title={"每米价格"}
                    value={field.value}
                    description={"注意: 购买的布料可能是码为单位注意换算"}
                    onChange={field.onChange}
                    placeholder={"请输入布料价格"}
                  ></PriceInput>
                )}
              ></Controller>
            </CardContent>
            <CardFooter className="flex mt-6">
              <div className="ml-auto">
                <span>布料价格：</span>
                <span className="ml-8">{fabricPrice}</span>
                <span>￥/米</span>
              </div>
              <Button type="submit" className=" ml-8">
                提交
              </Button>
            </CardFooter>
          </Card>
        </form>
        <form onSubmit={progressForm.handleSubmit(onProgressFormSubmit)}>
          <Card className="w-full p-4">
            <CardTitle>加工</CardTitle>
            <CardContent className=" flex gap-6 w-full flex-wrap ">
              <Controller
                name="cuttingtableCost"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"裤头类型"}
                    radioGroupOptions={cuttingTableOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />

              <Controller
                name="pocketCost"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"口袋个数"}
                    radioGroupOptions={pocketOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="waistFactor"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"裤头类型"}
                    radioGroupOptions={waistOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="backRiseCost"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"后浪工艺"}
                    radioGroupOptions={backRiseOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="beltLoopFactor"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"裤耳/裤带袢 数量"}
                    radioGroupOptions={beltLoopOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="backPocketCost"
                control={progressForm.control}
                render={({ field }) => (
                  <PriceOption
                    title={"后袋样式"}
                    radioGroupOptions={backPocketOptions}
                    onValueChange={field.onChange}
                  />
                )}
              />
            </CardContent>
            <CardFooter className="flex mt-6">
              <div className="ml-auto">
                <span>加工价格：</span>
                <span className="ml-8">{progressPrice}</span>
                <span>￥</span>
              </div>
              <Button type="submit" className=" ml-8">
                提交
              </Button>
            </CardFooter>
          </Card>
        </form>
        <form
          onSubmit={trimsAndAccessoriesForm.handleSubmit(
            onTrimsAndAccessoriesFormSubmit,
          )}
        >
          <Card className="w-full p-4">
            <CardTitle>辅料</CardTitle>
            <CardContent className=" flex gap-6 w-full flex-wrap ">
              <Controller
                name="pocketBagCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"袋布"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={pocketBagOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="zipperCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"拉链"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={zipperOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="polyBagCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"包装袋"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={polybagOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="buttonCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"钉扣"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={buttonOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="backPocketLabelCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"后袋唛"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={backPocketLabelOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="leatherPatchCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"皮牌"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={leatherPatchOptions}
                  ></PriceOption>
                )}
              />
              <Controller
                name="careLabelCost"
                control={trimsAndAccessoriesForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    title={"洗水唛"}
                    className=" row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={careLabelOptions}
                  ></PriceOption>
                )}
              />
            </CardContent>
            <CardFooter className="flex mt-6">
              <div className="ml-auto">
                <span>辅料价格：</span>
                <span className="ml-8">{trimsAndAccessoriesPrice}</span>
                <span>￥</span>
              </div>
              <Button type="submit" className=" ml-8">
                提交
              </Button>
            </CardFooter>
          </Card>
        </form>
        <form>
          <Card className="w-full p-4">
            <CardTitle>价格</CardTitle>
            <CardContent>
              <DndProvider backend={HTML5Backend}> 
                <WashingFlow></WashingFlow>
              </DndProvider>
            </CardContent>
          </Card>
        </form>
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
