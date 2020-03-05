
let btnOne = document.getElementById("btnPost");
btnOne.addEventListener("click", SubmitHandler.handleNewButton());

let txt1 = document.getElementById("txtInput1");
let txt2 = document.getElementById("txtInput2");


let SubmitHandler =
    {
        handleNewButton : function()
            {
                let contentObject =
                    {
                        txtBox1: txt1.value,
                        txtBox2: txt2.value,

                    };
                Blueit.sendNewPostToApi(contentObject);
            }
    };
