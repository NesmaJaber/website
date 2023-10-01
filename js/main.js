$(function () {
  $(".switch-btn").click(function () {
    $("button").removeClass("active");
    $(this).addClass("active");
  });
  $(".link-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $(".page-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $('.datepicker').datepicker({
    inline: true
  });


});
// $('.datepicker').datepicker({
//   inline: true
// });
function viewPassword1() {
  let passField1 = document.getElementById("password-field1");
  let iconEye1 = document.getElementById("icon-eye1");
  if (passField1.type === "password") {
    passField1.type = "text";
    iconEye1.classList = "fa-regular fa-eye";


  } else {
    passField1.type = "password";
    iconEye1.classList = "fa-regular fa-eye-slash";
  }
}

function viewPassword2() {
  let passField2 = document.getElementById("password-field2");
  let iconEye2 = document.getElementById("icon-eye2");
  if (passField2.type === "password") {
    passField2.type = "text";
    iconEye2.classList = "fa-regular fa-eye";


  } else {
    passField2.type = "password";
    iconEye2.classList = "fa-regular fa-eye-slash";
  }
}
function viewPassword3() {
  let passField3 = document.getElementById("password-field3");
  let iconEye3 = document.getElementById("icon-eye3");
  if (passField3.type === "password") {
    passField3.type = "text";
    iconEye3.classList = "fa-regular fa-eye";


  } else {
    passField3.type = "password";
    iconEye3.classList = "fa-regular fa-eye-slash";
  }
}

const categories = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chartHome', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', // Customize the line color
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' // Customize the marker color
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for responsiveness
      },
      chartOptions: {
        legend: {
          enabled: false // Hide the legend on small screens
        }
      }
    }]
  }
});


const categories2 = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "ggg"];
const data2 = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chart1', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories2,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data2,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF',
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)'
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false
        }
      }
    }]
  }
});

const categories3 = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data3 = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chart2', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories3,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data3,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF',
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)'
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false
        }
      }
    }]
  }
});



function switchBtn(chartId) {
  var switchContents = document.querySelectorAll('.switch-content');
  switchContents.forEach(function (switchContent) {
    switchContent.style.display = 'none';
  });

  var switchbtns = document.querySelectorAll('.switch-btn');
  switchbtns.forEach(function (switchbtn) {
    switchbtn.classList.remove('active');
  });

  document.getElementById(chartId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="switchBtn(\'' + chartId + '\')"]');
  clickedButton.classList.add('active');
}

switchBtn('chart1');


// managers page
function showMContent(mContentId) {
  var managercontents = document.querySelectorAll('.manager-content');
  managercontents.forEach(function (managercontent) {
    managercontent.style.display = 'none';
  });

  var managerbtns = document.querySelectorAll('.manager-btn');
  managerbtns.forEach(function (managerbtn) {
    managerbtn.classList.remove('active');
  });

  document.getElementById(mContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showMContent(\'' + mContentId + '\')"]');
  clickedButton.classList.add('active');

  if (mContentId == "mContent1") {
    document.getElementById("addDiv1").style.display = "block";
    document.getElementById("addDiv2").style.display = "none";
  } else if (mContentId == "mContent2") {
    document.getElementById("addDiv1").style.display = "none";
    document.getElementById("addDiv2").style.display = "block";
  } else {
    document.getElementById("addDiv1").style.display = "block";
    document.getElementById("addDiv2").style.display = "none";
  }


}

showMContent('mContent1');

/* tab button store */
function showTab(tabId) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('activee');
  });

  document.getElementById(tabId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
  clickedButton.classList.add('activee');
}

showTab('tab1');



let navList = document.querySelectorAll(".link-item"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    showSection(this);
  })
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");

  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}





// month slider with next and previous buttons
const selectedMonth = document.getElementById("selectedMonth");
const prevButton = document.getElementById("prevMonth");
const nextButton = document.getElementById("nextMonth");

const months = [
  "يناير", "فبراير", "مارس", "أبريل",
  "مايو", "يونيو", "يوليو", "أغسطس",
  "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

let currentMonthIndex = 0;

function updateSelectedMonth() {
  selectedMonth.textContent = months[currentMonthIndex];
}

updateSelectedMonth();

prevButton.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
  updateSelectedMonth();
});

nextButton.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex + 1) % 12;
  updateSelectedMonth();
});


/* tab button store */
function showTab3(tabAccountId) {
  var tabContents = document.querySelectorAll('.account-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.account-btn');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('active');
  });

  document.getElementById(tabAccountId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab3(\'' + tabAccountId + '\')"]');
  clickedButton.classList.add('active');
}

showTab3('tabAccount1');

//settings page 
function settingShow(settingContentId) {
  var settingsContents = document.querySelectorAll('.settings-content');
  settingsContents.forEach(function (settingsContent) {
    settingsContent.style.display = 'none';
  });

  var settingBtns = document.querySelectorAll('.setting-btn');
  settingBtns.forEach(function (settingBtn) {
    settingBtn.classList.remove('active');
  });

  document.getElementById(settingContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="settingShow(\'' + settingContentId + '\')"]');
  clickedButton.classList.add('active');


  if (settingContentId == "settingContent2") {
    document.getElementById("addSettings").style.display = "block";
  } else if (settingContentId == "settingContent1") {
    document.getElementById("addSettings").style.display = "none";
  } else {
    document.getElementById("addSettings").style.display = "block";
  }

}

