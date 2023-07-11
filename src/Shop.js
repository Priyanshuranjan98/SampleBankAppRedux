import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'

function Shop() {
  const dispatch=useDispatch();
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <>
    <h1>Deposit/Withdraw Money by RS 100</h1>
    <button className="btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
    Deposit Money
    <button className="btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </>
  )
}

export default Shop