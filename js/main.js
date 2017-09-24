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
        if($('#text').val() != ''){
            $('#list').append( newList +'<i  class="fa fa-times-circle" aria-hidden="true"></i> </n></n>' + $('#text').val() +  '</li><i id="slow" class="fa fa-times-circle close" aria-hidden="true"></i></ul>');
            $('#list').attr('contentEditable','true');
            $('#text').val('');            
        }else alert('ponga lista');
        
    }
    slow() {
        $('li').fadeOut('slow');
    }
    start() {
        $('#add').click(() => this.add());
        $('#slow').click(() => this.slow());
     

        
    }
 }
    $(document).ready(()=> {
        var list = new List();
        list.start();
    })