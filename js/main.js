'use strict';
class List {
    constructor(userId, id, title, completed) {
        this.title = title;
        this.completed = false;
    }

    add() {
        var newList = '<ul><li>';
        if($('#text').val() != ''){
            $('#list').append( newList + $('#text').val());
            $('#list').attr('contentEditable','true');
            $('#text').val('');   
            
        }else alert('ponga lista');
        
    }
    done() {
    
    //    $('li').wrap("<del>");
    (event.target).style.textDecoration =  ((event.target).style.textDecoration =="line-through") ? 'transparent' : "line-through" ;
    

    }
    start() {
        $('#add').click(() => this.add());
        $('#list').click(() => this.done());
        
    }
 }
    $(document).ready(()=> {
        var list = new List();
        list.start();
        $('#add').keypress(function(e) {
            if(e.which == 13) {
                alert('You pressed enter!');
            }
        });
    })
    