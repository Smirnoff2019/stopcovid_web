
$(document).ready(function() {

    $('#example').DataTable( {
        'paging' : false,
        'lengthChange' : false,
        'searching' : true,
        'ordering' : true,
        'info' : false,
        'autoWidth' : false,
        'showing' : false,
    } );
    //переменные
    let button = $('<button class="table-btn"></button>')
        .html('<i class="fa fa-navicon"></i>');

    let menu = $('<td class="child" colspan="5" role="row"></td>')
        .html('<a>Подробнее</a>', '<a>Редактирование</a>', '<a>Удаление</a>');
        // .html('<a>Редактирование</a>')
        // .html('<a>Удаление</a>');

        $(' tbody tr td:first-child ').each( function () {
            $( this ).addClass(' active ');
            $( this ).css({'padding-left' : `30px`,}).append(button);
        });

        $( ".table-btn" ).css({
            "left": "15px",
            "position": "absolute",
            "color": "white",
            "border": "2px solid white",
            "border-radius": "14px",
            "box-shadow": "rgb(68, 68, 68) 0px 0px 3px",
            "text-indent": "0 !important",
            //"line-height": "14px",
            "text": "+",
            "justify-content": "center",
            "background-color": "#31b131",
        });

        $(' tr ').append( menu );
        $('.child').css({
            //'padding': '0.5em 1em',
            //'height': '20px',
            'display': 'none',
            //'width': '14px',
        });
        $(' tr ').on(' click ', function () {
            $(this).each(function () {
                console.log(this);
                $('.child').slideToggle(5000);
            });
        });

        console.log('$(".table-btn")', $(".table-btn"));
        // $(".table-btn").click( function() {
        //     alert('Вы нажали на элемент "foo"');
        // });
        // $(' tr ').on(' click ', function () {
        //     $( this ).wrap( menu );
        //     $(this).after(menu);
        // });
} );
