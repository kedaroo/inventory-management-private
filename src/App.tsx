import { useEffect } from 'react'
import { useInventoryStore } from './stores/inventory-store'
import './App.css'

function App() {
  const fetchInventory = useInventoryStore(state => state.fetchInventory)
  const inventory = useInventoryStore(state => state.inventory)

  useEffect(() => {
    fetchInventory()
  }, [fetchInventory])

  return (
    <>
      <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Value ($)</th>
          <th>Quantity</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default App
