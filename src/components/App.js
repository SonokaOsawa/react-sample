// import logo from './logo.svg';
// import './App.css';
import React,{useState} from "react";
// import PropTypes from 'prop-types'
// import {connect, useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'

// import {countPlus, countMinus} from '../actions';
// import {addTodo,removeTodo,doneTodo} from '../actions';
import {About} from './about'
// import Navi from './navi'
// import {Topics} from './topics'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/100'>About</Link>
            </li>
            {/* <li>
              <Link to='/id/777'>ID</Link>
            </li> */}
            {/* <li>
              <Link to='/users'>Users</Link>
            </li> */}
          </ul>
        </nav>
         {/* <Navi /> */}
         <Switch> 
           <Route path='/about/:aboutId' exact component={About}/> 
           {/* <Route path='/users'>
            <Users />
          </Route> */}
          {/* <Route path='/id/:id' exact>
            <Id />
          </Route> */}
          <Route path='/'>
            <Home />
          </Route> 
           {/* <Route path='/users'> 
            <Users /> 
          </Route> */}
          {/* <Route path='/about/100'>
            <About />
          </Route> */}
          {/* <Route path='/topics'><Topics /></Route> */}
           {/* <Route path='/'>
            <Home />
           </Route> */}
         </Switch>
       </div>
     </Router>
  )
}

const Home = () => {
  return <h2>Home</h2>
}
// const About = () => {
//   return <h2>About</h2>
// }
// const Users = () => {
//   return <h2>Users</h2>
// }
// const Id = () => {
//   const {id} = useParams();
//   return <h2>ID :{id}</h2>
// }

// class App extends Component {
  // renderWithCondition(isMorning){
  //   if(isMorning){
  //     return <span>Good Morning</span>
  //     }else{
  //       return <span>Hello</span>
  //   }
  // }
  
  // inputViews(e){
  //   console.log(e.target.previousElementSibling.value)
  // }

  // class App extends React.Component{
  //   constructor(props){
  //     super(props)
  //     this.state = {
  //       count:0
  //     }
  //   }
  // constructor(props){
  //   super(props)
  //   this.state = {
      // todolist:[],
  //     task:""
  //   }
  // }

  

  // render(){
    //map, filter
    // const tasks =[
    //   { id:1, title:"概要作成"},
    //   { id:2, title:"two"},
    //   { id:3, title:"詳細設計作成"},
    //   { id:4, title:"four"},
    //   { id:5, title:"テスト"},
    // ];
    // const num = tasks.map((val,index)=>{return <div>IDは{val.id}、TITLEは{val.title}</div>})
    // const num2 = tasks.filter(val => {
    //   return val.id % 2 !== 0 
    // })
    // const num3 = num2.map((val,index)=>{return <div>ID:{val.id},TITLE:{val.title},INDEX:{index}<button onClick={()=>{console.log(val.id)}}>button</button></div>})

    // let isMorning = true

    // function Greeting(){
    //   if(isMorning){
    //     return <span>Good Morning</span>
    //   }else{
    //     return <span>Hello</span>
    //   }
    // }

    // function click(){
    //   return console.log('クリックしました')
    // }
    // let text = ""
    
    // const props = this.props

    // const todos = [{todo:this.props.todo}]
    

    // return (
      <React.Fragment>
      {/* <div>{num}</div> */}
      {/* <div>{num3}</div> */}
      {/* {(()=> {
        if(isMorning){
          return <span>Good Morning</span>
        }else{
          return <span>Hello</span>
        }
      })()} */}
      {/* {isMorning && <span>Good Morning</span>} */}
      {/* {isMorning ? <span>Good Morning</span> : <span>Hello</span>} */}
      {/* <Greeting/> */}
      {/* {this.renderWithCondition(isMorning)} */}
      {/* <button onClick={click}>ボタン</button> */}
      {/* <textarea></textarea>
      <button onClick={this.inputViews}>button</button> */}
      {/* <p>現在の数字は{this.state.count}です</p>
      <button onClick = {() => this.setState({count:this.state.count + 1})}>+1</button>
      <button onClick = {() => this.setState({count:this.state.count - 1})}>-1</button>
      <button onClick = {() => this.setState({count:0})}>0</button> */}
      {/* <h1>Todo List</h1>
      <div>{this.state.todo}</div>
      <input type="text"></input>
      <button onClick={()=> this.setState({})}>button</button> */}
      {/* <p>現在の数字は {props.val} です</p>
      <button onClick={props.countPlus}>+1</button>
      <button onClick={props.countMinus}>-1</button> */}
      {/* <h1>Todo List</h1>
      <input value={this.props.task} onChange={(e) => this.setState({task:e.target.value})}></input>
      <button onClick={this.props.addTodo}>追加</button>
      <ul>
        { todos.map((todo, index) => (
          <li key={ index }>{  } <button>削除</button></li>
         ))}
      </ul> */}
      </React.Fragment>
