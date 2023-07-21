let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let submitBtn = document.getElementById("submit");
let alertBox = document.getElementById('alert');
let closeItem = document.getElementById("close");
let chekNameItem = document.getElementById("checkName");
let chekUrlItem = document.getElementById("checkUrl");
let wrongName = document.getElementById("wrongName");
let wrongUrl = document.getElementById("wrongUrl");

let urlList;
if(localStorage.getItem("webList") === null){
    urlList = [];
} else {
   urlList = JSON.parse(localStorage.getItem("webList"));
   showData()
}
closeItem.onclick = function() {
    alertBox.setAttribute('style', 'display:none !important');
}

 submitBtn.onclick=function(){
    if(WebsiteNameValidation() === true && WebsiteUrlValidation() === true ) {
        let websites = {
            websiteName: siteName.value,
            websiteUrl: siteUrl.value
        }
        for(let i=0;i<urlList.length;i++) {
            if(urlList[i].websiteName === siteName.value) {
              return  alert("not allow Duplcate");
            } else {
                if(urlList[i].websiteName === siteName.value) {
                    return  alert("not allow Duplcate");
                  }
            }
        }
        urlList.push(websites);
        console.log(urlList);
        showData();
        localStorage.setItem("webList" , JSON.stringify(urlList));
        console.log("true done");
        reset();
    }else {
       alertBox.setAttribute('style', 'display:flex !important');
    }
}
function noDublcate() {
    
}
function WebsiteNameValidation() {
    let rgex = /^[a-zA-Z]{3,20}$/
    let websitNameValidat = siteName.value;
    if(rgex.test(websitNameValidat)) {
        console.log("match")
        siteName.setAttribute('style', 'box-shadow: 0 0 0 0.25rem  rgb(25 135 84 / 25%); border: 1px solid green !important;')
        chekNameItem.setAttribute('style', 'display:inline !important')
        wrongName.setAttribute('style', 'display:none !important')
        return true;
    }else {
        console.log("No match")
        wrongName.setAttribute('style', 'display:inline !important')
        chekNameItem.setAttribute('style', 'display:none !important')
        siteName.setAttribute('style', 'box-shadow: 0 0 0 0.25rem  rgb(220 53 69 / 25%); border: 1px solid red !important;')
        return false; 
    }
}
function WebsiteUrlValidation() {
    let rgex = /^[a-zA-Z][^ "]+(.com|.net|.org)$/
    let websitUrValidat = siteUrl.value;
    if(rgex.test(websitUrValidat)) {
        console.log("match")
        siteUrl.setAttribute('style', 'box-shadow: 0 0 0 0.25rem  rgb(25 135 84 / 25%); border: 1px solid green !important;')
        chekUrlItem.setAttribute('style', 'display:inline !important')
        wrongUrl.setAttribute('style', 'display:none !important')
        return true;
    }else {
        console.log("No match") 
        wrongUrl.setAttribute('style', 'display:inline !important')
        chekUrlItem.setAttribute('style', 'display:none !important')
        siteUrl.setAttribute('style', 'box-shadow: 0 0 0 0.25rem  rgb(220 53 69 / 25%); border: 1px solid red !important;')
        return false;
    }
}

function reset() {
    siteName.value = "" ;
    siteUrl.value = "" ;
}

let temp;
function showData() {
    let trs = `` ;
    for(let i=0;i<urlList.length;i++) {
    trs += ` <tr>
    <td>${i+1}</td>
    <td>${urlList[i].websiteName}</td>
    <td><button class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i><a id="link" href="${urlList[i].websiteUrl}" target="_blank"> Visit</a></button></td>
    <td><button class="btn btn-danger" onclick= "delte(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
  </tr>`
    }
    document.getElementById('tableBody').innerHTML = trs; 
}
showData()

function delte(index) {
    urlList.splice(index,1);
    localStorage.setItem("webList" , JSON.stringify(urlList))
    showData()
}


