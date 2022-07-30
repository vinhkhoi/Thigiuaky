document.getElementById('random').onclick = () => {
    const valueRandom = Math.random();
    const value=Math.floor(Math.random() *4 );
    switch(value) {
        case 0:
        document.getElementsByTagName("h3") [0].innerText="Duy Hậu";
         break
        case 1:
        document.getElementsByTagName("h3") [0].innerText="Diễm Quỳnh";
        break
        case 2:
        document.getElementsByTagName("h3") [0].innerText="Khôi";
        break
        case 3:
        document.getElementsByTagName("h3") [0].innerText="Hoa";
        break
    
    }

};
