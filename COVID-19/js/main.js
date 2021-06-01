const file = document.getElementById('file');
const btnFile = document.getElementById("btnFile");

btnFile.addEventListener("click",()=>{
    file.click();
});

file.onchange=function(e){
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
        let preview=document.getElementById('preview');
            image=document.createElement('img');
            image.src=reader.result;
            image.style.width="100%";
            image.style.height="100%";
            preview.innerHTML='';
            preview.append(image);
    }
}
