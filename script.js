
let artigo = document.getElementsByClassName('article-content')[0]
let container = document.getElementsByClassName('container')[0]
let titulo = document.getElementsByClassName('title')[0];
let img = document.getElementsByClassName('img')[0];
let text = document.getElementsByClassName('text')[0];
let h2 = text.getElementsByTagName('h2')[0];
let p = text.getElementsByTagName('p')[0];
let voltar = document.getElementById('back');
let proximo = document.getElementById('next');

function artigo1(){
    artigo.classList.remove('invisivel');
    container.classList.add('invisivel');
    titulo.innerHTML = "O que é telemedicina?"
    img.innerHTML = "<img>"
    imgTag =  img.getElementsByTagName('img')[0]
    imgTag.src = "assets/img1.png"
    h2.innerHTML = "O que é Telemedicina"
    p.innerHTML = "Duis volutpat quam et arcu commodo, ut fermentum libero bibendum. Nunc euismod sagittis tortor et auctor. Vivamus rutrum fermentum suscipit. Aliquam gravida consequat nibh, at aliquet arcu hendrerit ultrices. Nullam bibendum lectus vitae aliquet viverra. Phasellus mattis non felis et faucibus. Nunc ac tristique justo, at fringilla mi. Duis nec enim ex. Nam varius elit non nisi      hendrerit, vitae suscipit massa ultricies.<br/><br/>Praesent vitae sapien et lacus mattis dictum vehicula non magna. Maecenas pellentesque massa tincidunt, pretium massa sed, efficitur ligula. Proin gravida id nibh eget rhoncus. Duis a lectus in diam cursus facilisis eget ac arcu. Etiam semper arcu ac malesuada ultricies. Maecenas luctus, eros in maximus mollis, sem erat mattis libero, sodales tristique velit mauris sed massa. Curabitur commodo dolor eget magna efficitur semper.<br><br>Curabitur ullamcorper id est ut feugiat. Fusce auctor, risus sit amet volutpat elementum, ipsum arcu semper augue, nec sodales turpis ipsum in orci. Curabitur in leo non felis iaculis viverra in sit amet dolor. Nullam fringilla, purus aliquet eleifend egestas, odio mi volutpat neque, a sodales mi mi eget purus. Sed et lacinia odio, non tempus urna. Fusce velit erat, malesuada fermentum sodales et, luctus vel augue. Etiam nec pulvinar dui. Proin venenatis, odio feugiat elementum mattis, nisl libero fringilla odio, eget lacinia arcu tellus id dui.<br><br>Nunc eu massa dignissim, lacinia quam et, dapibus urna. Phasellus dui ligula, finibus nec mattis sit amet, volutpat convallis libero. Cras id metus non mauris vulputate placerat. Mauris mattis tristique sapien vel lacinia. Nullam tincidunt id arcu nec pharetra. Curabitur pretium porta volutpat. Sed ut purus ac tortor porta pretium vel sit amet tellus. Aliquam turpis odio, placerat et viverra eget, consectetur eget nulla. Mauris consequat, metus a pellentesque ultricies, risus nisi ultrices turpis, ut ornare neque dolor eget justo.<br><br>Vestibulum varius sapien vitae nisi porttitor finibus. Sed nec congue ex. Pellentesque aliquet accumsan nisl, sit amet finibus libero elementum ut. Pellentesque pellentesque, erat sit amet feugiat sollicitudin, turpis lectus fermentum tortor, vitae condimentum urna metus sed ipsum. Vivamus odio nisl, maximus in porttitor non, maximus tristique dui. Maecenas ultricies vitae nisi ut ultrices. Cras finibus consequat orci, quis gravida nisl malesuada eget. Etiam pulvinar massa eu feugiat ullamcorper. Nunc scelerisque elit id elit pharetra, vel lacinia massa maximus"
    voltar.innerHTML = "Voltar"
    proximo.innerHTML = "Proximo"
    proximo.addEventListener('click', function(){
        artigo2();
    })
}
function artigo2(){
    artigo.classList.remove('invisivel');
    container.classList.add('invisivel');
    
    titulo.innerHTML = "Qual a importância?"
    img.innerHTML = "<img>"
    imgTag =  img.getElementsByTagName('img')[0]
    imgTag.src = "assets/img2.png"
    h2.innerHTML = "Qual a importância?"
    p.innerHTML = "Duis volutpat quam et arcu commodo, ut fermentum libero bibendum. Nunc euismod sagittis tortor et auctor. Vivamus rutrum fermentum suscipit. Aliquam gravida consequat nibh, at aliquet arcu hendrerit ultrices. Nullam bibendum lectus vitae aliquet viverra. Phasellus mattis non felis et faucibus. Nunc ac tristique justo, at fringilla mi. Duis nec enim ex. Nam varius elit non nisi      hendrerit, vitae suscipit massa ultricies.<br/><br/>Praesent vitae sapien et lacus mattis dictum vehicula non magna. Maecenas pellentesque massa tincidunt, pretium massa sed, efficitur ligula. Proin gravida id nibh eget rhoncus. Duis a lectus in diam cursus facilisis eget ac arcu. Etiam semper arcu ac malesuada ultricies. Maecenas luctus, eros in maximus mollis, sem erat mattis libero, sodales tristique velit mauris sed massa. Curabitur commodo dolor eget magna efficitur semper.<br><br>Curabitur ullamcorper id est ut feugiat. Fusce auctor, risus sit amet volutpat elementum, ipsum arcu semper augue, nec sodales turpis ipsum in orci. Curabitur in leo non felis iaculis viverra in sit amet dolor. Nullam fringilla, purus aliquet eleifend egestas, odio mi volutpat neque, a sodales mi mi eget purus. Sed et lacinia odio, non tempus urna. Fusce velit erat, malesuada fermentum sodales et, luctus vel augue. Etiam nec pulvinar dui. Proin venenatis, odio feugiat elementum mattis, nisl libero fringilla odio, eget lacinia arcu tellus id dui.<br><br>Nunc eu massa dignissim, lacinia quam et, dapibus urna. Phasellus dui ligula, finibus nec mattis sit amet, volutpat convallis libero. Cras id metus non mauris vulputate placerat. Mauris mattis tristique sapien vel lacinia. Nullam tincidunt id arcu nec pharetra. Curabitur pretium porta volutpat. Sed ut purus ac tortor porta pretium vel sit amet tellus. Aliquam turpis odio, placerat et viverra eget, consectetur eget nulla. Mauris consequat, metus a pellentesque ultricies, risus nisi ultrices turpis, ut ornare neque dolor eget justo.<br><br>Vestibulum varius sapien vitae nisi porttitor finibus. Sed nec congue ex. Pellentesque aliquet accumsan nisl, sit amet finibus libero elementum ut. Pellentesque pellentesque, erat sit amet feugiat sollicitudin, turpis lectus fermentum tortor, vitae condimentum urna metus sed ipsum. Vivamus odio nisl, maximus in porttitor non, maximus tristique dui. Maecenas ultricies vitae nisi ut ultrices. Cras finibus consequat orci, quis gravida nisl malesuada eget. Etiam pulvinar massa eu feugiat ullamcorper. Nunc scelerisque elit id elit pharetra, vel lacinia massa maximus"
    voltar.innerHTML = "Voltar"
    proximo.innerHTML = "Proximo"
    proximo.addEventListener('click', function(){
        artigo3();
    })
}
function artigo3(){
    artigo.classList.remove('invisivel');
    container.classList.add('invisivel');
    
    titulo.innerHTML = "Evite a automedicação"
    img.innerHTML = "<img>"
    imgTag =  img.getElementsByTagName('img')[0]
    imgTag.src = "assets/img3.png"
    h2.innerHTML = "Evite a automedicação"
    p.innerHTML = "Duis volutpat quam et arcu commodo, ut fermentum libero bibendum. Nunc euismod sagittis tortor et auctor. Vivamus rutrum fermentum suscipit. Aliquam gravida consequat nibh, at aliquet arcu hendrerit ultrices. Nullam bibendum lectus vitae aliquet viverra. Phasellus mattis non felis et faucibus. Nunc ac tristique justo, at fringilla mi. Duis nec enim ex. Nam varius elit non nisi      hendrerit, vitae suscipit massa ultricies.<br/><br/>Praesent vitae sapien et lacus mattis dictum vehicula non magna. Maecenas pellentesque massa tincidunt, pretium massa sed, efficitur ligula. Proin gravida id nibh eget rhoncus. Duis a lectus in diam cursus facilisis eget ac arcu. Etiam semper arcu ac malesuada ultricies. Maecenas luctus, eros in maximus mollis, sem erat mattis libero, sodales tristique velit mauris sed massa. Curabitur commodo dolor eget magna efficitur semper.<br><br>Curabitur ullamcorper id est ut feugiat. Fusce auctor, risus sit amet volutpat elementum, ipsum arcu semper augue, nec sodales turpis ipsum in orci. Curabitur in leo non felis iaculis viverra in sit amet dolor. Nullam fringilla, purus aliquet eleifend egestas, odio mi volutpat neque, a sodales mi mi eget purus. Sed et lacinia odio, non tempus urna. Fusce velit erat, malesuada fermentum sodales et, luctus vel augue. Etiam nec pulvinar dui. Proin venenatis, odio feugiat elementum mattis, nisl libero fringilla odio, eget lacinia arcu tellus id dui.<br><br>Nunc eu massa dignissim, lacinia quam et, dapibus urna. Phasellus dui ligula, finibus nec mattis sit amet, volutpat convallis libero. Cras id metus non mauris vulputate placerat. Mauris mattis tristique sapien vel lacinia. Nullam tincidunt id arcu nec pharetra. Curabitur pretium porta volutpat. Sed ut purus ac tortor porta pretium vel sit amet tellus. Aliquam turpis odio, placerat et viverra eget, consectetur eget nulla. Mauris consequat, metus a pellentesque ultricies, risus nisi ultrices turpis, ut ornare neque dolor eget justo.<br><br>Vestibulum varius sapien vitae nisi porttitor finibus. Sed nec congue ex. Pellentesque aliquet accumsan nisl, sit amet finibus libero elementum ut. Pellentesque pellentesque, erat sit amet feugiat sollicitudin, turpis lectus fermentum tortor, vitae condimentum urna metus sed ipsum. Vivamus odio nisl, maximus in porttitor non, maximus tristique dui. Maecenas ultricies vitae nisi ut ultrices. Cras finibus consequat orci, quis gravida nisl malesuada eget. Etiam pulvinar massa eu feugiat ullamcorper. Nunc scelerisque elit id elit pharetra, vel lacinia massa maximus"
    voltar.innerHTML = "Voltar"
    proximo.innerHTML = "Proximo"
    proximo.addEventListener('click', function(){
        artigo4();
    })
}
function artigo4(){
    artigo.classList.remove('invisivel');
    container.classList.add('invisivel');
    
    titulo.innerHTML = "Revolução da medicina"
    img.innerHTML = "<img>"
    imgTag =  img.getElementsByTagName('img')[0]
    imgTag.src = "assets/img4.png"
    h2.innerHTML = "Revolução da medicina"
    p.innerHTML = "Duis volutpat quam et arcu commodo, ut fermentum libero bibendum. Nunc euismod sagittis tortor et auctor. Vivamus rutrum fermentum suscipit. Aliquam gravida consequat nibh, at aliquet arcu hendrerit ultrices. Nullam bibendum lectus vitae aliquet viverra. Phasellus mattis non felis et faucibus. Nunc ac tristique justo, at fringilla mi. Duis nec enim ex. Nam varius elit non nisi      hendrerit, vitae suscipit massa ultricies.<br/><br/>Praesent vitae sapien et lacus mattis dictum vehicula non magna. Maecenas pellentesque massa tincidunt, pretium massa sed, efficitur ligula. Proin gravida id nibh eget rhoncus. Duis a lectus in diam cursus facilisis eget ac arcu. Etiam semper arcu ac malesuada ultricies. Maecenas luctus, eros in maximus mollis, sem erat mattis libero, sodales tristique velit mauris sed massa. Curabitur commodo dolor eget magna efficitur semper.<br><br>Curabitur ullamcorper id est ut feugiat. Fusce auctor, risus sit amet volutpat elementum, ipsum arcu semper augue, nec sodales turpis ipsum in orci. Curabitur in leo non felis iaculis viverra in sit amet dolor. Nullam fringilla, purus aliquet eleifend egestas, odio mi volutpat neque, a sodales mi mi eget purus. Sed et lacinia odio, non tempus urna. Fusce velit erat, malesuada fermentum sodales et, luctus vel augue. Etiam nec pulvinar dui. Proin venenatis, odio feugiat elementum mattis, nisl libero fringilla odio, eget lacinia arcu tellus id dui.<br><br>Nunc eu massa dignissim, lacinia quam et, dapibus urna. Phasellus dui ligula, finibus nec mattis sit amet, volutpat convallis libero. Cras id metus non mauris vulputate placerat. Mauris mattis tristique sapien vel lacinia. Nullam tincidunt id arcu nec pharetra. Curabitur pretium porta volutpat. Sed ut purus ac tortor porta pretium vel sit amet tellus. Aliquam turpis odio, placerat et viverra eget, consectetur eget nulla. Mauris consequat, metus a pellentesque ultricies, risus nisi ultrices turpis, ut ornare neque dolor eget justo.<br><br>Vestibulum varius sapien vitae nisi porttitor finibus. Sed nec congue ex. Pellentesque aliquet accumsan nisl, sit amet finibus libero elementum ut. Pellentesque pellentesque, erat sit amet feugiat sollicitudin, turpis lectus fermentum tortor, vitae condimentum urna metus sed ipsum. Vivamus odio nisl, maximus in porttitor non, maximus tristique dui. Maecenas ultricies vitae nisi ut ultrices. Cras finibus consequat orci, quis gravida nisl malesuada eget. Etiam pulvinar massa eu feugiat ullamcorper. Nunc scelerisque elit id elit pharetra, vel lacinia massa maximus"
    voltar.innerHTML = "Voltar"
    proximo.innerHTML = "Proximo"
    proximo.addEventListener('click', function(){
        artigo5();
    })
}
function artigo5(){
    artigo.classList.remove('invisivel');
    container.classList.add('invisivel');
    
    titulo.innerHTML = "Quais os benefícios"
    img.innerHTML = "<img>"
    imgTag =  img.getElementsByTagName('img')[0]
    imgTag.src = "assets/img5.png"
    h2.innerHTML = "Quais os benefícios"
    p.innerHTML = "Duis volutpat quam et arcu commodo, ut fermentum libero bibendum. Nunc euismod sagittis tortor et auctor. Vivamus rutrum fermentum suscipit. Aliquam gravida consequat nibh, at aliquet arcu hendrerit ultrices. Nullam bibendum lectus vitae aliquet viverra. Phasellus mattis non felis et faucibus. Nunc ac tristique justo, at fringilla mi. Duis nec enim ex. Nam varius elit non nisi      hendrerit, vitae suscipit massa ultricies.<br/><br/>Praesent vitae sapien et lacus mattis dictum vehicula non magna. Maecenas pellentesque massa tincidunt, pretium massa sed, efficitur ligula. Proin gravida id nibh eget rhoncus. Duis a lectus in diam cursus facilisis eget ac arcu. Etiam semper arcu ac malesuada ultricies. Maecenas luctus, eros in maximus mollis, sem erat mattis libero, sodales tristique velit mauris sed massa. Curabitur commodo dolor eget magna efficitur semper.<br><br>Curabitur ullamcorper id est ut feugiat. Fusce auctor, risus sit amet volutpat elementum, ipsum arcu semper augue, nec sodales turpis ipsum in orci. Curabitur in leo non felis iaculis viverra in sit amet dolor. Nullam fringilla, purus aliquet eleifend egestas, odio mi volutpat neque, a sodales mi mi eget purus. Sed et lacinia odio, non tempus urna. Fusce velit erat, malesuada fermentum sodales et, luctus vel augue. Etiam nec pulvinar dui. Proin venenatis, odio feugiat elementum mattis, nisl libero fringilla odio, eget lacinia arcu tellus id dui.<br><br>Nunc eu massa dignissim, lacinia quam et, dapibus urna. Phasellus dui ligula, finibus nec mattis sit amet, volutpat convallis libero. Cras id metus non mauris vulputate placerat. Mauris mattis tristique sapien vel lacinia. Nullam tincidunt id arcu nec pharetra. Curabitur pretium porta volutpat. Sed ut purus ac tortor porta pretium vel sit amet tellus. Aliquam turpis odio, placerat et viverra eget, consectetur eget nulla. Mauris consequat, metus a pellentesque ultricies, risus nisi ultrices turpis, ut ornare neque dolor eget justo.<br><br>Vestibulum varius sapien vitae nisi porttitor finibus. Sed nec congue ex. Pellentesque aliquet accumsan nisl, sit amet finibus libero elementum ut. Pellentesque pellentesque, erat sit amet feugiat sollicitudin, turpis lectus fermentum tortor, vitae condimentum urna metus sed ipsum. Vivamus odio nisl, maximus in porttitor non, maximus tristique dui. Maecenas ultricies vitae nisi ut ultrices. Cras finibus consequat orci, quis gravida nisl malesuada eget. Etiam pulvinar massa eu feugiat ullamcorper. Nunc scelerisque elit id elit pharetra, vel lacinia massa maximus"
    voltar.innerHTML = "Voltar"
    proximo.innerHTML = "Proximo"
    proximo.addEventListener('click', function(){
        artigo1();
    })
}
function voltarMenu(){
    artigo.classList.add('invisivel');
    container.classList.remove('invisivel');
}




$(function(){
    //menu-mobile
    $('#hamburger').click(function(){
        const menu = $('.menu-mobile-display');
        let display = menu.css('display');
        if(display == "none"){
            menu.fadeIn();
            document.getElementById("hamburger").src = "assets/close.png"
        }else{
            menu.fadeOut();
            document.getElementById("hamburger").src = "assets/hamburger.png"
        }
    })
    
})

    

