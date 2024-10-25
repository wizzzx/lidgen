import { AllHTMLAttributes } from "react";

export type RangeType = {
  amountForTextInformation?: number;
  textInformation?: boolean;
  amount?: number;
  conditionForLockRangeAmount?: boolean;
  conditionForLockRangeLoanTerms?: boolean;
  marks?: boolean;
  step?: number;
  max: number;
  min: number;
  rangeData?: any[];
  name: string;
  values: any[];
  defaultValue?: string;
  setValues: React.Dispatch<React.SetStateAction<any[]>>;
  onChange?: () => void;
} & AllHTMLAttributes<HTMLDivElement>;
