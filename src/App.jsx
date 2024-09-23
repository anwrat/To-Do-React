import './styles.css'

export default function App(){
  return (
  <>{/*This is a fragment*/}
    <form className='new-item-form'>
      <div className='form-row'>
        <label className='toplabel' htmlFor='item'>Item</label>
        <input type="text" id="item"></input>
      </div>
      <button className='btn'>Add</button>
      <header className='header'>Item List</header>
    </form>
  </>
  )
}