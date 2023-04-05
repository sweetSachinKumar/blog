console.log("sachin blog")


const reply = (rsp) =>{
document.getElementById(rsp).classList.toggle("thapa_show")

}



let liker = document.querySelectorAll(".like_btn")
liker.forEach( likeBtn => {
likeBtn.addEventListener("click", ()=> {
likeBtn.classList.toggle("liked")
})



})

