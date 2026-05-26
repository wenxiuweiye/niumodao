import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardContent } from "../ui/card";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldTitle,
  FieldDescription,
} from "../ui/field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { useForm, type ControllerFieldState } from "react-hook-form";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { motion } from "motion/react";
import type { PriceBaseOption } from "./zh_data";

type PriceOptionProps = {
  className?: string;
  title: string;
  radioGroupOptions: PriceBaseOption[];
  onValueChange: (...event: any[]) => void;
  state?: ControllerFieldState;
};
export default function PriceOption({
  className,
  title,
  radioGroupOptions,
  onValueChange,
  state,
}: PriceOptionProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <Field className={className}>
      <FieldTitle>{title}</FieldTitle>
      <RadioGroup
        onValueChange={(v) =>
          onValueChange(radioGroupOptions.find((item) => item.id === v)!.value)
        }
        className=" w-full lg:w-xl hover-3d"
      >
        {radioGroupOptions.map(({ id, label, value, description, symbol }) => (
          <HoverCard key={id}>
            <HoverCardTrigger>
              <motion.div
                initial={{ scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <FieldLabel key={id}>
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>{label}</FieldTitle>
                      <FieldDescription>
                        {symbol}
                        {value}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value={id} id={id} />
                  </Field>
                </FieldLabel>
              </motion.div>
            </HoverCardTrigger>
            {description && (
              <HoverCardContent
                side={isMobile ? "bottom" : "right"}
                className="w-80"
              >
                {description}
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
      </RadioGroup>
      {state?.error && (
        <FieldDescription className="text-destructive mt-1">
          {state.error.message}
        </FieldDescription>
      )}
    </Field>
  );
}