settingShow('settingContent1');


// account page
const fileImageInput = document.getElementById('fileImageInput');
const uploadedImage = document.getElementById('uploadedImage');

fileImageInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }

});

// add category modal (upload image) page
const fileImageInputAdd = document.getElementById('fileImageInputAdd');
const uploadedImageAdd = document.getElementById('uploadedImageAdd');

fileImageInputAdd.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAdd.src = e.target.result;
      uploadedImageAdd.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// edit category modal page (upload image) page
const fileImageInputEdit = document.getElementById('fileImageInputEdit');
const uploadedImageEdit = document.getElementById('uploadedImageEdit');

fileImageInputEdit.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageEdit.src = e.target.result;
      uploadedImageEdit.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// add product image1  (upload image) page
const ImageInputAddProduct = document.getElementById('ImageInputAddProduct');
const uploadedImageAddProduct = document.getElementById('uploadedImageAddProduct');

ImageInputAddProduct.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAddProduct.src = e.target.result;
      uploadedImageAddProduct.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  add product image2  (upload image) page
const ImageInputAddProduct2 = document.getElementById('ImageInputAddProduct2');
const uploadedImageAddProduct2 = document.getElementById('uploadedImageAddProduct2');

ImageInputAddProduct2.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAddProduct2.src = e.target.result;
      uploadedImageAddProduct2.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// Details product image1  (upload image) page
const ImageInputDetailsProduct = document.getElementById('ImageInputDetailsProduct');
const uploadedImageDetailsProduct = document.getElementById('uploadedImageDetailsProduct');

ImageInputDetailsProduct.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageDetailsProduct.src = e.target.result;
      uploadedImageDetailsProduct.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// Details product image2  (upload image) page
const ImageInputDetailsProduct2 = document.getElementById('ImageInputDetailsProduct2');
const uploadedImageDetailsProduct2 = document.getElementById('uploadedImageDetailsProduct2');

ImageInputDetailsProduct2.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageDetailsProduct2.src = e.target.result;
      uploadedImageDetailsProduct2.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// Details product posted image1  (upload image) page
const InputDetailsProductPosted = document.getElementById('InputDetailsProductPosted');
const uploadedDetailsProductPosted = document.getElementById('uploadedDetailsProductPosted');

InputDetailsProductPosted.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedDetailsProductPosted.src = e.target.result;
      uploadedDetailsProductPosted.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  Details product posted image2  (upload image) page
const InputDetailsProductPosted2 = document.getElementById('InputDetailsProductPosted2');
const uploadedDetailsProductPosted2 = document.getElementById('uploadedDetailsProductPosted2');

InputDetailsProductPosted2.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedDetailsProductPosted2.src = e.target.result;
      uploadedDetailsProductPosted2.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  add brand modal  (upload image) page
const fileImageInputAddBrand = document.getElementById('fileImageInputAddBrand');
const uploadedImageAddBrand = document.getElementById('uploadedImageAddBrand');

fileImageInputAddBrand.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAddBrand.src = e.target.result;
      uploadedImageAddBrand.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  edit brand modal  (upload image) page
const editBrand = document.getElementById('editBrand');
const imageEditBrand = document.getElementById('imageEditBrand');

editBrand.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageEditBrand.src = e.target.result;
      imageEditBrand.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});

//orders page 
function showOrder(orderContentId) {
  var orderContents = document.querySelectorAll('.order-content');
  orderContents.forEach(function (orderContent) {
    orderContent.style.display = 'none';
  });

  var orderBtns = document.querySelectorAll('.order-btn');
  orderBtns.forEach(function (orderBtn) {
    orderBtn.classList.remove('active');
  });

  document.getElementById(orderContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showOrder(\'' + orderContentId + '\')"]');
  clickedButton.classList.add('active');

}

showOrder('orderContent1');



/* ----- modal order page  ----- */
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal Add category page  ----- */
function openModalAddCategory() {
  document.getElementById('modalAddCategory').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModalAddCategory() {
  document.getElementById('modalAddCategory').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal Add category page  ----- */
function openModelEditCategory() {
  document.getElementById('modalEditCategory').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModelEditCategory() {
  document.getElementById('modalEditCategory').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

/* ----- modal Edit Item  page  ----- */
function openEditItem() {
  document.getElementById('modalEditItem').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeEditItem() {
  document.getElementById('modalEditItem').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal add brand  page  ----- */
function openAddBrand() {
  document.getElementById('modalAddBrand').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeAddBrand() {
  document.getElementById('modalAddBrand').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal add service  page  ----- */

function openAddService() {
  document.getElementById('modalAddSerice').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeAddService() {
  document.getElementById('modalAddSerice').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}