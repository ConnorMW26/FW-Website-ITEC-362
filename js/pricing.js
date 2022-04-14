var guest_prices = new Array();
guest_prices["two"] = 0;
guest_prices["two"] = 80;
guest_prices["three"] = 120;
guest_prices["four"] = 160;
guest_prices["five"] = 200;
guest_prices["six"] = 240;
guest_prices["seven"] = 280;
guest_prices["eight"] = 320;
guest_prices["nine"] = 360;
guest_prices["ten"] = 400;

var add_ons = new Array();
add_ons["wine"]=25;
add_ons["date"]=40;

function getGuestPrice()
{
    var cakeFillingPrice=0;
    var theForm = document.forms["pricingform"];
    var selectedGuest = theForm.elements["partysize"];

    selectedGuestPrice = guest_prices[selectedGuest.value];
    return selectedGuestPrice;
}

function getAddonPrice()
{
    var addonPrice=0;
    var theForm = document.forms["pricingform"];
    var chosenaddon = theForm.elements["chosenaddon"];

    for(var i = 0; i < chosenaddon.length; i++)
    {
        if(chosenaddon[i].checked)
        {
            addonPrice = add_ons[chosenaddon[i].value];
            break;
        }
    }
    return addonPrice;
}

function getTotal()
{
  var finalTotal = getGuestPrice() + getAddonPrice();
  document.getElementById('finalprice').innerHTML = "Total Price For Guests $"+finalTotal;
}
