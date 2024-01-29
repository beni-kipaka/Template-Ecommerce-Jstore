

const iconToggleMobileNav = document.getElementById("toggleMobileNav")
const iconToggleCart = document.getElementById("openCart")
const closeMobileNavs = [].slice.call(document.getElementsByClassName("mobile-close"))


const toggleNav = (event)=>{

    const element = event.target 
    const className = element.dataset.mobile
    // console.log(element);
    const mobileNav = document.getElementsByClassName(className)[0]

    if(!mobileNav.classList.contains("none")){
        // add none
        mobileNav.classList.toggle("close")
        window.setTimeout(()=>{
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
            document.body.style.overflow = ""
        },1800)

    }else{
        // remove none
        mobileNav.classList.toggle("none")
        document.body.style.overflow = "hidden"

    }
}

iconToggleMobileNav.addEventListener("click", toggleNav)
iconToggleCart.addEventListener("click", toggleNav)

closeMobileNavs.forEach(item => {
    item.addEventListener("click", toggleNav)
})