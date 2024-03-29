import { useState, useEffect, useRef } from 'react';

/**
     * @useComponentVisible хук помогающий отслеживать, где пользователь нажал мышкой, нужен для исчезновения colorPicker
     */

export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<any>(null);

    const handleClickOutside = (ev: MouseEvent) => {
        if (ref.current && !ref.current.contains(ev.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}