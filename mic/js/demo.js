document.querySelector('button').onclick = function(e) {
    mic.drop(e,[
        {
            name: 'Light mode',
            run: function(){
                document.body.classList.add('light');
            }
        },
        {
            name: 'Dark mode',
            run: function(){
                document.body.classList.remove('light');
            }
        },
        {
            name: 'A song about a leopard',
            run: function(){
                window.open('https://www.youtube.com/watch?v=5es5MQX0VVA','_blank');
            }
        },                
        {
            name: 'Destroy the world',
            class: 'danger',
            run: function(){
                alert('kerboom');
            }
        }
    ]);
};