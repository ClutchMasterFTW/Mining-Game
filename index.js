//Global Variables
var money = 0;
var food = 80;
var water = 80;
var health = 100;

//Levels
var miningLevel = 1;
var miningLevelEXP = 0;
var miningLevelEXPCap = 50;

var woodcuttingLevel = 1;
var woodcuttingLevelEXP = 0;
var woodcuttingLevelCap = 50;

var craftingLevel = 1;
var craftingLevelEXP = 0;
var craftingLevelCap = 50;

var chemistryLevel = 1;
var chemistryLevelEXP = 0;
var chemistryLevelCap = 50;

var currentPickaxe = null;

var foodConsumption = setInterval(function() {
    if(food > 0) {
        food--;
        document.getElementById("food").innerHTML = food + "/100";
        foodDyingVariable = false;
    } else if(food <= 0) {
        //Start Dying
        foodDyingVariable = true;
        foodDying();
    }
}, 8000);

var waterConsumption = setInterval(function() {
    if(water > 0) {
        water--;
        document.getElementById("water").innerHTML = water + "/100";
        waterDyingVariable = false;
    } else if(water <= 0) {
        //Start Dying
        waterDyingVariable = true;
        waterDying();
    }
}, 7000);

function waterDying() {
    if(waterDyingVariable == true) {
        waterDyingInterval = setInterval(function() {
            if(health <= 0) {
                //Critical Condition
                document.getElementById("status-text").innerHTML = "Critical Condition!";
                document.getElementById("status-text").style.color = "red";
                document.getElementById("status-text").style.fontWeight = "bold";
                
                startCritical();
            } else {
                health--;
                document.getElementById("health").style.visibility = "visible";
                document.getElementById("health").innerHTML = "Health Remaining: " + health;
            }
        }, 2000);
        document.getElementById("status-container").style.visibility = "visible";
    } else if(waterDyingVariable == false) {
        clearInterval(waterDyingInterval);
        document.getElementById("status-container").style.visibility = "hidden";
    }
}

function foodDying() {
    if(foodDyingVariable == true) {
        foodDyingInterval = setInterval(function() {
            if(health <= 0) {
                //Critical Condition
                document.getElementById("status-text").innerHTML = "Critical Condition!";
                document.getElementById("status-text").style.color = "red";
                document.getElementById("status-text").style.fontWeight = "bold";
                
                startCritical();
            } else {
                health--;
                document.getElementById("health").style.visibility = "visible";
                document.getElementById("health").innerHTML = "Health Remaining: " + health;
            }
        }, 2000);
        document.getElementById("status-container").style.visibility = "visible";
    } else if(foodDyingVariable == false) {
        clearInterval(foodDyingInterval);
        document.getElementById("status-container").style.visibility = "hidden";
    }
}

var isCriticalActive = true;

