import React from 'react'
import './App.css';
import HighlightedItem from './HighlightedItem'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'
import Item5 from './Item5'

export const SkinMainPage = () => {
  return (
    <React.Fragment>
        <section className='MainPage'>
            <div className='layout'>
                <div className='HighlightedItem'>
                    <HighlightedItem></HighlightedItem>
                </div>
                <div className='Item2'>
                    <Item2></Item2>
                </div>
                <div className='Item3'>
                    <Item3></Item3>
                </div>
                <div className='Item4'>
                    <Item4></Item4>
                </div>
                <div className='Item5'>
                    <Item5></Item5>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
