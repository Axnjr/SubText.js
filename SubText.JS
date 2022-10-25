class SpiltTextToSubElements {
    constructor(){
        document.querySelectorAll(".SplitedText").forEach((item)=>{
            const arr = item.getAttribute("text")
            const which_element = item.getAttribute("subElementTag")
            const Sub_element_class = item.getAttribute("subElementClass")
            const type = item.getAttribute("splitType")
            if(type==="letter" || type==="letters" || type===null){
                arr.split("").map((val)=>{
                const spans = document.createElement(which_element)
                spans.innerText=val
                item.appendChild(spans)
                spans.setAttribute("class",Sub_element_class)
                })
            }
            if(type==="words" || type==="word"){
                arr.split(" ").map((val)=>{
                    const spans = document.createElement(which_element)
                    spans.innerText=val
                    item.appendChild(spans)
                    spans.setAttribute("class",Sub_element_class)
                })
            }
            if(type!="letters" && type!="words" && type!="letter" && type!="word" && type!=null){
                throw `SubTextJS Error :-> Can't get this type "${type}" ! You can choose between letters or words `
            }
        }) 
    }
}

window.addEventListener("load",()=>{
    let obj = new SpiltTextToSubElements()
})


