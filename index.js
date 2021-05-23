//Global Variables
var money = 0;
var food = 80;
var water = 80;

var foodConsumption = setInterval(function() {
    if(food > 0) {
        food--;
        document.getElementById("food").innerHTML = food + "/100";
    } else if(food <= 0) {
        //Start Dying
    }
}, 8000);

var waterConsumption = setInterval(function() {
    if(water > 0) {
        water--;
        document.getElementById("water").innerHTML = water + "/100";
    } else if(water <= 0) {
        //Start Dying
    }
}, 7000);




/*

Old Inventory System

function create() {
    slotState = [];

    for(i = 0; i < 36; i++) {
        var slot = document.createElement("div");
        slot.id = "slot" + i;
        slot.innerHTML = i;
        slot.style.margin = "1vw";
        slotState[i] = false;

        var main = document.getElementById("wrapper");
        main.appendChild(slot);
    }
}

create();

var list = [
    item0 = {
        name: "Water",
        quantity: "2"
    },
    item1 = {
        name: "Cookies",
        quantity: 0
    },
    item2 = {
        name: "M1911",
        quantity: 1
    },
    item3 = {
        name: "Copper Ingot",
        quantity: 0
    }
];

function listItems() {
    for(i = 0; i < 36; i++) {
        if(slotState[i] == false) {
            for(j = 0; j < list.length; j++) {
                if(list[j].quantity > 0) {
                    document.getElementById("slot" + i).innerHTML = list[j].name;
                    console.log(list[j].name);
                }
            }
        }
    }
}

listItems();

*/

var items = [
    item0 = {
        name: "Grenade Ammo",
        image: "ammo_cw_gl",
        price: null,
        rarity: "item"
    },
    item1 = {
        name: "Pistol Ammo",
        image: "ammo_cw_pistol",
        price: null,
        rarity: "item"
    },
    item2 = {
        name: "Rifle Ammo",
        image: "ammo_cw_rifle",
        price: null,
        rarity: "item"
    },
    item3 = {
        name: "Shotgun Ammo",
        image: "ammo_cw_shotgun",
        price: null,
        rarity: "item"
    },
    item4 = {
        name: "Sniper Ammo",
        image: "ammo_cw_sniper",
        price: null,
        rarity: "item"
    },
    item5 = {
        name: "Cheap Bag",
        image: "cheap bag_0",
        price: null,
        rarity: "item"
    },
    item6 = {
        name: "Christmas Tree",
        image: "christmas_tree",
        price: null,
        rarity: "christmas"
    },
    item7 = {
        name: "Adrealine",
        image: "consumable_adrealine_injector",
        price: null,
        rarity: "medical"
    },
    item8 = {
        name: "Medkit",
        image: "consumable_medkit_job",
        price: null,
        rarity: "medical"
    },
    item9 = {
        name: "Crafting Multiplier (15 Minutes)",
        image: "crafting1",
        price: null,
        rarity: "multiplier"
    },
    item10 = {
        name: "Crafting Multiplier (30 Minutes)",
        image: "crafting1",
        price: null,
        rarity: "multiplier"
    },
    item11 = {
        name: "Crafting Multiplier (1 Hour)",
        image: "crafting1",
        price: null,
        rarity: "multiplier"
    }
];

function createInventory() {
    for(i = 0; i < items.length; i++) {
        var item = document.createElement("div");
        item.id = "item" + i;
        item.style.height = "5vw";
        item.style.border = "1px solid white";
        item.style.cursor = "pointer";
        item.setAttribute("onclick", "alert('test')")

        var itemImage = document.createElement("img");
        itemImage.id = "item-image" + i;
        itemImage.style.width = "4vw";
        itemImage.style.height = "4vw";
        itemImage.style.position = "relative";
        itemImage.style.top = "0.5vw";
        itemImage.style.left = "0.5vw";
        if(items[i].rarity == "item") {
            itemImage.style.border = "1px solid gray";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
        } else if(items[i].rarity == "pistol") {
            itemImage.style.border = "1px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(items[i].rarity == "rifle") {
            itemImage.style.border = "1px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(items[i].rarity == "knife") {
            itemImage.style.border = "1px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(items[i].rarity == "shotgun") {
            itemImage.style.border = "1px solid #7f00ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
        } else if(items[i].rarity == "exotic") {
            itemImage.style.border = "1px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        } else if(items[i].rarity == "police") {
            itemImage.style.border = "1px solid #0015ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
        } else if(items[i].rarity == "medical") {
            itemImage.style.border = "1px solid #ff008c";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(255, 150, 207, 1), rgba(255, 0, 140, 0.25))";
        } else if(items[i].rarity == "multiplier") {
            itemImage.style.border = "1px solid #000000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(137, 137, 137, 1), rgba(0, 0, 0, 0.25))";
        } else if(items[i].rarity == "christmas") {
            itemImage.style.border = "1px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(0, 255, 0, 1), rgba(174, 255, 0, 0.35), rgba(255, 0, 0, 0.25))";
        }
        itemImage.setAttribute("src", "images/items/" + items[i].image + ".png");
        itemImage.setAttribute("title", items[i].name);

        var itemName = document.createElement("div");
        itemName.id = "item-name" + i;
        itemName.style.color = "white";
        itemName.style.fontSize = "1.5vw";
        itemName.style.fontWeight = "600";
        itemName.style.position = "relative";
        itemName.style.top = "-4vw";
        itemName.style.left = "5vw";
        itemName.innerHTML = items[i].name;

        var main = document.getElementById("items-container");
        main.appendChild(item);
        item.appendChild(itemImage);
        item.appendChild(itemName);
    }
}

createInventory();

var toggled = false;

function openInventory(event) {
    var key = event.key;
    if(key == "q" && toggled == false) {
        document.getElementById("inventory-container").style.visibility = "visible";
        toggled = true;
    } else if(key == "q" && toggled == true) {
        document.getElementById("inventory-container").style.visibility = "hidden";
        toggled = false;
    }
}

function openTab(tab) {
    if(tab == 1) {

    } else if(tab == 2) {
        
    } else if(tab == 3) {

    } else if(tab == 4) {

    } else if(tab == 5) {
        
    }
}