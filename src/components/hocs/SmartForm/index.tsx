import React, {FC, HTMLAttributes} from "react";
import {
    FormProvider,
    UseFormClearErrors,
    UseFormSetError,
    UseFormStateReturn
} from "react-hook-form";
import {UseFormReturn} from 'react-hook-form/dist/types';
import get from 'lodash/get'
import styles from './index.module.css'
import cn from 'classnames'

type propsType = {
    submit: (data: any) => void
    form: UseFormReturn<any, any>
    composition?: boolean
} & HTMLAttributes<HTMLFormElement>;

export const SmartForm: FC<propsType> = ({
    children,
    submit,
    form,
    composition,
    ...props
}) => {
    const onFormChange = (e: any) => {
        props.onChange && props.onChange(e)
    }

    return(
        <form
            onSubmit={form.handleSubmit(submit)}
            onChange={onFormChange}
            {...props}
            className={cn(styles.container, props.className, {
                [styles['container--composed']]: composition
            })}
        >
            <FormProvider {...form}>{children}</FormProvider>
        </form>
    )
}