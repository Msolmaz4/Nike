import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({endpoint}) => {
  console.log(endpoint)
  return (
    
      <div>
        <Title title={endpoint.title}/>
        <div >
          {endpoint.items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>

      </div>

  )
}

export default Sales