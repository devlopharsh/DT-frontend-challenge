let operand = document.querySelector(".selector")


operand.addEventListener("click", () => {
    document.querySelector(".journeyboard").children[1].innerHTML = `<span>
                <svg width="8" height="27" viewBox="0 0 8 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.368 3.96V0.971998H7.136V27H3.824V3.96H0.368Z" fill="#0029FF" />
                </svg>
            </span>`
    document.querySelector(".journeyboard").style.width = '120px'
    document.querySelector(".open").style.display = "block"
    document.querySelector(".selector").style.display = "none"
    document.querySelector(".upperheader").children[0].innerHTML = ``

});

let revoperand = document.querySelector(".open")
revoperand.addEventListener('click', () => {
    document.querySelector(".journeyboard").children[1].innerHTML = `<li><b>Explore the world of management</b></li>
            <li> Technical Project Management</li>
            <li> Threadbuild</li>
            <li> Structure your Pointers </li>
            <li> 4SA Methods </li>`
    document.querySelector(".journeyboard").style.width = '370px'
    document.querySelector(".open").style.display = "none"
    document.querySelector(".selector").style.display = "block"
    document.querySelector(".upperheader").children[0].innerHTML = `Journey Board`
});



// console.log(operand);