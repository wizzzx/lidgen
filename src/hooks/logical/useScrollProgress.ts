import { useState, useEffect, useRef } from 'react'

const useScrollProgress = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const handleScroll = () => {
        if (wrapperRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current
            const scrolled = (scrollLeft / (scrollWidth - clientWidth)) * 100
            setScrollProgress(scrolled)
        }
    }

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (wrapper) {
            wrapper.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (wrapper) {
                wrapper.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    return { wrapperRef, scrollProgress }
}

export default useScrollProgress