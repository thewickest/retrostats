import { clsx, type ClassValue } from 'clsx'
import { BoardSession, Session } from 'src/app/leaderboard/[...slug]/types'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toBoardList(items: Session[] | null): BoardSession[] {
  return items?.map((session: Session, index: number) => {
    const boardSession: BoardSession = {
      score: session?.attributes?.score || 0,
      name: session?.attributes?.game_user?.data?.attributes?.username || 'default',
      position: session?.attributes?.position || 0,
      initDate: session?.attributes?.initDate || null,
      duration: session?.attributes?.duration || 0,
    }
    return boardSession
  }) || []
}