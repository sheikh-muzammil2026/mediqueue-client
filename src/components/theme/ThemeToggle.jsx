'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme') || 'light'

        setTheme(savedTheme)

        document.documentElement.classList.remove('light', 'dark')

        document.documentElement.classList.add(savedTheme)

    }, [])

    // toggle theme
    const handleTheme = () => {

        const newTheme = theme === 'light' ? 'dark' : 'light'

        setTheme(newTheme)

        localStorage.setItem('theme', newTheme)

        document.documentElement.classList.remove('light', 'dark')

        document.documentElement.classList.add(newTheme)
    }

    return (
        <button
            onClick={handleTheme}
            className='btn btn-circle btn-outline cursor-pointer'
        >
            {
                theme === 'light'
                    ? <Moon size={20} />
                    : <Sun size={20} />
            }
        </button>
    )
}

export default ThemeToggle