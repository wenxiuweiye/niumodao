import React, { useState } from "react";
import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import { type PriceBaseOption, type WashingProcessType } from "./zh_data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { add, sum } from "mathjs";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";

type WashingFlowProps = {
  washingProcessOptions: PriceBaseOption[];
  placeholder: string;
  onValueChange: (...event: any[]) => void;
};
export default function WashingFlow({
  washingProcessOptions,
  placeholder,
  onValueChange,
}: WashingFlowProps) {
  const [droppedIds, setDroppedIds] = useState<WashingProcessType[]>([]);
  const handleReset = () => {
    setDroppedIds([]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.canceled) return;
    const { target, source } = event.operation; // ✅ source/target 均存在

    // 1. 校验放置目标
    if (target?.id !== "washing-process") return;

    // 2. 校验拖拽源是否合法
    const draggedId = source?.id as WashingProcessType;
    const isValid = washingProcessOptions.some((opt) => opt.id === draggedId);
    if (!isValid) return;

    // 3. 追加到已放置列表（去重）
    setDroppedIds((prev) =>
      prev.includes(draggedId) ? prev : [...prev, draggedId],
    );
  };

  const handleSubmit = () => {
    let totalCost: number[] = [];
    for (let key of droppedIds) {
        totalCost.push(washingProcessOptions.find(opt => opt.id === key)?.value as number)
    }
    console.log(sum(totalCost));
    onValueChange(sum(totalCost));
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4">
        {/* 左侧：可拖拽源列表（始终渲染） */}
        <SourceBox>
          {washingProcessOptions
            .filter(
              (item) => !droppedIds.includes(item.id as WashingProcessType),
            ) // ✅ 可选：已拖走的项从左侧移除
            .map((item) => (
              <Item key={item.id} {...item} />
            ))}
        </SourceBox>

        {/* 右侧：放置区域（始终渲染 + 视觉反馈） */}
        <TargetBox>
          {droppedIds.length === 0 ? (
            <span className="text-muted-foreground text-sm block p-4 text-center">
              {placeholder}
            </span>
          ) : (
            droppedIds.map((id) => {
              const item = washingProcessOptions.find((opt) => opt.id === id);
              return item ? <Item key={item.id} {...item} readOnly /> : null;
            })
          )}
        </TargetBox>
        <Field>
          <FieldLabel>
            <span className="text-muted-foreground text-sm">当前价格：</span>
            {
              droppedIds.map((id, index) => {
                if (index === droppedIds.length - 1) return washingProcessOptions.find(opt => opt.id === id)?.value
                return washingProcessOptions.find(opt => opt.id === id)?.value+" + "
              })
              
            }
          </FieldLabel>
          <FieldContent>
            {droppedIds.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleSubmit}
                className="mt-2 text-xs transition-transform active:scale-95"
                title="提交"
              >
                ✅ 提交
              </Button>
            )}
             {droppedIds.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="mt-2 text-xs transition-transform active:scale-95"
              title="清空已放置的工艺"
            >
              🔄 重置
            </Button>
          )}
          </FieldContent>
         
        </Field>
      </div>
    </DragDropProvider>
  );
}

// 源区域容器
const SourceBox = ({ children }: { children: React.ReactNode }) => {
  // 源区域通常不需要 droppable，如需支持"拖回"可添加
  return (
    <div className="w-78 min-h-66 border border-border rounded p-2 bg-background">
      {children}
    </div>
  );
};

// 目标区域容器（放置区）
const TargetBox = ({ children }: { children: React.ReactNode }) => {
  const { ref, isDropTarget } = useDroppable({
    // ✅ 修正：isDropTarget
    id: "washing-process",
  });

  return (
    <div
      className={`
        w-78 min-h-66 border-2 border-dashed rounded p-2 transition-all duration-200
        ${
          isDropTarget // ✅ 修正：使用 isDropTarget
            ? "border-green-500 bg-green-50 dark:bg-green-950 scale-[1.02]"
            : "border-border bg-background hover:border-gray-400"
        }
      `}
      ref={ref}
    >
      {children}
    </div>
  );
};

// 拖拽项组件
const Item = ({
  id,
  label,
  value,
  symbol,
  description,
  readOnly = false,
}: PriceBaseOption & { readOnly?: boolean }) => {
  const { ref, isDragging } = useDraggable({
    // ✅ isDragging 是 useDraggable 的返回值
    id,
    disabled: readOnly,
  });

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className={`
        border rounded px-2 py-1 mb-1 text-sm select-none transition-all duration-150
        ${
          readOnly
            ? "cursor-default  opacity-90"
            : "cursor-grab active:cursor-grabbing hover:bg-accent"
        }
        ${isDragging ? "bg-background border-primary shadow-lg scale-115 opacity-80" : "bg-background"}
      `}
          ref={ref}
        >
          {label}
          {symbol && value > 0 && (
            <span className="text-gray-500 text-xs ml-1">
              +{symbol}
              {value}
            </span>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent>{description}</HoverCardContent>
    </HoverCard>
  );
};
