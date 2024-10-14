'use client'

import {Container} from "../../components/shared/Container";
import React, {useEffect, useMemo, useState} from "react";
import styles from './page.module.scss'
import {Header} from "../../components/ui/Header";
import { useForm, useWatch } from 'react-hook-form'

export default function Home() {
    const [activeSection, setActiveSection] = useState('borrower')

    const form = useForm<any>({
        reValidateMode: 'onSubmit'
    })

    const amount: number = useWatch({
        control: form.control,
        name: 'loan_data.amount'
    })

    const term: number = useWatch({
        control: form.control,
        name: 'loan_data.terms'
    })

    return (
        <main>

        </main>
    )
}