function startCritical() {
    if(isCriticalActive == true && health <= 0) {
        isCriticalActive = false;
        sec = 120;
        var deathInterval = setInterval(function() {
            if(sec != 0) {
                sec--;
                document.getElementById("health").innerHTML = "Time remaining: " + sec + " seconds.";
            } else {
                document.getElementById("status-text").innerHTML = "You are Deceased.";
                document.getElementById("status-text").style.color = "black";
                document.getElementById("status-text").style.fontWeight = "bold";
                clearInterval(waterDyingInterval);
                clearInterval(foodDyingInterval);
            }
        }, 1000);
    } else if(health > 0) {
        clearInterval(deathInterval);
    }
}

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
    /*item0 = {
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
        rarity: "festive:christmas"
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
    }*/
    {
        name: "Stone Chunk",
        image: "mat_stonechunk",
        price: 3,
        rarity: "item",
        amount: 0,
        description: "A simple stone chunk, used to craft some furniture."
    },
    {
        name: "Copper Chunk",
        image: "mat_copperchunk_2",
        price: 11,
        rarity: "item",
        amount: 0,
        description: "Can be turned into crushed copper using a ore crusher."
    },
    {
        name: "Crushed Copper",
        image: "mat_copper",
        price: 5,
        rarity: "item",
        amount: 0,
        description: "Can be smelted into copper ingots using a furnace."
    },
    {
        name: "Copper Ingot",
        image: "mat_metal",
        price: 52,
        rarity: "item",
        amount: 0,
        description: "A odd metal which turns green after a while. Can be used to craft certain weapons."
    },
    {
        name: "Coal Chunk",
        image: "mat_coalchunk_1",
        price: 15,
        rarity: "item",
        amount: 0,
        description: "The most useful ore, which can be used to smelt all other ores when broken down into crushed coal."
    },
    {
        name: "Crushed Coal",
        image: "mat_coal",
        price: 7,
        rarity: "item",
        amount: 0,
        description: "Used to smelt other crushed ores into ingots."
    },
    {
        name: "Iron Chunk",
        image: "mat_ironchunk_3",
        price: 23,
        rarity: "item",
        amount: 0,
        description: "A heavy and useful ore chunk. When crushed, will yield crushed iron."
    },
    {
        name: "Crushed Iron",
        image: "mat_iron",
        price: 8.5,
        rarity: "item",
        amount: 0,
        description: "When paired with crushed coal, can be smelted into iron ingots."
    },
    {
        name: "Iron Ingot",
        image: "mat_metal_iron_1",
        price: 88,
        rarity: "item",
        amount: 0,
        description: "Shiny, yet dull. Can be used in many weapon recipes."
    },
    {
        name: "Steel Ingot",
        image: "mat_metal_steel_1",
        price: 325,
        rarity: "item",
        amount: 0,
        description: "An extremely strong metal. Used in many high-rise buildings due to its strength."
    },
    {
        name: "Silver Chunk",
        image: "mat_silverchunk_5",
        price: 29,
        rarity: "item",
        amount: 0
    },
    {
        name: "Crushed Silver",
        image: "mat_silver",
        price: 10,
        rarity: "item",
        amount: 0
    },
    {
        name: "Silver Ingot",
        image: "mat_metal_silver_3",
        price: 112,
        rarity: "item",
        amount: 0
    },
    {
        name: "Gold Chunk",
        image: "mat_goldchunk_4",
        price: 37,
        rarity: "item",
        amount: 0
    },
    {
        name: "Crushed Gold",
        image: "mat_gold",
        price: 13,
        rarity: "item",
        amount: 0
    },
    {
        name: "Gold Ingot",
        image: "mat_metal_gold_2",
        price: 142,
        rarity: "item",
        amount: 0
    },
    {
        name: "Titanium Chunk",
        image: "mat_titaniumchunk_6",
        price: 45,
        rarity: "item",
        amount: 0
    },
    {
        name: "Crushed Titanium",
        image: "mat_titanium",
        price: 15,
        rarity: "item",
        amount: 0
    },
    {
        name: "Titanium Ingot",
        image: "mat_metal_titanium_4",
        price: 200,
        rarity: "item",
        amount: 0
    },
];

