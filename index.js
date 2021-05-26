//Global Variables
var money = 0;
var food = 80;
var water = 80;
var health = 100;

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
        item.setAttribute("onclick", "alert('test')");

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
    }
}

function sortInv(type) {
    if(type == 1) {
        //Sort Alphabetically
    } else if(type == 2) {
        //Sort by Quantity
    }
}