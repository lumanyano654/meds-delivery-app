module.exports = function medsApp(){

    var codeList = {}



    function diffCode(code){

        var list = ["3656","4546","3233","4464"]


        if (list.includes(code) ){
            return true
        }
        else{
            return false
        }
    }
     
    function message(msg){
        if (msg.value === "not-delivered"){
            return "sorry for the inconvinience"
        }
    }

   
            
       
    
    return{
        diffCode,
        message,
      

        
        }
    }
