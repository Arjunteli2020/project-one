import ExpenseItem from "./components/ExpenseItem"

function App() {
  return (
    
        <div>
         <h2>Let's get Started</h2>
         <ExpenseItem date={new Date(2026, 4, 15)} title="Insurance " price="50" location="Bangalore"></ExpenseItem>
         <ExpenseItem date={new Date(2026, 4, 16)} title="Book" price="20" location="Delhi"></ExpenseItem>
         <ExpenseItem date={new Date(2026, 4, 17)} title="Pen" price="5" location="Hyderabad"></ExpenseItem>
         <ExpenseItem date={new Date(2026, 4, 18)} title="Laptop" price="200" location="Mumbai"></ExpenseItem>
        </div>
       
  )
}

export default App
