/*jshint esversion: 6*/
// var userList = require('./userList.js');

import 'jshint-loader';
import '../css/style_2.scss';
import '../css/style.css';

import { userList } from './userList.js';

// var jsHint = require('jshint-loader'); 



//some Comment
const users = [{
        name: 'Oksana',
        age: 22
    },
    {
        name: 'Viktor',
        age: 14
    },
    {
        name: 'Ivan',
        age: 37
    },
    {
        name: 'Yana',
        age: 45
    },
    {
        name: 'Oleksandr',
        age: 19
    },
    {
        name: 'Olena',
        age: 18
    },
    {
        name: 'Mykola',
        age: 27
    },
    {
        name: 'Andriy',
        age: 33
    },
    {
        name: 'Zakhar',
        age: 40
    }
];

var userListModule = new userList(users);
userListModule.showList();