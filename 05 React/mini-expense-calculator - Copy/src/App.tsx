import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import type { Expense } from "./models"

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: crypto.randomUUID(),
      title: "Chips",
      category: "grocery",
      amount: 20
    },
    {
      id: crypto.randomUUID(),
      title: "T-Shirt",
      category: "clothes",
      amount: 2400
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Recharge",
      category: "biils",
      amount: 900
    },
  ])

  return (
    <>
      <main>
        <h1>Track All Your Expenses Here</h1>

        <div className='expense-tracker'>
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
        </div>
      </main>
    </>
  )
}