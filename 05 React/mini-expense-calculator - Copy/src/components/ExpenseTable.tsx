import type React from "react"
import type { MenuPosition, Expense } from "../models"
import { useState, type Dispatch, type SetStateAction } from "react"
import ContextMenu from "./ContextMenu"

interface expenseTableProps {
  expenses: Expense[],
  setExpenses: Dispatch<SetStateAction<Expense[]>>
  setExpense: Dispatch<SetStateAction<Expense>>
}

const ExpenseTable = ({ expenses, setExpenses, setExpense }: expenseTableProps) => {
  const [sortCallback, setSortCallback] = useState<any>(() => () => { })
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({})
  const [rowId, setRowId] = useState<string>('')

  const [filteredCategory, setFilteredCategory] = useState<string>('')
  const filteredExpenses = expenses.filter(exp => exp.category.includes(filteredCategory))

  const totalExpense: number = filteredExpenses.reduce((acc, exp) => {
    return acc + parseFloat(exp.amount)
  }, 0)

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        setExpenses={setExpenses}
        setExpense={setExpense}
        expenses={expenses}
      />

      <table className="expense-table" onClick={() => {
        if(menuPosition.left) {
          setMenuPosition({})
        }
      }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setFilteredCategory(e.target.value)}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={(e) => setSortCallback(() => (a: any, b: any) => a.amount - b.amount)}
                >
                  <title>Ascending</title>
                  <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={(e) => setSortCallback(() => (a: any, b: any) => b.amount - a.amount)}
                >
                  <title>Descending</title>
                  <path
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredExpenses
              .sort(sortCallback)
              .map(exp => (
                <tr key={exp.id} onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({
                    top: e.clientY + 30,
                    left: e.clientX + 5
                  })
                  setRowId(exp.id)
                }}>
                  <td>{exp.title}</td>
                  <td>{exp.category}</td>
                  <td>{parseFloat(exp.amount).toFixed(2)}</td>
                </tr>
              ))
          }
          <tr>
            <th style={{ textAlign: 'center' }}>Total</th>
            <th style={{ textAlign: 'center' }} onClick={() => setSortCallback(() => () => { })}><button>Clear</button></th>
            <th>₹{totalExpense.toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ExpenseTable