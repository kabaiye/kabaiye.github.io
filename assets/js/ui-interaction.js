// 初始化图片懒加载
function initLazyLoad() {
  if (typeof lozad === 'function') {
    const observer = lozad();
    observer.observe();
  }
}

// 展开/折叠菜单（点击 .has-sub）
function initSubmenuToggle() {
  $(document).on('click', '.has-sub > a', function (e) {
    e.preventDefault();

    const $li = $(this).parent('.has-sub');

    // 切换 expanded 状态
    $li.toggleClass('expanded');

    // 展开当前，收起兄弟
    if ($li.hasClass('expanded')) {
      $li.siblings('.has-sub').removeClass('expanded').find('ul').slideUp(200);
      $li.children('ul').slideDown(200);
    } else {
      $li.children('ul').slideUp(200);
    }
  });
}


// 折叠/展开侧边栏按钮行为（fa-bars）
function initSidebarCollapseToggle() {
  $('.user-info-menu .hidden-sm').click(function () {
    if ($('.sidebar-menu').hasClass('collapsed')) {
      $('.has-sub.expanded > ul').attr("style", "");
    } else {
      $('.has-sub.expanded > ul').show();
    }
  });
}

// 子菜单点击高亮
function initSubmenuHighlight() {
  $("#main-menu li ul li").click(function () {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });
}

// 平滑滚动跳转 + 激活状态
function initSmoothScroll() {
  $("a.smooth").click(function (ev) {
    ev.preventDefault();

    // 激活样式
    $("#main-menu li").removeClass("active");
    $(this).parent("li").addClass("active");

    // 滚动到锚点位置
    const href = $(this).attr("href");
    const offset = $(href).offset();
    if (offset) {
      $("html, body").animate(
        { scrollTop: offset.top - 30 },
        { duration: 500, easing: "swing" }
      );
    }

    // 移动端收起菜单（Xenon）
    if (typeof public_vars !== 'undefined' && public_vars.$mainMenu) {
      public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass('mobile-is-visible');
    }

    if (typeof ps_destroy === 'function') {
      ps_destroy();
    }
  });
}

// 一键初始化所有交互逻辑
function initUIInteractions() {
  initLazyLoad();
  initSubmenuToggle();
  initSidebarCollapseToggle();
  initSubmenuHighlight();
  initSmoothScroll();
}
