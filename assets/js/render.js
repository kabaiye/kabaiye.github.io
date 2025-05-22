function renderSidebarMenu(menuData) {
  const iconMap = [
    "linecons-star",
    "linecons-doc",
    "linecons-lightbulb",
    "linecons-thumbs-up",
    "linecons-diamond",
    "linecons-pencil",
    "linecons-user",
    //"linecons-heart"
  ];

  const menuContainer = document.getElementById('main-menu');
  menuContainer.innerHTML = "";

  Object.keys(menuData).forEach((mainTitle,index) => {
    const subItems = menuData[mainTitle];
    const iconClass = iconMap[index%8] || "linecons-star";

    const li = document.createElement("li");

    if (subItems.length === 0) {
      li.innerHTML = `
        <a href="#${mainTitle}" class="smooth">
          <i class="${iconClass}"></i>
          <span class="title">${mainTitle}</span>
        </a>
      `;
    } else {
      li.classList.add("has-sub"); // 添加必要 class
      li.innerHTML = `
        <a href="javascript:void(0);">
          <i class="${iconClass}"></i>
          <span class="title">${mainTitle}</span>
        </a>
      `;
      const subUl = document.createElement("ul");

      subItems.forEach(sub => {
        const subLi = document.createElement("li");
        subLi.innerHTML = `
          <a href="#${sub}" class="smooth">
            <span class="title">${sub}</span>
          </a>
        `;
        subUl.appendChild(subLi);
      });

      li.appendChild(subUl);
    }

    menuContainer.appendChild(li);
  });
  const li2 = document.createElement("li");
  li2.innerHTML = `
    <a href="about.html">
        <i class="linecons-heart"></i>
        <span class="tooltip-blue">关于本站</span>
        <span class="label label-Primary pull-right hidden-collapsed">♥︎</span>
    </a>
  `
  menuContainer.appendChild(li2);
}


function renderMainContent(data) {
  const content = document.querySelector('.main-content');
  data.forEach(section => {
    const header = document.createElement('h4');
    header.className = 'text-gray';
    header.innerHTML = `<i class="linecons-tag" style="margin-right: 7px;" id="${section.category}"></i>${section.category}`;
    content.appendChild(header);

    let row = document.createElement('div');
    row.className = 'row';

    section.sites.forEach((site, i) => {
      const col = document.createElement('div');
      col.className = 'col-sm-3';
      col.innerHTML = `
        <div class="xe-widget xe-conversations box2 label-info" onclick="window.open('${site.url}', '_blank')" title="${site.url}">
          <div class="xe-comment-entry">
            <a class="xe-user-img"><img src="${site.logo}" class="img-circle" width="40"></a>
            <div class="xe-comment">
              <a href="#" class="xe-user-name overflowClip_1"><strong>${site.name}</strong></a>
              <p class="overflowClip_2">${site.desc}</p>
            </div>
          </div>
        </div>
      `;
      row.appendChild(col);
      if ((i + 1) % 4 === 0 || i === section.sites.length - 1) {
        content.appendChild(row);
        row = document.createElement('div');
        row.className = 'row';
      }
    });
    content.appendChild(document.createElement('br'));
  });
  const bottom = document.createElement('footer');
  bottom.classList = "main-footer sticky footer-type-1"
  bottom.innerHTML = `<div class="footer-inner">
      <!-- Add your copyright text here -->
      <div class="footer-text">
          &copy; 2025
          <a href="../index.html"><strong>钓不到珍珠蚌</strong></a> design by <a href="https://github.com/kabaiye" target="_blank"><strong>kabaiye</strong></a>
          <a href="https://beian.miit.gov.cn/" target="_blank"><strong>&nbsp&nbsp&nbsp&nbsp鄂ICP备2024058921号-1</strong></a>
          <!--  - Purchase for only <strong>23$</strong> -->
      </div>
      <!-- Go to Top Link, just add rel="go-top" to any link to add this functionality -->
      <div class="go-up">
          <a href="#" rel="go-top">
              <i class="fa-angle-up"></i>
          </a>
      </div>
  </div>
  `
  content.appendChild(bottom);
}
