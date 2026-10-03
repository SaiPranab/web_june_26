import { useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction, type SyntheticEvent } from 'react'
import type { Expense, ExpenseError } from '../models'

interface ExpenseFormProps {
  setExpenses: Dispatch<SetStateAction<Expense[]>>
}

function ExpenseForm({ setExpenses }: ExpenseFormProps) {
  // const [title, setTitle] = useState("")
  // const [category, setCategory] = useState("")
  // const [amount, setAmount] = useState(0)
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
  })
  const [errors, setErrors] = useState<ExpenseError>({
    title: '',
    category: '',
    amount: ''
  })

  function validate(): boolean {
    const errorsData: any = {}

    if(!expense.title) {
      errorsData.title = 'Title is required.'
    }
    else if(expense.title.length < 3) {
      errorsData.title = 'Title must be atleast 3 characters long.'
    }
    
    if(!expense.category) {
      errorsData.category = 'Category is required.'
    }

    if(!expense.amount) {
      errorsData.amount = 'Amount is required.'
    }
    else if(parseFloat(expense.amount) <= 0.0) {
      errorsData.amount = 'Amount must be 1 or higher.'
    }

    setErrors(errorsData)
    return Object.keys(errorsData).length === 0
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    // validate
    if(!validate()) return

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
    setErrors((prev) => ({...prev, [name]: ''}))
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title" >Title</label>
        <input id="title" name='title' onChange={handleChange} value={expense.title} />
        { errors.title && <p className='error'>{errors.title}</p>}
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
        { errors.category && <p className='error'>{errors.category}</p>}
      </div>
      <div className="input-container" >
        <label htmlFor="amount">Amount</label>
        <input type='number' id="amount" name='amount' value={expense.amount} onChange={handleChange} />
        { errors.amount && <p className='error'>{errors.amount}</p>}
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}

export default ExpenseForm