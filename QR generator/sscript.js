document.addEventListener("DOMContentLoaded",() =>{
    const qrtext= document.getElementById("qrtext")
    const generatebtn=document.getElementById("generate")
    const downloadbtn=document.getElementById("download")
    const qrcodeDiv=document.getElementById("qrcode")
    let qrcode=null;

    generatebtn.addEventListener("click",()=>{
        const text=qrtext.value.trim()

        if(!text){
            alert("please enter some text");
            return;
        }
        qrcodeDiv.innerHTML="";

        qrcode =new QRCode(qrcodeDiv,{
            text:text,
            height:200,
            width:200,
            colorDark:'#000000',
            colorLight:'#ffffff',
            correctLevel:QRCode.CorrectLevel.H,// 30% qrcode
        })

        downloadbtn.style.display="block"


    })

    downloadbtn.addEventListener("click",()=>{
        const canvas= qrcodeDiv.querySelector("canvas")
        if(!canvas){
            return;
        }
        const link=document.createElement("a");
        link.download="qrcode.png"
        link.href=canvas.toDataURL("image/png")
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })

    qrtext.addEventListener("keypress",(e) =>{
        if(e.key ==="Enter"){
            generatebtn.click();
        }
    })
})