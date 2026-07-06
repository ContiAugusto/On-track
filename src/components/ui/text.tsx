import { useState } from 'react'
type FetchApiProps = {
  placeholder?: string
  classname?: string
  divclassname?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function Textbox({
  placeholder = 'Enter text here...',
  classname = 'text',
  divclassname = 'text-container',
}: FetchApiProps) {
  const [text, setText] = useState('')
  const [type, setType] = useState('text')

  if (classname === 'password') {
    setType('password')
  }

  return (
    <>
      <div className={divclassname}>
        <input
          className={classname}
          placeholder={placeholder}
          type={type}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
