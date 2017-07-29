/*jshint esversion: 6*/
//var _ = require('lodash');
import * as _ from 'lodash';
// var avatars = require('../avatars/avatar');
import {avatars} from '../avatars/avatar';
export function userList(users) {
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        let index = 0;
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            //append avatars
            div.innerHTML = `<img src=${avatars[index]} alt='avatar ${++index}'>`;
            div.append(user.name + ' ' + user.age);
            container.appendChild(div);
        });
    };
}

// module.exports = userList;