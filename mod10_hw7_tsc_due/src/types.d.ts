

interface Todo {

    text: string
    complete: boolean

}

type ToggleTodo = (sel: Todo) => void

type Toggler = ( v : string) => void