// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// } here is the code my setattribute is repeted so using for in loop

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]) // here we don't need to creat props every time just loop doing the work!!
    }

    container.appendChild(domElement)
} 

const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)






