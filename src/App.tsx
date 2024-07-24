// import { useEffect } from "react"
// import { useAppDispatch, useAppSelector } from "./hooks/redux"
// import { fetchUsers } from "./store/reducers/ActionCreators"
import PostContainer from "./components/PostContainer"
import "./App.css"
function App() {
  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector( state => state.userReducer)
  // useEffect( () => {
  // dispatch(fetchUsers())
  // }, [])
  return (
  <div className="App">
    <PostContainer/>
  {/* {isLoading && <h1>Lädt...</h1>}
  {error && <h1>{error}</h1>}
  {JSON.stringify(users, null,  2)} */}
  </div>
  )
}

export default App
