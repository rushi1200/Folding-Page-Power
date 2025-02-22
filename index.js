
        let headcount = document.querySelector(".folds");
        let unfold = document.querySelector("#unfoldbtn");
        let fold = document.querySelector("#foldbtn");
        let img = document.querySelector(".img");
        let thinkness = document.querySelector(".thinkness")
        let compare = document.querySelector(".compare");



        let foldcount = 0;
        let thicknesscount = 0.01;
 
        fold.addEventListener("click",()=>{
            foldcount++
            

            if(foldcount < 0){
               foldcount = 0
               thicknesscount = 0.1
            }else if(foldcount >= 23){
                foldcount = 0;
            }
            if(429496729.6 === thicknesscount){
                foldcount=0;
                thicknesscount = 0
            }
                thicknesscount *= 2

            headcount.innerHTML =`${foldcount} Folds`
            thinkness.innerHTML=`<h4>Your paper is now ${thicknesscount}cm tall</h4>`
            imger(foldcount,thicknesscount);
                        
        })

        unfold.addEventListener("click",()=>{
            foldcount--

            if(foldcount <= 0){
                foldcount = 0;
                thicknesscount = 0.1
            }
            headcount.innerHTML = `${foldcount} Folds`
            thicknesscount /= 2
              thinkness.innerHTML=`<h4>Your paper is now ${thicknesscount}cm tall</h4>`
            imger(foldcount,thicknesscount);
        })



        const imger = (foldcount)=>{
            
            if(foldcount <= 0){
                img.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYg8LSgViKyWy5gUUnZVC10HlGpX0oFBIfg&s" alt="paper`
                thinkness.innerHTML=`<h4>Your paper is now 0.01mm tall</h4>`
                compare.innerHTML = `<h3>Normal Page</h3>`
            }else if(foldcount === 1){
                img.src = `https://neal.fun/paper/hair.jpg`
                compare.innerHTML = `<h3>The human hair</h3>`
            }else if(foldcount === 2){
                img.src = `https://neal.fun/paper/sand.jpg`
                compare.innerHTML = `<b><h3>Grain of sand</h3></b>`
            }else if(foldcount === 3){
                img.src = `https://neal.fun/paper/pencil-tip.jpg`
                compare.innerHTML = `<b><h3>The width of a pencil's tip.</h3></b>`
            }else if(foldcount === 4){
                img.src = `	https://neal.fun/paper/spaghetti.jpg`
                compare.innerHTML = `<b><h3>The thickness of a strand of noodles</h3></b>`
            }else if(foldcount === 5){
                img.src = `	https://neal.fun/paper/ladybug.jpg`
                compare.innerHTML = `<b><h3>The height of a ladybug.</h3></b>`
            }else if(foldcount === 6){
                img.src = `https://neal.fun/paper/sunflower-seed.jpg`
                compare.innerHTML = `<b><h3>The thickness of a sunflower seed.</h3></b>`
            }else if(foldcount === 7){
                img.src = `https://neal.fun/paper/coffee-bean.jpg`
                compare.innerHTML = `<b><h3>The length of a coffee bean.</h3></b>`
            }else if(foldcount === 8){
                img.src = `https://neal.fun/paper/penny.jpg`
                compare.innerHTML = `<b><h3>The width of a penny.</h3></b>`
            }else if(foldcount === 9){
                img.src = `	https://neal.fun/paper/chicken-egg.jpg`
                compare.innerHTML = `<b><h3>The height of a chicken egg.</h3></b>`
            }else if(foldcount === 10){
                img.src = `	https://neal.fun/paper/hummingbird.jpg`
                compare.innerHTML = `<b><h3>It's now the height of a hummingbird.</h3></b>`
            }else if(foldcount === 11){
                img.src = `	https://neal.fun/paper/basketball.jpg`
                compare.innerHTML = `<b><h3>The height of a basketball.</h3></b>`
            }else if(foldcount === 12){
                img.src = `	https://neal.fun/paper/bowling-pin.jpg`
                compare.innerHTML = `<b><h3>The height of a bowling pin</h3></b>`
            }else if(foldcount === 13){
                img.src = `https://neal.fun/paper/cheetah.jpg`
                compare.innerHTML = `<b><h3>The height of a cheetah</h3></b>`
            }else if(foldcount === 14){
                img.src = `https://neal.fun/paper/woman.jpg`
                compare.innerHTML = `<b><h3>It's now the height of an average woman.</h3></b>`
            }else if(foldcount === 15){
                img.src = `https://neal.fun/paper/beetle.jpg`
                compare.innerHTML = `<b><h3>The length of a Volkswagen Beetle.</h3></b>`
            }else if(foldcount === 16){
                img.src = `https://neal.fun/paper/giraffe.jpg`
                compare.innerHTML = `<b><h3>The height of a giraffe.</h3></b>`
            }else if(foldcount === 17){
                img.src = `https://neal.fun/paper/oak-tree.jpg`
                compare.innerHTML = `<b><h3>About the height of an oak tree.</h3></b>`
            }else if(foldcount === 18){
                img.src = `https://neal.fun/paper/blue-whale.jpg`
                compare.innerHTML = `<b><h3>The length of a blue whale.</h3></b>`
            }else if(foldcount === 19){
                img.src = `https://neal.fun/paper/boeing.jpg`
                compare.innerHTML = `<b><h3>The wingspan of a Boeing 747.</h3></b>`
            }else if(foldcount === 20){
                img.src = `https://neal.fun/paper/statue-of-liberty.jpg`
                compare.innerHTML = `<b><h3>About the height of the Statue of Liberty.</h3></b>`
            }else if(foldcount === 21){
                img.src = `https://neal.fun/paper/gateway-arch.jpg`
                compare.innerHTML = `<b><h3>About the height of the Gateway Arch.</h3></b>`
            }else if(foldcount === 22){
                img.src = `https://neal.fun/paper/eiffel-tower.jpg`
                compare.innerHTML = `<b><h3>Taller than the Eiffel Tower.</h3></b>`
            }else if(foldcount === 23){

                img.src = `	https://neal.fun/paper/burj-khalifa.jpg`
                compare.innerHTML = `<b><h3>It's now as tall as the Burj Khalifa</h3></b>`
                foldcount = 0;
            }


            

        }
        


