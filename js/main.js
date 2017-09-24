'use strict';
class List {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = 1;
        this.title = title;
        this.completed = false;
        this.array  = [];
        
    }
   

    add() {
        var newList = '<ul><li>';
        $('#list').append( newList +$('#text').val() + '</li></ul>');
        $('#list').attr('contentEditable','true');
        
    }
    edit() {
    }
    start() {
        $('#add').click(() => this.add());
    }
 }
 $(document).ready(()=> {
     var list = new List();
     list.start();
 })