function createInventory() {
    for(i = 0; i < items.length; i++) {
        var item = document.createElement("div");
        item.id = "item" + i;
        item.style.height = "5vw";
        item.style.border = "1px solid white";
        item.style.cursor = "pointer";
        item.setAttribute("onclick", "showItemInfo(this.id)");

        var itemImage = document.createElement("img");
        itemImage.id = "item-image" + i;
        itemImage.style.width = "4vw";
        itemImage.style.height = "4vw";
        itemImage.style.position = "relative";
        itemImage.style.top = "0.5vw";
        itemImage.style.left = "0.5vw";
        if(items[i].rarity == "item") {
            itemImage.style.border = "2px solid gray";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
        } else if(items[i].rarity == "pistol") {
            itemImage.style.border = "2px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(items[i].rarity == "rifle") {
            itemImage.style.border = "2px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(items[i].rarity == "knife") {
            itemImage.style.border = "2px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(items[i].rarity == "shotgun") {
            itemImage.style.border = "2px solid #7f00ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
        } else if(items[i].rarity == "exotic") {
            itemImage.style.border = "2px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        } else if(items[i].rarity == "police") {
            itemImage.style.border = "2px solid #0015ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
        } else if(items[i].rarity == "medical") {
            itemImage.style.border = "2px solid #ff008c";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(255, 150, 207, 1), rgba(255, 0, 140, 0.25))";
        } else if(items[i].rarity == "multiplier") {
            itemImage.style.border = "2px solid #000000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(137, 137, 137, 1), rgba(0, 0, 0, 0.25))";
        } else if(items[i].rarity == "festive:christmas") {
            itemImage.style.border = "2px solid #ff0000";
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

        var itemAmount = document.createElement("div");
        itemAmount.id = "item-amount" + i;
        itemAmount.style.color = "white";
        itemAmount.style.fontSize = "1.5vw";
        itemAmount.style.fontWeight = "500";
        itemAmount.style.position = "relative";
        itemAmount.style.top = "-4vw";
        itemAmount.style.left = "5vw";
        itemAmount.innerHTML = "Quantity: " + items[i].amount;

        //Below may cause issues later...
        var quantityInterval = setInterval(function() {
            for(i = 0; i < items.length; i++) {
                document.getElementById("item-amount" + i).innerHTML = "Quantity: " + items[i].amount;
            }
        }, 1000);
        ////////////////////////////////////////////////////////
        //Change itemAmount innerHTML whenever inventory opens//
        ////////////////////////////////////////////////////////

        var main = document.getElementById("items-container");
        main.appendChild(item);
        item.appendChild(itemImage);
        item.appendChild(itemName);
        item.appendChild(itemAmount);
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

var itemDescriptionContainerCreated = false;

function showItemInfo(id) {
    var sliced = id.slice(4);
    
    if(itemDescriptionContainerCreated == false) {
        itemDescriptionContainer = document.createElement("div");
        itemDescriptionContainer.id = "item-description-container";
        itemDescriptionContainer.style.width = "25vw";
        itemDescriptionContainer.style.height = "37.5vw";
        itemDescriptionContainer.style.border = "1px solid white";
        itemDescriptionContainer.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
        itemDescriptionContainer.style.position = "absolute";
        itemDescriptionContainer.style.top = "4.5vw";
        itemDescriptionContainer.style.left = "72vw";

        itemDescriptionName = document.createElement("div");
        itemDescriptionName.id = "item-description-name";
        if(items[sliced].rarity == "item") {
            itemDescriptionName.style.background = "-webkit-linear-gradient(gray, white)";
        }
        itemDescriptionName.style.fontSize = "2vw";
        itemDescriptionName.style.fontWeight = "bold";
        itemDescriptionName.style.textAlign = "left";
        itemDescriptionName.style.webkitBackgroundClip = "text";
        itemDescriptionName.style.webkitTextFillColor = "transparent";
        itemDescriptionName.style.position = "relative";
        itemDescriptionName.style.top = "-5vw";
        itemDescriptionName.style.left = "6vw";
        itemDescriptionName.innerHTML = items[sliced].name;

        itemDescriptionImage = document.createElement("img");
        itemDescriptionImage.id = "item-description-image";
        itemDescriptionImage.style.width = "5vw";
        itemDescriptionImage.style.height = "5vw";
        itemDescriptionImage.style.position = "relative";
        itemDescriptionImage.style.top = "0.5vw";
        itemDescriptionImage.style.left = "0.5vw";
        if(items[sliced].rarity == "item") {
            itemDescriptionImage.style.border = "2px solid gray";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
        } else if(items[sliced].rarity == "pistol") {
            itemDescriptionImage.style.border = "2px solid #006eff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(items[sliced].rarity == "rifle") {
            itemDescriptionImage.style.border = "2px solid #ff8c00";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(items[sliced].rarity == "knife") {
            itemDescriptionImage.style.border = "2px solid #ff0000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(items[sliced].rarity == "shotgun") {
            itemDescriptionImage.style.border = "2px solid #7f00ff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
        } else if(items[sliced].rarity == "exotic") {
            itemDescriptionImage.style.border = "2px solid #eeff00";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        } else if(items[sliced].rarity == "police") {
            itemDescriptionImage.style.border = "2px solid #0015ff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
        } else if(items[sliced].rarity == "medical") {
            itemDescriptionImage.style.border = "2px solid #ff008c";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(255, 150, 207, 1), rgba(255, 0, 140, 0.25))";
        } else if(items[sliced].rarity == "multiplier") {
            itemDescriptionImage.style.border = "2px solid #000000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(137, 137, 137, 1), rgba(0, 0, 0, 0.25))";
        } else if(items[sliced].rarity == "festive:christmas") {
            itemDescriptionImage.style.border = "2px solid #ff0000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(0, 255, 0, 1), rgba(174, 255, 0, 0.35), rgba(255, 0, 0, 0.25))";
        }
        itemDescriptionImage.setAttribute("src", "images/items/" + items[sliced].image + ".png");
        itemDescriptionImage.setAttribute("title", items[sliced].name);

        itemDescriptionQuantity = document.createElement("div");
        itemDescriptionQuantity.id = "item-description-quantity";
        itemDescriptionQuantity.style.fontSize = "1.5vw";
        itemDescriptionQuantity.style.fontWeight = "600";
        itemDescriptionQuantity.style.color = "white";
        itemDescriptionQuantity.style.position = "relative";
        itemDescriptionQuantity.style.top = "-5vw";
        itemDescriptionQuantity.style.left = "6vw";
        itemDescriptionQuantity.innerHTML = "Quantity: " + items[sliced].amount;

        itemDescriptionText = document.createElement("div");
        itemDescriptionText.id = "item-description-text";
        itemDescriptionText.style.color = "white";
        itemDescriptionText.style.fontSize = "1.75vw";
        itemDescriptionText.style.fontWeight = "500";
        itemDescriptionText.style.position = "relative";
        itemDescriptionText.style.top = "-5vw";
        itemDescriptionText.style.left = "0vw";
        itemDescriptionText.style.padding = "1vw";
        itemDescriptionText.innerHTML = items[sliced].description;

        var main = document.getElementById("inventory-container");
        main.appendChild(itemDescriptionContainer);
        itemDescriptionContainer.appendChild(itemDescriptionImage);
        itemDescriptionContainer.appendChild(itemDescriptionName);
        itemDescriptionContainer.appendChild(itemDescriptionQuantity);
        itemDescriptionContainer.appendChild(itemDescriptionText);

        itemDescriptionContainerCreated = true;
    } else {
        //If the container is already created, do this instead:
        itemDescriptionImage.remove();
        itemDescriptionImage = document.createElement("img");
        itemDescriptionImage.id = "item-description-image";
        itemDescriptionImage.style.width = "5vw";
        itemDescriptionImage.style.height = "5vw";
        itemDescriptionImage.style.position = "relative";
        itemDescriptionImage.style.top = "0.5vw";
        itemDescriptionImage.style.left = "0.5vw";
        if(items[sliced].rarity == "item") {
            itemDescriptionImage.style.border = "2px solid gray";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
        } else if(items[sliced].rarity == "pistol") {
            itemDescriptionImage.style.border = "2px solid #006eff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(items[sliced].rarity == "rifle") {
            itemDescriptionImage.style.border = "2px solid #ff8c00";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(items[sliced].rarity == "knife") {
            itemDescriptionImage.style.border = "2px solid #ff0000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(items[sliced].rarity == "shotgun") {
            itemDescriptionImage.style.border = "2px solid #7f00ff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
        } else if(items[sliced].rarity == "exotic") {
            itemDescriptionImage.style.border = "2px solid #eeff00";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        } else if(items[sliced].rarity == "police") {
            itemDescriptionImage.style.border = "2px solid #0015ff";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
        } else if(items[sliced].rarity == "medical") {
            itemDescriptionImage.style.border = "2px solid #ff008c";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(255, 150, 207, 1), rgba(255, 0, 140, 0.25))";
        } else if(items[sliced].rarity == "multiplier") {
            itemDescriptionImage.style.border = "2px solid #000000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(137, 137, 137, 1), rgba(0, 0, 0, 0.25))";
        } else if(items[sliced].rarity == "festive:christmas") {
            itemDescriptionImage.style.border = "2px solid #ff0000";
            itemDescriptionImage.style.backgroundImage = "linear-gradient(135deg, rgba(0, 255, 0, 1), rgba(174, 255, 0, 0.35), rgba(255, 0, 0, 0.25))";
        }
        itemDescriptionImage.setAttribute("src", "images/items/" + items[sliced].image + ".png");
        itemDescriptionImage.setAttribute("title", items[sliced].name);

        itemDescriptionName.remove();
        itemDescriptionName = document.createElement("div");
        itemDescriptionName.id = "item-description-name";
        if(items[sliced].rarity == "item") {
            itemDescriptionName.style.background = "-webkit-linear-gradient(gray, white)";
        }
        itemDescriptionName.style.fontSize = "2vw";
        itemDescriptionName.style.fontWeight = "bold";
        itemDescriptionName.style.textAlign = "left";
        itemDescriptionName.style.webkitBackgroundClip = "text";
        itemDescriptionName.style.webkitTextFillColor = "transparent";
        itemDescriptionName.style.position = "relative";
        itemDescriptionName.style.top = "-5vw";
        itemDescriptionName.style.left = "6vw";
        itemDescriptionName.innerHTML = items[sliced].name;

        itemDescriptionQuantity.remove();
        itemDescriptionQuantity = document.createElement("div");
        itemDescriptionQuantity.id = "item-description-quantity";
        itemDescriptionQuantity.style.fontSize = "1.5vw";
        itemDescriptionQuantity.style.fontWeight = "600";
        itemDescriptionQuantity.style.color = "white";
        itemDescriptionQuantity.style.position = "relative";
        itemDescriptionQuantity.style.top = "-5vw";
        itemDescriptionQuantity.style.left = "6vw";
        itemDescriptionQuantity.innerHTML = "Quantity: " + items[sliced].amount;

        itemDescriptionText.remove();
        itemDescriptionText = document.createElement("div");
        itemDescriptionText.id = "item-description-text";
        itemDescriptionText.style.color = "white";
        itemDescriptionText.style.fontSize = "1.75vw";
        itemDescriptionText.style.fontWeight = "500";
        itemDescriptionText.style.position = "relative";
        itemDescriptionText.style.top = "-5vw";
        itemDescriptionText.style.left = "0vw";
        itemDescriptionText.style.padding = "1vw";
        itemDescriptionText.innerHTML = items[sliced].description;

        itemDescriptionContainer.appendChild(itemDescriptionImage);
        itemDescriptionContainer.appendChild(itemDescriptionName);
        itemDescriptionContainer.appendChild(itemDescriptionQuantity);
        itemDescriptionContainer.appendChild(itemDescriptionText);
    }
}

function openTab(tab) {
    var harvest = document.getElementById("tab1-container");
    var craft = document.getElementById("tab2-container");
    var drugs = document.getElementById("tab3-container");
    var market = document.getElementById("tab4-container");
    var other = document.getElementById("tab5-container");
    if(tab == 1) {
        //Initiate Mining Page
        harvest.style.visibility = "hidden";
        craft.style.visibility = "hidden";
        drugs.style.visibility = "hidden";
        market.style.visibility = "hidden";
        other.style.visibility = "hidden";

        document.getElementById("harvest-tab1-container").style.visibility = "visible";
        document.getElementById("harvest-tab2-container").style.visibility = "visible";
        document.getElementById("harvest-tab3-container").style.visibility = "visible";
    } else if(tab == 2) {
        //Initiate Crafting Page
        harvest.style.visibility = "hidden";
        craft.style.visibility = "hidden";
        drugs.style.visibility = "hidden";
        market.style.visibility = "hidden";
        other.style.visibility = "hidden";


    } else if(tab == 3) {
        //Initiate Drug Page
        harvest.style.visibility = "hidden";
        craft.style.visibility = "hidden";
        drugs.style.visibility = "hidden";
        market.style.visibility = "hidden";
        other.style.visibility = "hidden";

        document.getElementById("drugs-tab1-container").style.visibility = "visible";
        document.getElementById("drugs-tab2-container").style.visibility = "visible";
        document.getElementById("drugs-tab3-container").style.visibility = "visible";
        document.getElementById("drugs-tab4-container").style.visibility = "visible";
    } else if(tab == 4) {
        //Initiate Market Page
        harvest.style.visibility = "hidden";
        craft.style.visibility = "hidden";
        drugs.style.visibility = "hidden";
        market.style.visibility = "hidden";
        other.style.visibility = "hidden";


    } else if(tab == 5) {
        //Initiate Other Page
        harvest.style.visibility = "hidden";
        craft.style.visibility = "hidden";
        drugs.style.visibility = "hidden";
        market.style.visibility = "hidden";
        other.style.visibility = "hidden";


    }
}

function back(page) {
    var harvest = document.getElementById("tab1-container");
    var craft = document.getElementById("tab2-container");
    var drugs = document.getElementById("tab3-container");
    var market = document.getElementById("tab4-container");
    var other = document.getElementById("tab5-container");
    if(page == 1) {
        document.getElementById("drugs-tab1-container").style.visibility = "hidden";
        document.getElementById("drugs-tab2-container").style.visibility = "hidden";
        document.getElementById("drugs-tab3-container").style.visibility = "hidden";
        document.getElementById("drugs-tab4-container").style.visibility = "hidden";

        harvest.style.visibility = "visible";
        craft.style.visibility = "visible";
        drugs.style.visibility = "visible";
        market.style.visibility = "visible";
        other.style.visibility = "visible";
    } else if(page == 2) {
        document.getElementById("harvest-tab1-container").style.visibility = "hidden";
        document.getElementById("harvest-tab2-container").style.visibility = "hidden";
        document.getElementById("harvest-tab3-container").style.visibility = "hidden";
    
        harvest.style.visibility = "visible";
        craft.style.visibility = "visible";
        drugs.style.visibility = "visible";
        market.style.visibility = "visible";
        other.style.visibility = "visible";
    } else if(page == 3) {
        document.getElementById("harvest-tab1-container").style.visibility = "visible";
        document.getElementById("harvest-tab2-container").style.visibility = "visible";
        document.getElementById("harvest-tab3-container").style.visibility = "visible";

        for(i = 1; i < 9; i++) {
            document.getElementById("mineshaft-tab" + i + "-container").style.visibility = "hidden";
        }
    }
}

function harvestTab(tab) {
    if(tab == 1) {
        for(i = 1; i < 9; i++) {
            document.getElementById("mineshaft-tab" + i + "-container").style.visibility = "visible";
        }
        document.getElementById("harvest-tab1-container").style.visibility = "hidden";
        document.getElementById("harvest-tab2-container").style.visibility = "hidden";
        document.getElementById("harvest-tab3-container").style.visibility = "hidden";

        //Mining Level Check
        if(miningLevel >= 1) {
            document.getElementById("mineshaft-tab1-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab1-container").setAttribute("onclick", "miningPage('stone')");
        }
        if(miningLevel >= 6) {
            document.getElementById("mineshaft-tab2-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab2-container").setAttribute("onclick", "miningPage('copper')");
        }
        if(miningLevel >= 15) {
            document.getElementById("mineshaft-tab3-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab3-container").setAttribute("onclick", "miningPage('coal')");
        }
        if(miningLevel >= 24) {
            document.getElementById("mineshaft-tab4-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab4-container").setAttribute("onclick", "miningPage('iron')");
        }
        if(miningLevel >= 48) {
            document.getElementById("mineshaft-tab5-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab5-container").setAttribute("onclick", "miningPage('silver')");
        }
        if(miningLevel >= 62) {
            document.getElementById("mineshaft-tab6-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab6-container").setAttribute("onclick", "miningPage('gold')");
        }
        if(miningLevel >= 73) {
            document.getElementById("mineshaft-tab7-container").style.backgroundImage = "linear-gradient(-50deg, rgb(0, 255, 13), rgb(0, 58, 0))";
            document.getElementById("mineshaft-tab7-container").setAttribute("onclick", "miningPage('titanium')");
        }
    } else if(tab == 2) {

    }
}

function sortInv(type) {
    if(type == 1) {
        //Sort Alphabetically
    } else if(type == 2) {
        //Sort by Quantity
    }
}

function miningPage(material) {
    document.getElementById("mineshaft-tab1-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab2-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab3-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab4-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab5-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab6-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab7-container").style.visibility = "hidden";
    document.getElementById("mineshaft-tab8-container").style.visibility = "hidden";
    if(material == "stone") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Stone Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_stonechunk.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('stone')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "copper") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Copper Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_copperchunk_2.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('copper')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "coal") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Coal Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_coalchunk_1.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('coal')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "iron") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Iron Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_ironchunk_3.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('iron')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "silver") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Silver Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_silverchunk_5.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('silver')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "gold") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Gold Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_goldchunk_4.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('gold')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    } else if(material == "titanium") {
        oreTitle = document.createElement("div");
        oreTitle.id = "ore-title";
        oreTitle.style.color = "white";
        oreTitle.style.fontSize = "3vw";
        oreTitle.style.fontWeight = "bold";
        oreTitle.style.position = "relative";
        oreTitle.style.top = "-8vw";
        oreTitle.style.textAlign = "center";
        oreTitle.innerHTML = "Titanium Mineshaft";

        oreImage = document.createElement("img");
        oreImage.id = "ore-image";
        oreImage.setAttribute("src", "images/items/mat_titaniumchunk_6.png");
        oreImage.style.width = "30vw";
        oreImage.style.position = "absolute";
        oreImage.style.top = "6vw";
        oreImage.style.left = "35vw";
        oreImage.style.cursor = "pointer";
        oreImage.style.userSelect = "none";
        oreImage.setAttribute("onclick", "mineOre('titanium')");

        var main = document.getElementById("container");
        main.appendChild(oreTitle);
        main.appendChild(oreImage);
    }
}

