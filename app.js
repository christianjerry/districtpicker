document.addEventListener("DOMContentLoaded",()=>{

    const catchSelect=document.querySelector("#provinces");
    catchSelect.addEventListener("change",e=>{
        e.preventDefault();
        loadDistrict(e.target.value);
    })
 function loadDistrict(province){
     const districtSelector=document.querySelector("#district");
     fetch("districts.json",{headers:{
         "content-type":"application/json"
     }}).then(res=>{
       return res.json();
     }).then(data=>{
        districtSelector.replaceChildren();
       for(i in data){
           if(data[i].name===province){
            for(let x =0;x<data[i].district.length;x++){
                const option=document.createElement("option");
                option.setAttribute("value",data[i].district[x]);
                option.innerHTML=data[i].district[x];
                districtSelector.append(option);
            }
           }
       }
     })
     .catch(err=>{
         console.log(err);
     })
 }
 function load_province(){
    const provinceSelector=document.querySelector("#provinces");
    fetch("districts.json",{headers:{
        "content-type":"application/json"
    }}).then(res=>{
      return res.json();
    }).then(data=>{
      for(i in data){
               const option=document.createElement("option");
               option.setAttribute("value",data[i].name);
               option.innerHTML=data[i].name;
               provinceSelector.append(option);
           }
          })
    .catch(err=>{
        console.log(err);
    })
}
load_province();
})