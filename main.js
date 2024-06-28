let tabsLis = document.querySelectorAll('.tabs li'),
    boxes = document.querySelectorAll('.content .box');

tabsLis.forEach((tab) => {
    tab.addEventListener('click', function(e){
        tabsLis.forEach((tab) => {
            tab.classList.remove("active");
        });
        e.currentTarget.classList.add('active');
        boxes.forEach((box) => {
            box.classList.remove('active');
        });
        document.querySelector('.'+e.currentTarget.dataset.whatsapp).classList.add('active');
    });
});