var isMaterialClicked = false;

function mineOre(material) {
    if(isMaterialClicked == false) {
        if(material == "stone") {
            oreImage.style.width = "35vw";
            oreImage.style.top = "3.5vw";
            oreImage.style.left = "32.5vw";
            oreImage.style.cursor = "default";
            setTimeout(function() {
                oreImage.style.width = "30vw";
                oreImage.style.top = "6vw";
                oreImage.style.left = "35vw";
            }, 100);
            isMaterialClicked = true;
            setTimeout(function() {
                isMaterialClicked = false;
                oreImage.style.cursor = "pointer";
            }, 2000);

            var mineSound = new Audio('audio/mine.mp3');
            mineSound.play();

            if(isMaterialClicked = true) {
                oreCountdownContainer = document.createElement("div");
                oreCountdownContainer.id = "ore-countdown-container";
                oreCountdownContainer.style.width = "30vw";
                oreCountdownContainer.style.height = "5vw";
                oreCountdownContainer.style.border = "1px solid white";
                oreCountdownContainer.style.position = "absolute";
                oreCountdownContainer.style.top = "38vw";
                oreCountdownContainer.style.left = "35vw";
                oreCountdownContainer.style.zIndex = "8";

                oreCountdown = document.createElement("div");
                oreCountdown.id = "ore-countdown";
                oreCountdown.style.width = "0vw";
                oreCountdown.style.height = "5vw";
                oreCountdown.style.zIndex = "9";
                oreCountdown.style.position = "absolute";
                oreCountdown.style.top = "0vw";
                oreCountdown.style.left = "0vw";
                oreCountdown.style.backgroundColor = "green";

                oreCountdownText = document.createElement("div");
                oreCountdownText.id = "ore-countdown-text";
                oreCountdownText.style.zIndex = "15";
                oreCountdownText.style.color = "white";
                oreCountdownText.style.fontSize = "2vw";
                oreCountdownText.style.fontWeight = "500";
                oreCountdownText.style.textAlign = "center";
                oreCountdownText.style.lineHeight = "4.5vw";
                oreCountdownText.style.position = "relative";

                var main = document.getElementById("container");
                main.appendChild(oreCountdownContainer);
                oreCountdownContainer.appendChild(oreCountdown);
                oreCountdownContainer.appendChild(oreCountdownText)

                var sec = 2;
                var width = 0;
                var secondInterval = setInterval(function() {
                    if(sec > 0) {
                        sec -= 0.004;
                    } else {
                        sec = 0;
                    }
                    fixedSec = sec.toFixed(3);
                    oreCountdownText.innerHTML = fixedSec + "s";

                    width += (120 / 2000);
                    oreCountdown.style.width = width + "vw";
                }, 1);
                
                setTimeout(function() {
                    oreCountdownContainer.remove();
                    oreCountdown.remove();
                    oreCountdownText.remove();
                    clearInterval(secondInterval);

                    var getMaterial = Math.random();
                    if(getMaterial > 0.5) {
                        // 50/50 chance to actually mine the ore
                        initiateLevelIncrease("mining");
                        for(i = 0; i < items.length; i++) {
                            if(items[i].name === "Stone Chunk") {
                                items[i].amount++;
                            }
                        }
                    }
                }, 2000);
            }
        } else if(material == "copper") {
            oreImage.style.width = "35vw";
            oreImage.style.top = "3.5vw";
            oreImage.style.left = "32.5vw";
            oreImage.style.cursor = "default";
            setTimeout(function() {
                oreImage.style.width = "30vw";
                oreImage.style.top = "6vw";
                oreImage.style.left = "35vw";
            }, 100);
            isMaterialClicked = true;
            setTimeout(function() {
                isMaterialClicked = false;
                oreImage.style.cursor = "pointer";
            }, 2000);

            if(isMaterialClicked = true) {
                oreCountdownContainer = document.createElement("div");
                oreCountdownContainer.id = "ore-countdown-container";
                oreCountdownContainer.style.width = "30vw";
                oreCountdownContainer.style.height = "5vw";
                oreCountdownContainer.style.border = "1px solid white";
                oreCountdownContainer.style.position = "absolute";
                oreCountdownContainer.style.top = "38vw";
                oreCountdownContainer.style.left = "35vw";
                oreCountdownContainer.style.zIndex = "8";

                oreCountdown = document.createElement("div");
                oreCountdown.id = "ore-countdown";
                oreCountdown.style.width = "0vw";
                oreCountdown.style.height = "5vw";
                oreCountdown.style.zIndex = "9";
                oreCountdown.style.position = "absolute";
                oreCountdown.style.top = "0vw";
                oreCountdown.style.left = "0vw";
                oreCountdown.style.backgroundColor = "green";

                oreCountdownText = document.createElement("div");
                oreCountdownText.id = "ore-countdown-text";
                oreCountdownText.style.zIndex = "15";
                oreCountdownText.style.color = "white";
                oreCountdownText.style.fontSize = "2vw";
                oreCountdownText.style.fontWeight = "500";
                oreCountdownText.style.textAlign = "center";
                oreCountdownText.style.lineHeight = "4.5vw";
                oreCountdownText.style.position = "relative";

                var main = document.getElementById("container");
                main.appendChild(oreCountdownContainer);
                oreCountdownContainer.appendChild(oreCountdown);
                oreCountdownContainer.appendChild(oreCountdownText)

                var sec = 2;
                var width = 0;
                var secondInterval = setInterval(function() {
                    if(sec > 0) {
                        sec -= 0.004;
                    } else {
                        sec = 0;
                    }
                    fixedSec = sec.toFixed(3);
                    oreCountdownText.innerHTML = fixedSec + "s";

                    width += (120 / 2000);
                    oreCountdown.style.width = width + "vw";
                }, 1);
                
                setTimeout(function() {
                    oreCountdownContainer.remove();
                    oreCountdown.remove();
                    oreCountdownText.remove();
                    clearInterval(secondInterval);

                    var getMaterial = Math.random();
                    if(getMaterial > 0.5) {
                        // 50/50 chance to actually mine the ore
                        initiateLevelIncrease("mining");
                        for(i = 0; i < items.length; i++) {
                            if(items[i].name === "Copper Chunk") {
                                items[i].amount++;
                            }
                        }
                    }
                }, 2000);
            }
        } else if(material == "coal") {
        
        } else if(material == "iron") {
        
        } else if(material == "silver") {
        
        } else if(material == "gold") {
        
        } else if(material == "titanium") {
        
        }
    }
}

