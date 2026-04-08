"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [
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
];
var v = todos.map(function (t) { console.log(t.text + ":=>" + t.complete); });
v;
