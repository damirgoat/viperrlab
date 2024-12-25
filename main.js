ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("ya-map", {
                center: [55.76, 37.64],
                zoom: 10
            });

            let myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                balloonContent: 'Лаборатория ИИ'
            });

            myMap.geoObjects.add(myPlacemark);
        }

        $(document).ready(function() {
    let currentIndex = 0;
    const images = $('.carousel img');
    const totalImages = images.length;

    
    images.eq(currentIndex).addClass('active');

    
    function showNextImage() {
        images.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images.eq(currentIndex).addClass('active');
    }

    
    setInterval(showNextImage, 4000);
    
    
    $('#form').on('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваш отзыв!');
        $(this).trigger('reset');
    });
});


const modal = document.getElementById("modal");
const btn = document.querySelector(".btn"); 
const span = document.getElementsByClassName("close")[0]; 


document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault(); 
    modal.style.display = "block"; 
});


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
