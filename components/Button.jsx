import React from 'react'

function Button({bg_color='orange', f_color='black', title='default'}) {
  return (
    <div>
        <button style={{backgroundColor: bg_color, color:f_color}}> {title} </button>
    </div>
  )
}

export default Button