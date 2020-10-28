let jump = require("jump.js")
const about = document.querySelector(".about-b")
const learn = document.querySelector(".learn-b")
const sched = document.querySelector(".sched-b")
const teach = document.querySelector(".teach-b")

about.addEventListener("click", () => {
    jump(document.querySelector(".about"))
})

learn.addEventListener("click", () => {
    jump(document.querySelector(".outcomes"))
})

sched.addEventListener("click", () => {
    jump(document.querySelector(".course"))
})

teach.addEventListener("click", () => {
    jump(document.querySelector(".teach"))
})