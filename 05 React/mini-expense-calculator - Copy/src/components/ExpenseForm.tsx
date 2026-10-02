import { useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction, type SyntheticEvent } from 'react'
import type { Expense } from '../models'

interface ExpenseFormProps {
  setExpenses: Dispatch<SetStateAction<Expense[]>>
}

function ExpenseForm({ setExpenses }: ExpenseFormProps) {
  // const [title, setTitle] = useState("")
  // const [category, setCategory] = useState("")
  // const [amount, setAmount] = useState(0)
  const myRef = useRef('')

  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
  })

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    // Create a new Expense
    const newExpense: Expense = { ...expense, id: crypto.randomUUID() }

    // Add the newly created expense to existing expenses
    setExpenses((prev) => [...prev, newExpense])

    // Clear the form field
    setExpense({
      title: '',
      category: '',
      amount: ''
    })
  }

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.target as HTMLFormElement;

    setExpense(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title" >Title</label>
        <input id="title" name='title' onChange={handleChange} value={expense.title} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id='category' name='category' value={expense.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container" >
        <label htmlFor="amount">Amount</label>
        <input type='number' id="amount" name='amount' value={expense.amount} onChange={handleChange} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}

export default ExpenseForm