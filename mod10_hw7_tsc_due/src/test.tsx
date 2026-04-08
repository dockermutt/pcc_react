interface Todo {

     text: string
     complete: boolean
 
 }

 

const todos: Todo[] = [
    {
         text: "Start React",
         complete: true
  
    },
    {
          text: "Hand in Module5 HW4 : Search",
          complete: true
     },
    {
         text: "Finish Assignment: Typescript",
         complete: false
    }
  
  ]
  
let v = todos.map(

    (t) => { console.log( t.text + ":=>" + t.complete)}

)

v

export {}