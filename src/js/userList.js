var _ = require('lodash');
var avatars = require('../avatars/avatar');

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
          let index = 0;
            const div = document.createElement("div");
            //append avatars
            div.append(`<img src=${avatars[index]} alt='avatar ${index++}'>`);
            div.append( user.name + ' ' + user.age);
            container.appendChild(div);
        });
    }
}

module.exports = userList;