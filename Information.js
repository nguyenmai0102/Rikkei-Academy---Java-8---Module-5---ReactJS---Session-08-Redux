import React from 'react';
import { useSelector} from 'react-redux';


export default function Information() {
    const count = useSelector(state=>state.count)
    const list = useSelector(state=>state.list)
  return (
    <div>
        <h2>Redux Demo</h2>
        <p>Current Value:{count}</p>
        <p>Array: {list.toString()}</p>
    </div>
  )
}
