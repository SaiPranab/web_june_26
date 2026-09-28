import A from './A'

const App = () => {
  const message = "Good morning Everyone"

  return (
    <div style={{
      border: "2px solid black",
      padding: '20px'
    }}>
      App Component
      <A message={message} />
    </div>
  )
}

export default App