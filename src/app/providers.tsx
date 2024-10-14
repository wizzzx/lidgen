'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'

export function Providers({ children }: PropsWithChildren) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            <ErrorBoundary
                fallback={<div>Something went wrong</div>}
                onError={(error, info) => {
                    console.error('Произошла ошибка:', error)
                    console.error('Дополнительная информация:', info.componentStack)
                }}
            >
                <Provider store={store}>{children}</Provider>
            </ErrorBoundary>
            {process.env.NEXT_PUBLIC_ENVIRONMENT === 'stage' && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    )
}