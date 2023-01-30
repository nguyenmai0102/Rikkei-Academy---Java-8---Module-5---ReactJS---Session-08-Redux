import React from 'react'
import { useDispatch } from 'react-redux';
import { act_count_up, act_count_down, act_list_random } from '../actions';

export default function Control() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() =>dispatch(act_count_up(3))}>UP</button>
        <button onClick={() =>dispatch(act_count_down(2))}>DOWN</button>
        <button onClick={()=>dispatch(act_list_random())}>RANDOM</button>
    </div>
  )
}
