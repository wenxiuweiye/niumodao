import React from "react";
import { Field, FieldLabel, FieldDescription } from "../ui/field";
import { Input } from "../ui/input";
import type { ControllerFieldState } from "react-hook-form";

type PriceInputProps = {
  title: string;
  value: string | number; // ✅ 兼容初始空字符串
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  state: ControllerFieldState;
};

export default function PriceInput({ 
  title, value, description, onChange, placeholder, state 
}: PriceInputProps) {
  // ✅ 删除局部 zod 和 throw，RHF 已接管验证
  return (
    <Field>
      <FieldLabel>{title}</FieldLabel>
      <Field orientation="horizontal">
        <Input 
          type="text" // ✅ 保持 text 类型，确保 pattern 正则能生效
          value={value}
          onChange={onChange} // ✅ 直接交给 RHF 处理输入流
          placeholder={placeholder} 
        />
      </Field>
      
      {/* ✅ 错误提示（带红色样式） */}
      {state.error && (
        <FieldDescription className="text-destructive mt-1">
          {state.error.message}
        </FieldDescription>
      )}
      
      <FieldDescription>{description}</FieldDescription>
    </Field>
  );
}