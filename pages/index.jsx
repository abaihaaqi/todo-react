import Layout from '../components/layouts'

export default function Home() {
  return (
    <Layout>
      <h1 className='text-center text-3xl my-8'>Todo app</h1>
      <div className='max-w-2xl px-3 flex flex-col gap-3 mb-3'>
        <div>
          <input type="checkbox" name="todoItem" id="todoItem" />
          <label htmlFor="todoItem">Buy a macbook</label>
        </div>
        <div>
          <input type="checkbox" name="todoItem1" id="todoItem1" />
          <label htmlFor="todoItem1">Buy a mac cheese</label>
        </div>
        <div>
          <input type="checkbox" name="todoItem2" id="todoItem2" />
          <label htmlFor="todoItem2">Buy a cookbook</label>
        </div>
      </div>
      <form className='max-w-2xl px-3'>
        <input className='w-full' type="text" name="newTodo" id="newTodo" />
      </form>
    </Layout>
  )
}
