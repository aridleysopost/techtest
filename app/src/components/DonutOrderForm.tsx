import React, {useState} from 'react'
import styled from 'styled-components'
import {useMutation} from '../api'

type InputProps<value> = {
  id: string
  value: value
  setValue: (value: value) => void
}

const TextInput: React.FC<
  InputProps<string> & React.HTMLAttributes<HTMLDivElement>
> = ({id, className, value, setValue}) => {
  return (
    <div className={className}>
      <label htmlFor={id}> {id}:</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

const NumberInput: React.FC<
  InputProps<number> & React.HTMLAttributes<HTMLDivElement>
> = ({id, className, value, setValue}) => {
  return (
    <div className={className}>
      <label htmlFor={id}> {id}:</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
    </div>
  )
}

const StyledInput = (input: typeof TextInput | typeof NumberInput) => styled(
  input,
)`
  input {
    margin-left: 20px;
  }
  label {
    display: inline-block;
    width: 100px;
    text-align: right;
    text-transform: capitalize;
  }
  margin-bottom: 20px;
`

const StyledNumberInput = StyledInput(NumberInput)
const StyledTextInput = StyledInput(TextInput)

export const DonutOrderForm = (): React.ReactElement => {
  const {mutate} = useMutation('/api/order')

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState<number>(0)

  return (
    <div>
      <StyledTextInput id="name" value={name} setValue={setName} />
      <StyledNumberInput
        id="quantity"
        value={quantity}
        setValue={setQuantity}
      />
      <button
        onClick={() => {
          mutate({name, quantity})
          setName('')
          setQuantity(0)
        }}
      >
        Order
      </button>
    </div>
  )
}