//     )
//   }
// }

// const App = () => {
//   return <React.Fragment>
//     <Huga />
//     <button onClick = {() => { console.log('hoi') }}>ボタン</button>
//     </React.Fragment>
// }

// const Huga = () => {
//   return <React.Fragment>
//     <Name />
//     hugahugahuga
//     </React.Fragment>
// }

// const Name = () => {
//   return <React.Fragment>大澤苑佳{huu()}</React.Fragment>
// }

// const huu = () => {
//   return 'huu'
// }

// const Members = [
//   {name:"taro"},
//   {name:"jiro", age:24},
//   {name:"saburo", age:30},
// ]

// const App = () => {
//   return (
//   <div>
//     {
//       Members.map((human,index) => {
//         return <Member name = {human.name} age = {human.age} key = {index}/>
//       })
//     }
//   </div>
//   )
// }

// const Member = (props) => {
//   return <div>I'm {props.name} age 「{props.age}」</div>
// }

// Member.defaultProps = {
//   age:100
// }

// Member.propTypes = {
//   name:PropTypes.string,
//   age:PropTypes.number.isRequired
// }

// const App = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <p>現在の数字は{count}です</p>
//       <button onClick = {() => setCount(prevState => prevState + 1)}>+1</button>
//       <button onClick = {() => setCount(count - 1)}>-1</button>
//       <button onClick = {() => setCount(0)}>0</button>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   val: state.counter.val
// })
// const mapDispatchToProps = dispatch => ({
//   countPlus:()=>dispatch(countPlus()),
//   countMinus:()=>dispatch(countMinus())
// })

// const mapStateToProps = state => ({
//   todo:state.todolist.list
// })
// const mapDispatchToProps = dispatch　=> ({
//   addTodo:()=>dispatch(addTodo())
// })

//クラスコンポーネントのライフサイクル
// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0,
//     }
//   }

//   componentDidMount(){
//     console.log("didmount")
//   }

//   componentDidUpdate(){
//     console.log("didupdate")
//   }

//   render() {
//     return (
//       <>
//         <p>{`${this.state.count}回クリックされました`}</p>
//         <div>
//           <button onClick={()=> this.setState({count: this.state.count + 1})} >
//             ボタン
//           </button>
//           <button onClick={()=> this.setState({count: 0})}>
//             リセット
//           </button>
//         </div>
//       </>
//     )
//   }
// }

//todolist
// const App = () => { 
//   const todolist = [
//       { title: '概要作成' ,flg:false},
//       { title: '画面設計作成' ,flg:false},
//       { title: '詳細設計作成' ,flg:false},
//       { title: 'コーディング' ,flg:false},
//     { title: 'テスト', flg: false }]
//   //とりあえず完了flgも入れておく（使わないけど）表示切り替え用

//   const [todos, setTodo] = useState(todolist)
  
//   const [task, setTask] = useState("")
  
//   const createTask = (e) => { 
//     setTask(e.target.value)
//   }

//   const addTask = (e) => { 
//     //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
//     if (task === '') return
//     setTodo(todos => [...todos, { title: task, flg: false }])
//     setTask('')
//   }

//   const removeTask = index => { 
//     const newTodos = [...todos]
//     newTodos.splice(index, 1)
//     setTodo(newTodos)
//   }

//   return (
//     <div>
//       <h1>todoリスト</h1>
//       <input value={task} onChange={createTask} />
//       <button onClick={addTask}>追加</button>
//       <ul>
//          { todos.map((todo, index) => (
//           <li key={ index }>{ todo.title } <button onClick={ () => removeTask(index) }>削除</button></li>
//          ))}
//       </ul>
//     </div>
//   )

// }

// const App = () => {
//   const [task, setTask] = useState("")

//   const createTask = (e) => { 
//         setTask(e.target.value)
//       }
//   const dispatch = useDispatch()
//   const addTask = () => {
//     dispatch(addTodo(task))
//     setTask('')
//   }
//   const todolist = useSelector(state => state.todolist.list)
//   const removeTask = (index) => {
//     dispatch(removeTodo(index))
//   }
//   const doneTask = (index) => {
//     dispatch(doneTodo(index))
//   }
//   return(
//     <React.Fragment>
//       <h1>Todo List</h1>
//        <input value={task} onChange={createTask} />
//        <button onClick={addTask}>追加</button>
//        <ul>
//           { todolist.map((todo, index) => (
//           <li key={ index }>
//             {todo.complete ? <del>{ todo.name }</del> : <span>{ todo.name }</span>}
//           <button onClick={() => doneTask(index)}>完了</button>
//           <button onClick={() => removeTask(index)}>削除</button>
//           </li>
//          ))}
//       </ul>
//     </React.Fragment>
//   )
// }

// const mapStateToProps = state => ({
//   todo:state.todolist.list
// })

// export default connect (mapStateToProps)(App)
export default App;