'use client'

import { X } from 'lucide-react'
import ReactDom from 'react-dom'

import React, { useEffect, useState } from 'react'

type Props = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  saveAction: any
  deleteAction: any
  isBadgeSelected: boolean
  children: React.ReactNode
}

export default function Modal({ active, setActive, saveAction, deleteAction, isBadgeSelected, children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  const handleSaveAction = () => {
    saveAction()
    closeModal()
  }

  const handleDeleteAction = () => {
    deleteAction()
    closeModal()
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? 'true' : 'false'}
      onClick={closeModal}
      className="fixed text-text left-0 top-0 z-50 flex h-screen w-screen items-center justify-center data-[visible=true]:opacity-100 
      data-[visible=true]:visible data-[visible=false]:opacity-0 data-[visible=false]:invisible transition-all duration-300 bg-overlay"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-[300px] group-data-[visible=true]:opacity-100 group-data-[visible=true]:visible group-data-[visible=false]:opacity-0 
        group-data-[visible=false]:invisible flex-col items-center justify-center rounded-base border-2 border-border dark:border-darkBorder bg-white 
        dark:bg-darkBg p-10 text-text dark:text-darkText pt-12 font-base shadow-light dark:shadow-dark transition-all duration-300"
      >
        <button onClick={closeModal}>
          <X className="absolute right-3 top-3 h-6 w-6" />
        </button>
        {children}
        <div className='flex justify-around w-full place-content-center mt-4 space-x-4'>
          <button className='flex-1 cursor-pointer rounded-base border-2 text-text border-border dark:border-darkBorder bg-white px-4 py-1.5 font-base
            shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none'
            onClick={handleDeleteAction}>
            Delete
          </button>
          <button className={`flex-1 cursor-pointer rounded-base border-2 text-text border-border dark:border-darkBorder ${isBadgeSelected ? 'bg-main shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none' : 'bg-bg shadow-none'} px-4 py-1.5 font-base
            transition-all`} disabled={!isBadgeSelected}
            onClick={handleSaveAction}>
            Save
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  )
}