'use client'

import React, { createContext, SetStateAction, useContext, useState } from 'react'

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  sort: string
  setSort: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => '',
}

const filterContext = createContext<IContextType>(INITIAL_FILER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryFilters, setCategoryFilters] = useState([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sort, setSort] = useState('-createdAt')
  return (
    <filterContext.Provider value={{ categoryFilters, setCategoryFilters, sort, setSort }}>
      {children}
    </filterContext.Provider>
  )
}

export const useFilter = () => useContext(filterContext)