var levelWidth = 0;

function initiateLevelIncrease(task) {
    if(task == "mining") {
        document.getElementById("level-container").style.visibility = "visible";

        if((miningLevelEXP + 10) >= miningLevelEXPCap) {
            miningLevelEXP = 0;
            miningLevelEXPCap *= 1.1;
            miningLevelEXPCap = miningLevelEXPCap.toFixed(0);
            miningLevel++;
            document.getElementById("player-level").innerHTML = miningLevel;
            document.getElementById("player-level-xp-value").innerHTML = miningLevelEXP + "/" + miningLevelEXPCap + " EXP";
            levelWidth = 0;
            document.getElementById("player-level-xp").style.width = levelWidth + "vw";

            var levelUpSound = new Audio('audio/level up.wav');
            levelUpSound.play();
        } else {
            miningLevelEXP += 10;
            document.getElementById("player-level-xp-value").innerHTML = miningLevelEXP + "/" + miningLevelEXPCap + " EXP";
            levelWidth = (12.5 / miningLevelEXPCap) * miningLevelEXP;
            document.getElementById("player-level-xp").style.width = levelWidth + "vw";
        }

        setTimeout(function() {
            document.getElementById("level-container").style.visibility = "hidden";
        }, 2000);
    }//Make more tasks, like chemistry, etc.
}