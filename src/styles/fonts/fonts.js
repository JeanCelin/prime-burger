import { Roboto, Special_Elite } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-secondary' 
})

export const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-primary' 
})