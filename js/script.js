var mobileTemplate = document.querySelector(".mobile-card-template");
// console.log(mobileTemplate);
var mobileSection = document.querySelector(".mobiles-section");
var mobileNewSection = document.querySelector(".mobiles-new-section");
var mobileCard = document.querySelector(".mobile-card");
var ParentSection = document.querySelector(".parent-section");
var MobileHeading = document.querySelector(".mobile-heading");
var Page = document.querySelector(".page");
var mobiles = {
  Honor: [
    {
      name: "Honor 7C",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Honor 9 Lite",
      ram: 3,
      price: 8999
    },
    {
      name: "Honor 8C",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Honor 10 Lite",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Honor Play",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Honor 7A",
      ram: 3,
      price: 8999.90
    },
    {
      name: "Honor 20i",
      ram: 3,
      price: 12999.89
    },
    {
      name: "Honor 7S",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Honor 9N",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Honor 9i",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Honor Bee",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Honor 6 Plus",
      ram: 3,
      price: 8999
    },
    {
      name: "Honor Holly 3",
      ram: 4,
      price: 7999.9
    }
  ],
  Samsung: [
    {
      name: "Samsung Galaxy j6",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Samsung Guru Music",
      ram: 3,
      price: 8999
    },
    {
      name: "Samsung Guru",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Samsung A10",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Samsung A30",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Samsung Metro 313",
      ram: 3,
      price: 8999.90
    },
    {
      name: "Samsung A20",
      ram: 3,
      price: 12999.89
    },
    {
      name: "Samsung Galaxy M10",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Samsung On7Pro",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Samsung Galaxy A2",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Samsung Galaxy A80",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Samsung Galaxy S9",
      ram: 3,
      price: 8999
    },
    {
      name: "Samsung Galaxy On Nxt",
      ram: 4,
      price: 7999.9
    }
  ],
  Redmi: [
    {
      name: "Redmi 7A",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Redmi 6",
      ram: 3,
      price: 8999
    },
    {
      name: "Redmi Note 7 Pro",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Redmi Note 7S",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Redmi Y2",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Redmi Go",
      ram: 3,
      price: 8999.90
    },
    {
      name: "Redmi Note 5",
      ram: 3,
      price: 12999.89
    },
    {
      name: "Redmi Note 6 Pro",
      ram: 4,
      price: 7999.9
    },
    {
      name: "Redmi Y3",
      ram: 6,
      price: 12999.50
    },
    {
      name: "Redmi K20",
      ram: 6,
      price: 14999.25
    },
    {
      name: "Redmi 7",
      ram: 3,
      price: 10000.75
    },
    {
      name: "Redmi 6A",
      ram: 3,
      price: 8999
    },
    {
      name: "Redmi Y1",
      ram: 4,
      price: 7999.9
    }
  ]
};



    var mobname = Object.keys(mobiles);
    mobname.forEach(function (mname) {
    var mobileType = mname;
    var cln = mobileSection.cloneNode(false);
    cln.classList.remove("mobile-section");

    var heading = MobileHeading.cloneNode(false);
    heading.innerText = mobileType;
    cln.appendChild(heading);
    
    var num=0;
    mobiles[mobileType].forEach(function (item) {
      var mobile = mobileTemplate.cloneNode(true);
      num++;
      
    mobile.classList.remove("mobile-card-template");
    mobile.querySelector(".mobile-name").innerText = item["name"];
    mobile.querySelector(".mobile-ram").innerText = item["ram"];
    mobile.querySelector(".mobile-price").innerText = item["price"];
    cln.appendChild(mobile);
    
    

  });
  
  ParentSection.appendChild(cln);
  var p=Page.cloneNode(true);
  p.classList.remove("page");
  ParentSection.appendChild(p);
  
});




