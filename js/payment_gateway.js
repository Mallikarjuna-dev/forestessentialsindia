document.querySelector("button").addEventListener("click", checkOut);
var userarr = [];
console.log(userarr);

function checkOut() {
    var mail = document.querySelector("#email").value;
    var fstname = document.querySelector("#fname").value;
    var lstname = document.querySelector("#lname").value;
    var adrs1 = document.querySelector("#ads1").value;
    var adrs2 = document.querySelector("#ads2").value;
    var cty = document.querySelector("#city").value;
    var state1 = document.querySelector("#state1").value;
    var zip1 = document.querySelector("#zip1").value;
    var country = document.querySelector("#country").value;
    var num = document.querySelector("#num").value;
    var crdnm = document.querySelector("#crdnm").value;
    var crdnum = document.querySelector("#crdnum").value;
    var exprdt = document.querySelector("#exdate").value;
    var cvsnum = document.querySelector("#cvsnum").value;
    var state2 = document.querySelector("#state2").value;
    var zip2 = document.querySelector("#zip2").value;

    var userobj = {
        email: mail,
        fstnm: fstname,
        lstnm: lstname,
        address1: adrs1,
        address2: adrs2,
        city: cty,
        states1: state1,
        zips1: zip1,
        countryy: country,
        number: num,
        crdname: crdnm,
        cardnum: crdnum,
        expirydt: exprdt,
        cvsnumber: cvsnum,
        states2: state2,
        zips2: zip2
    };

    userarr.push(userobj);
    localStorage.setItem("userDate", JSON.stringify(userarr));
    alert("THANK YOU, Your order has been placed")
}
