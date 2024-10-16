import React, {FC, useEffect} from 'react'
import {useFormContext, useWatch} from 'react-hook-form'
import {Range} from 'react-range'
import cn from 'classnames'
import styles from './index.module.scss'
import {RangeType} from "@/components/ui/Range/types";

export const RangeSlider: FC<RangeType> = ({
    amountForTextInformation,
    textInformation,
    amount,
    conditionForLockRangeAmount,
    conditionForLockRangeLoanTerms,
    marks,
    step = 1,
    min,
    max,
    rangeData,
    className,
    name,
    setValues,
    values,
    onChange,
    disabled,
    ...jsxAttrs
}) => {
    const {setValue, control} = useFormContext()

const filledLine = ((values[0] - min) * 100) / (max-min)
    const unfilledLine = 100 - ((values[0] - min) * 100) / (max-min)

    const formValue = useWatch({
        control, name
    })

    useEffect(() => {
        if (formValue && formValue !== values[0]) {
            formValue >= min && formValue <=max && setValues([formValue])
        }
    }, [formValue]);

}