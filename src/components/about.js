// import React, {useState}from "react";
import React from "react";
import { useHistory } from 'react-router-dom';

// export const About = () => {
//     return <h2>About</h2>
// }

// export const About = () => { 
//       const todolist = [
//           { title: '概要作成' ,flg:false},
//           { title: '画面設計作成' ,flg:false},
//           { title: '詳細設計作成' ,flg:false},
//           { title: 'コーディング' ,flg:false},
//         { title: 'テスト', flg: false }]
//       //とりあえず完了flgも入れておく（使わないけど）表示切り替え用

//       const [todos, setTodo] = useState(todolist)  //todos:todolistの配列

//       const [task, setTask] = useState("")  //task:入力された文字

//       const createTask = (e) => { 
//         setTask(e.target.value)
//       }

//       const addTask = (e) => { 
//         //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
//         if (task === '') return
//         setTodo(todos => [...todos, { title: task, flg: false }])
//         setTask('')
//       }

//       const removeTask = index => { 
//         const newTodos = [...todos]
//         newTodos.splice(index, 1)
//         setTodo(newTodos)
//       }

//       return (
//         <div>
//             <h2>About</h2>
//           <h2>todoリスト</h2>
//           <input value={task} onChange={createTask} />
//           <button onClick={addTask}>追加</button>
//           <ul>
//              { todos.map((todo, index) => (
//               <li key={ index }>{ todo.title } <button onClick={ () => removeTask(index) }>削除</button></li>
//              ))}
//           </ul>
//         </div>
//       )

//     }

// export class About extends React.Component {
//     render(){
//         const {params} = this.props.match
//         return (
//             <h2>About : {params.aboutId}</h2>
//         )
//     }
// }

export const About = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    const orders = [
        {
            orderdate: '2021-5-28', totalprice: 1000, items: [{ id: 1, buynum: 3, size: 'M', topping: [{ id: 1, buynum: 3 }, { id: 3, buynum: 2 }] },
            { id: 3, buynum: 2, size: 'L', topping: [{ id: 5, buynum: 1 }] }]
        },
        {
            orderdate: '2021-5-27', totalprice: 2500, items: [{ id: 7, buynum: 3, size: 'M', topping: [{ id: 1, buynum: 3 }, { id: 3, buynum: 2 }] },
            { id: 9, buynum: 2, size: 'L', topping: [{ id: 5, buynum: 1 }] }]
        }]
    const items = orders.items
    return (
        <React.Fragment>
            <h1>注文履歴</h1>
            {orders.map((order, index) => (
                <div key={index}>
                    <p>注文日時：{order.orderdate}</p>
                    <p>お支払い金額：{order.totalprice}</p>
                    <p>商品画像</p>
                    {/* <p>商品ID：{order.items.id}</p> */}
                    {order[items].map((item, index) => (
                        <div key={index}>
                            <p>商品ID：{item.id}</p>
                        </div>
                    ))}
                </div>
            ))}
            <p>注文日時：</p>
            <p>お支払い金額：</p>
            <p>商品画像</p>
            <p></p>
            {/* <h2>決済が完了しました！</h2>
        <p>この度はご注文ありがとうございます。</p>
        <p>お支払い先は、お送りしたメールに記載してありますのでご確認ください。</p>
        <p>メールが届かない場合は「注文履歴」からご確認ください。</p>
        <button onClick={() => handleLink('/')}>トップ画面に戻る</button>

        <p>お支払い金額：</p>
        <p>商品画像　</p> */}
        </React.Fragment>
    )
}