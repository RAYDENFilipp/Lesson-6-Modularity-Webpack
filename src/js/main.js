/*jshint esversion: 6*/
// var userList = require('./userList.js');
import {userList} from './userList.js';
// var jsHint = require('jshint-loader'); 
import * as jsHint from 'jshint-loader';
require('../css/style_2.scss');
require('../css/style.css');
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