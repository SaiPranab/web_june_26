import { useEffect, useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction, type SyntheticEvent } from 'react'
import type { Expense } from '../models'

interface ExpenseFormProps {
  setExpenses: Dispatch<SetStateAction<Expense[]>>
}

function ExpenseForm({ setExpenses }: ExpenseFormProps) {
  // const [title, setTitle] = useState("")
  // const [category, setCategory] = useState("")
  // const [amount, setAmount] = useState(0)
  const myRef = useRef(null)
  console.log("////// value of ref", myRef)

  // const [expense, setExpense] = useState({
  //   title: '',
  //   category: '',
  //   amount: ''
  // })
  const titleRef: any = useRef(null)
  const categoryRef: any = useRef(null)
  const amountRef: any = useRef(null)

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    // Create a new Expense
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value
    }
    console.log("11111", newExpense)

    // Add the newly created expense to existing expenses
    setExpenses((prev) => [...prev, newExpense])

    // Clear the form field
    // setExpense({
    //   title: '',
    //   category: '',
    //   amount: ''
    // })
    titleRef.current.value = ''
    categoryRef.current.value = ''
    amountRef.current.value = ''
  }

  // function handleChange(e: ChangeEvent) {
  //   const { name, value } = e.target as HTMLFormElement;

  //   setExpense(prev => ({ ...prev, [name]: value }))
  // }

  useEffect(() => {
    console.log("Inside use Effect", myRef)
    // myRef.current.style.backgroundColor = 'red'
  }, [])

  return (
    <>
      <button ref={myRef} onClick={() => {
        // myRef.current++
        console.log("....", myRef.current)
      }}>Click Me</button>

      {/* <h3>{myRef.current}</h3> */}

      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title" >Title</label>
          <input id="title" name='title' ref={titleRef} />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id='category' name='category' ref={categoryRef}>
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
          <input type='number' id="amount" name='amount' ref={amountRef} />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  )
}

export default ExpenseForm