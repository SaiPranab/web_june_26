import React, { type Dispatch, type SetStateAction } from 'react'
import type { Expense, MenuPosition } from '../models'

interface ContextMenuProps {
  menuPosition: MenuPosition
  setMenuPosition: Dispatch<SetStateAction<MenuPosition>>
  rowId: string
  setExpenses: Dispatch<SetStateAction<Expense[]>>
  setExpense: Dispatch<SetStateAction<Expense>>
  expenses: Expense[],

}

const ContextMenu = ({ menuPosition, setMenuPosition, rowId, setExpenses, setExpense, expenses }: ContextMenuProps) => {
  if (!menuPosition.left) return

  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={(e) => {
        setMenuPosition({})
        // console.log("Editing...")
        const selectedExpense = expenses.find(exp => exp.id === rowId) 
        if(selectedExpense) {
          setExpense(selectedExpense)
        }
      }}>Edit</div>

      <div onClick={(e) => {
        setMenuPosition({})
        // console.log("Deleting...")
        setExpenses(prev => (prev.filter((expense: Expense) => expense.id !== rowId)))
      }}>Delete</div>
    </div>
  )
}

export default ContextMenu