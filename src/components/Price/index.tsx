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
import { chain, round } from "mathjs";

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
  type WashingFlowFormData,
  washingProcessOptions,
  type FinishingPriceFormData,
  threadTrimmingOptions,
  cartoningOptions,
  foldingOptions,
  labelingOptions,
  masterLabelingOptions,
  polybaggingOptions,
  pressingOptions,
  qcInspectionOptions,
  sealingOptions,
  sizeSortingOptions,
  taggingOptions,
  bartackOptions,
  brandPlateOptions,
} from "./zh_data";
import {
  $fabricPrice,
  $finishingPackingPrice,
  $progressPrice,
  $trimsAndAccessoriesPrice,
  $washingProcessPrice,
} from "src/stores/priceStore";
import { useStore } from "@nanostores/react";
import WashingFlow from "./WashingFlow";
import PriceFormSubmit from "./PriceFormSubmit";

export default function PriceContent() {
  const fabricPrice = useStore($fabricPrice);
  const progressPrice = useStore($progressPrice);
  const trimsAndAccessoriesPrice = useStore($trimsAndAccessoriesPrice);
  const washingFlowPrice = useStore($washingProcessPrice);
  const finishingPackingPrice = useStore($finishingPackingPrice);

  // 布料价格
  const fabricPriceForm = useForm<FabricPriceFormData>();
  const onfabricPriceFormSubmit: SubmitHandler<FabricPriceFormData> = (data) =>
    $fabricPrice.set(
      chain(data.fitFactor)
        .multiply(data.lengthFactor)
        .multiply(data.pricePerMeter)
        .multiply(data.shrinkageFactor)
        .round(3)
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
        .round(3)
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
        .round(3)
        .done(),
    );
  // 水洗价格
  const washingFlowForm = useForm<WashingFlowFormData>();
  const onWashingFlowFormSubmit: SubmitHandler<WashingFlowFormData> = (data) =>
    $washingProcessPrice.set(round(data.washingtotalCost, 3));

  // 包装价格
  const finishingPackingForm = useForm<FinishingPriceFormData>();
  const onFinishingPackingFormSubmit: SubmitHandler<FinishingPriceFormData> = (
    data,
  ) =>
    $finishingPackingPrice.set(
      chain(data.threadTrimmingCost)
        .add(data.bartackCost)
        .add(data.brandPlateCost)
        .add(data.pressingCost)
        .add(data.qcInspectionCost)
        .add(data.foldingCost)
        .add(data.taggingCost)
        .add(data.polybaggingCost)
        .add(data.labelingCost)
        .add(data.sizeSortingCost)
        .add(data.cartoningCost)
        .add(data.sealingCost)
        .add(data.masterLabelingCost)
        .round(3)
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
                rules={{ required: { value: true, message: "请选择款式" } }}
                name="lengthFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    state={fieldState}
                    title={"款式"}
                    onValueChange={field.onChange}
                    radioGroupOptions={lengthOptions}
                  />
                )}
              />
              <Controller
                rules={{ required: { value: true, message: "请选择版型" } }}
                name="fitFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    state={fieldState}
                    title={"版型"}
                    onValueChange={field.onChange}
                    radioGroupOptions={fitOptions}
                  />
                )}
              />
              <Controller
                rules={{ required: { value: true, message: "请选择缩水率" } }}
                name="shrinkageFactor"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceOption
                    state={fieldState}
                    title={"缩水率"}
                    className="row-span-2"
                    onValueChange={field.onChange}
                    radioGroupOptions={shrinkageOptions}
                  />
                )}
              />
              <Controller
                rules={{
                  required: { value: true, message: "价格为必填项" },
                  pattern: { value: /^[0-9]+$/, message: "仅支持输入纯数字" },
                }}
                name="pricePerMeter"
                control={fabricPriceForm.control}
                render={({ field, fieldState }) => (
                  <PriceInput
                    {...field}
                    state={fieldState}
                    title={"每米价格"}
                    value={field.value}
                    description={"注意: 购买的布料可能是码为单位注意换算"}
                    onChange={field.onChange}
                    placeholder={"请输入布料价格"}
                  />
                )}
              />
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
  rules={{ required: { value: true, message: "请选择裤头类型" } }}
  name="cuttingtableCost"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"裤头类型"}
      onValueChange={field.onChange}
      radioGroupOptions={cuttingTableOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择口袋个数" } }}
  name="pocketCost"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"口袋个数"}
      onValueChange={field.onChange}
      radioGroupOptions={pocketOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择裤头工艺" } }}
  name="waistFactor"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"裤头类型"}
      onValueChange={field.onChange}
      radioGroupOptions={waistOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择后浪工艺" } }}
  name="backRiseCost"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"后浪工艺"}
      onValueChange={field.onChange}
      radioGroupOptions={backRiseOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择裤耳数量" } }}
  name="beltLoopFactor"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"裤耳/裤带袢 数量"}
      onValueChange={field.onChange}
      radioGroupOptions={beltLoopOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择后袋样式" } }}
  name="backPocketCost"
  control={progressForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"后袋样式"}
      onValueChange={field.onChange}
      radioGroupOptions={backPocketOptions}
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
  rules={{ required: { value: true, message: "请选择袋布类型" } }}
  name="pocketBagCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"袋布"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={pocketBagOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择拉链类型" } }}
  name="zipperCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"拉链"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={zipperOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择包装袋类型" } }}
  name="polyBagCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"包装袋"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={polybagOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择钉扣类型" } }}
  name="buttonCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"钉扣"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={buttonOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择后袋唛" } }}
  name="backPocketLabelCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"后袋唛"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={backPocketLabelOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择皮牌类型" } }}
  name="leatherPatchCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"皮牌"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={leatherPatchOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择洗水唛类型" } }}
  name="careLabelCost"
  control={trimsAndAccessoriesForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title={"洗水唛"}
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={careLabelOptions}
    />
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
        <form onSubmit={washingFlowForm.handleSubmit(onWashingFlowFormSubmit)}>
          <Card className="w-full p-4">
            <CardTitle>水洗</CardTitle>
            <CardContent>
              <Controller
                rules={{ required: { value: true, message: "请选择水洗工艺" } }}
                name="washingtotalCost"
                control={washingFlowForm.control}
                render={({ field }) => (
                  <WashingFlow
                    onValueChange={field.onChange}
                    washingProcessOptions={washingProcessOptions}
                    placeholder={"拖拽工艺到此处"}
                  />
                )}
              />
            </CardContent>
            <CardFooter className="flex mt-6">
              <PriceFormSubmit
                price={washingFlowPrice}
                title={"洗水价格"}
                symbol={"￥"}
              ></PriceFormSubmit>
            </CardFooter>
          </Card>
        </form>
        <form
          onSubmit={finishingPackingForm.handleSubmit(
            onFinishingPackingFormSubmit,
          )}
        >
          <Card className="w-full p-4">
            <CardTitle>包装（后整）</CardTitle>
            <CardContent className=" flex gap-6 w-full flex-wrap ">
              <Controller
  rules={{ required: { value: true, message: "请选择剪线工艺" } }}
  name="threadTrimmingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="剪线头"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={threadTrimmingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择打钉工艺" } }}
  name="bartackCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="打钉"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={bartackOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择车牌类型" } }}
  name="brandPlateCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="车牌"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={brandPlateOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择整烫工艺" } }}
  name="pressingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="整烫/压烫"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={pressingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择质检等级" } }}
  name="qcInspectionCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="终检/验货"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={qcInspectionOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择折叠方式" } }}
  name="foldingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="折叠整形"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={foldingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择挂牌方式" } }}
  name="taggingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="挂牌/穿吊牌"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={taggingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择装袋类型" } }}
  name="polybaggingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="装袋"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={polybaggingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择贴标类型" } }}
  name="labelingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="贴标/条码"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={labelingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择配码方式" } }}
  name="sizeSortingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="配码分码"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={sizeSortingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择装箱类型" } }}
  name="cartoningCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="装箱"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={cartoningOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择封箱方式" } }}
  name="sealingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="封箱捆扎"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={sealingOptions}
    />
  )}
/>
<Controller
  rules={{ required: { value: true, message: "请选择外箱标类型" } }}
  name="masterLabelingCost"
  control={finishingPackingForm.control}
  render={({ field, fieldState }) => (
    <PriceOption
      state={fieldState}
      title="贴外箱标"
      className="row-span-2"
      onValueChange={field.onChange}
      radioGroupOptions={masterLabelingOptions}
    />
  )}
/>
            </CardContent>
            <CardFooter className="flex mt-6">
              <PriceFormSubmit
                price={finishingPackingPrice}
                title={"包装（后整）价格"}
                buttonText={"提交"}
                symbol={"￥"}
              ></PriceFormSubmit>
            </CardFooter>
          </Card>
        </form>
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
