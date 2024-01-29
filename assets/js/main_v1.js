

const iconToggleMobileNav = document.getElementById("toggleMobileNav")
const closeMobileNavs = [].slice.call(document.getElementsByClassName("mobile-close"))


const toggleNav = ()=>{
    const mobileNav = document.getElementsByClassName("mobile")[0]

    if(!mobileNav.classList.contains("none")){
        // add none
        mobileNav.classList.toggle("close")
        window.setTimeout(()=>{
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
            document.body.style.overflow = ""
        },2000)

    }else{
        // remove none
        mobileNav.classList.toggle("none")
        document.body.style.overflow = "hidden"

    }
}

iconToggleMobileNav.addEventListener("click", toggleNav)

closeMobileNavs.forEach(item => {
    item.addEventListener("click", toggleNav)
})