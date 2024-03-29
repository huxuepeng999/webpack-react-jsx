import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'



const AddTodo = ({ dispatch }) => {
  let input
  const obj = {
    a: 1,
    o2: {
      b: 1
    }
  }

  const [aa, setAa] = useState(obj)
  const [bb, setBb] = useState([])

  useEffect(() => {
    obj.o2.b = 3
    obj.a = 3
    const c = { ...obj }
    const d = Object.assign({}, obj)
    const e = obj
    console.log('res===c', c === obj)
    console.log('res===d', d === obj, d)
    console.log('res===d', e === e)
    // setAa({ ...obj })
    setAa(d)
    setAa(e)
  }, [])

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        {aa.o2.b}
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
