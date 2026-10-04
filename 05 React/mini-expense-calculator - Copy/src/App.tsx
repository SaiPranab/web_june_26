import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: crypto.randomUUID().toString(),
      title: "Chips",
      category: "grocery",
      amount: "20"
    },
    {
      id: crypto.randomUUID().toString(),
      title: "T-Shirt",
      category: "clothes",
      amount: "2400"
    },
    {
      id: crypto.randomUUID().toString(),
      title: "Mobile Recharge",
      category: "biils",
      amount: "900"
    },
  ])

  const [expense, setExpense] = useState({
    id: '',
    title: '',
    category: '',
    amount: ''
  })

  return (
    <>
      <main>
        <h1>Track All Your Expenses Here</h1>

        <div className='expense-tracker'>
          <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} />
          <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} />
        </div>
      </main>
    </>
  )
}