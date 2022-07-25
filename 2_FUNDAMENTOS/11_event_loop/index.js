function a(){
    console.log("excutando a()")
}

function b(){
    console.log("excutando b()")
}

function c(){
    console.log("excutando c()")
    a()
    b()
}

c()
