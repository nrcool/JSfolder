//Call Back Function 

function firstfunc(){
    console.log(1);
}

function secondfunc(){
    console.log(2)
}

firstfunc();
secondfunc();

/* function firstfunc1(){
    setTimeout(() => {
      console.log(1)  
    }, 500);
}
 */
/* firstfunc1(); */


function secondfunc2(){
    console.log(2)
}

secondfunc();





let call=function functionToBeCalled(string){
    console.log("I was call by callback function .....", string);
    }
    
    function funcWithCallBack(callback){
        console.log("i am funcWithCallBack");
        callback("Callback function");         
    }
    
    funcWithCallBack(call);


    let callbackfunc=number=>{
        return number*number;
    }

    let mainfunc=(callback,c)=>{
        console.log(callback(5)*c);
    }

    mainfunc(callbackfunc,4);
    setTimeout(callbackfunc,1000);
  /*   setTimeout(function(){
        console.log("I am set time out");
    }, 1000); */

    let caller=string=>{
        console.log(string);
    }

    let WrapSettimeout=callback=>{
        console.log("I am wrapertimeout");
        setTimeout(()=>{
            console.log("I am Also settimeout");
            callback("I am a Call backfunction");
        },1000);
    };
    WrapSettimeout(caller);