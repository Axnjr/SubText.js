class SpiltTextToSubElements {
    constructor(){
        document.querySelectorAll(".SplitedText").forEach((item)=>{
            const arr = item.getAttribute("id")
            const which_element = item.getAttribute("class").split(" ")[1]
            const Sub_element_class = item.getAttribute("class").split(" ")[2]
            arr.split("").map((val,id)=>{
            const spans = document.createElement(which_element)
            const span_text = document.createTextNode(val)
            spans.appendChild(span_text)
            spans.classList.add(Sub_element_class)
            item.appendChild(spans)
            })
        }) 
    }
}

window.addEventListener("load",()=>{
    let obj = new SpiltTextToSubElements()
})