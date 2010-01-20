var lang =	//语言设置	
{
   "zh-cn" :
   {
      login : "登录", logout : "注销", language : "语言选择", favTabletitle : "标题", favTableurl : "网址", favTablevisited : "访问次数", favTablecopy : "复制网址", navTitle : "收藏分类", navMostVisited : "经常访问的收藏", navMostLoved : "最爱收藏", navAll : "全部收藏", searchNotes : "输入关键字", totalCountBefore : "共有 ", totalCountAfter : " 条收藏数据", totalSearchBefore : "共有 ", totalSearchAfter : " 条搜索结果", refresh : "刷新收藏", copyTips : "复制网址", copyGuide : "请选中对话框中的文本进行复制操作", locationLabel : "位置：", readXml401 : "您尚未登录，请返回登录页面进行登录操作。", readXml403 : "您的账户信息有误，请重新登录。", readXml404 : "收藏数据未找到或您尚未开通傲游在线收藏服务", readXml500 : "遇到未知请求错误，请刷新收藏以重试。"
   }
   , "en-us" :
   {
      login : "Login", logout : "Log out", language : "Language", favTabletitle : "Title", favTableurl : "URL", favTablevisited : "Visited", favTablecopy : "Copy URL", navTitle : "Catogeries", navMostVisited : "Most Visited", navMostLoved : "Most Favorites", navAll : "All", searchNotes : "Search...", totalCountBefore : "", totalCountAfter : " item(s) of all", totalSearchBefore : "", totalSearchAfter : " item(s) of result", refresh : "Refresh", copyTips : "Copy URL", copyGuide : "Please copy url from this input box.", locationLabel : "Location: ", readXml401 : "Connect Error: Login failed!", readXml403 : "Connect Error: Passport profile error!", readXml404 : "Connect Error: Data not found. Maybe you havn't active this service yet!",readXml500:"Connect Error: Unknown error! Please try to do refresh again."
   }
}
;
var env =	//环境设置
{
   profileUrl : "http://passport.maxthon.com/", logoutUrl : "/api/logout", favXmlUrl : "/api/fav/read", favErrorUrl : "/api/fav/error", favIconUrl : "/favicon.html?url=", windowSize :
   {
      wrapper :
      {
         width : 920, height : 720, selector : ".wrapper"
      }
      , main :
      {
         height : 400, selector : ".main-height"
      }
      , content :
      {
         width : 697, selector : ".content"
      }
      , navigator :
      {
         width : 220, height : 489, selector : ".sidebar .nav-block"
      }
      , catogery :
      {
         height : 400, selector : ".sidebar .catogery-nav"
      }
      , table :
      {
         height : 401, selector : ".content .fav-table .table-body"
      }
   }
   , minColumnWidth : 60, mapColumnsInfo :
   {
      title :
      {
         selector : ".fav-table .item-title", className : "item-title", width : 200
      }
      , url :
      {
         selector : ".fav-table .item-url", className : "item-url", width : 320
      }
      , visited :
      {
         selector : ".fav-table .item-visited", className : "item-visited", width : 80
      }
   }
   , sortedBy :
   {
      column : null, isReversed : false
   }
   , iconFolderUrl : "/images/icon-fav-folder.png", iconFileUrl : "/images/icon-fav-file.png", iconExpandedUrl : "/images/icon-fav-expanded.png", iconCollapsedUrl : "/images/icon-fav-collapsed.png", iconCopyUrl : "/images/icon-fav-copy.png", iconMostVisitedUrl : "/images/icon-fav-visited.png", iconMostLovedUrl : "/images/icon-fav-loved.png", iconAllUrl : "/images/icon-fav-all.png"
};


//网页模块对象化，分属性、方法（Model）和触发事件（Event）
var Passport =	//通行证
{
   Model :
   {
      uid : - 1, nickname : "", hasLogged : false, init : null	
   }
   , Events :
   {
      mouseover : null, mouseout : null
   }
}
;
var FavTable =	//收藏主表格，主体	
{
   Model :
   {
      headId : "fav-head", bodyId : "fav-body", mapColumnsWidth :
      {
      }
      , init : null
   }
};

var FavHead =	//头部
{
   Model :
   {
      tableId : "fav-table", bodyId : "fav-body", mapItemsId :
      {
      }
      , mapSeparatersId :
      {
      }
      , sortedBy :
      {
         column : "", isReversed : false
      }
      , init : null, changeColumnWidth : null, changeSortingMarks : null
   }
}
;
var FavBody =	//主体
{
   Model :
   {
      tableId : "fav-table", headId : "fav-head", currentMode : "catogery", currentCatogeryId : 0, currentFolderDepth : - 1, currentKeywords : "", currentId : "", hoverId : "", arrRootChildern : [], mapItemsId :
      {
      }
      , mapExpandedFolders :
      {
      }
      , init : null, initFavXml : null, initError : null, initList : null, buildCatogeryList : null, expandCatogeryList : null, buildList : null, sortListBy : null, changeSorting : null, changeMode : null, changeCatogery : null, changeKeywords : null, changeCurrentItem : null, expandFolder : null, collapseFolder : null
   }
   , Events :
   {
      click : null, mouseover : null, mouseout : null
   }
}
;
var FavHeadItem =	//头部部件
{
   create : null, Model :
   {
      offset : "", headId : "fav-head", tableId : "fav-table", isSortedBy : false, isReversed : false
   }
   , Events :
   {
      click : null
   }
}
;
var FavHeadSeparater =	
{
   create : null, Model :
   {
      offset : "", itemId : "", headId : "fav-head", tableId : "fav-table"
   }
   , Events :
   {
      mousedown : null
   }
}
;
var FavBodyItem =	//主体部件
{
   create : null, Model :
   {
      offset : "", bodyId : "fav-body", tableId : "fav-table", data :
      {
         id : 0, title : "", url : "", visited : "", depth : ""
      }
      , isExpanded : false, copyUrl : null, troggle : null
   }
}
;
var NavBlock =
{
   Model :
   {
      navTitleId : "nav-title", customNavId : "custom-nav", catogeryNavId : "catogery-nav", currentItemId : "", hasInit : false, init : null, setCurrentItem : null
   }
}
;
var CustomNavItem =
{
   create : null, Model :
   {
      rootId : "nav-block", data :
      {
      }
   }
   , Events :
   {
      click : null
   }
}
;
var CatogeryNavItem =
{
   create : null, Model :
   {
      rootId : "nav-block", data :
      {
      }
   }
   , Events :
   {
      click : null
   }
}
;
var SearchBlock =
{
   Model :
   {
      keywordsId : "search-keywords", btnId : "search-btn", currentKeywords : "", isEmpty : true, hasInit : false, init : null, focusKeywords : null, blurKeywords : null, changeKeywords : null, clearKeywords : null, doSearch : null
   }
   , Events :
   {
      mouseover : null, mouseout : null
   }
}
;
var ManageBlock =
{
   Model :
   {
      hasInit : false, init : null, initTotalCount : null, initSearchCount : null, hoverOnRefreshBtn : null, hoverOffRefreshBtn : null
   }
}
;
var LocationBlock =
{
   Model :
   {
      offset : 0, bodyId : "fav-body", mapItemsId :
      {
      }
      , init : null, update : null
   }
   , Events :
   {
      click : null
   }
}
;
//视图
var View =
{
   Passport : "passport", FavTable : "fav-table", FavHead : "fav-head", FavBody : "fav-body", NavBlock : "nav-block", SearchBlock : "search-block", ManageBlock : "manage-block", LocationBlock : "location-block"
};
//控制器
var Controls =
{
   init : null, reload : null, changeFavMode : null, changeFavCatogery : null, changeFavKeywords : null, clearFavKeywords : null, sortFavTable : null, scrollToFavItem : null, troggleFavFolder : null, resize : null
};

var $Data =	//数据
{
   User :
   {
   }
   , Fav :
   {
   }
   , FavItem :
   {
   }
   , Lang :
   {
   }
}
;
$Data.User =
{
   getNickname : null, getUid : null
}
;
$Data.Fav =
{
   requestFavXml : null, initRequest : null, initError : null, getRootItem : null, getFoldersIndex : null, getFilesIndex : null, getItemById : null, getMostVisitedItems : null, getMostLovedItems : null, getItemsByKeywords : null, copyNodeSetToArray : null
}
;
$Data.FavItem =
{
   getId : null, getTitle : null, getType : null, getUrl : null, getVisited : null, getCount : null, isTrash : null, getDepth : null, getLocation : null, getParent : null, getChildren : null, toString : null, toJson : null, sortByTitle : null, sortByUrl : null, sortByVisited : null
}
;
$Data.Lang =
{
   getCurrentLanguage : null
};

var $Base =
{
   Dom :
   {
   }
   , Ajax :
   {
   }
   , Events :
   {
   }
   , Encoding :
   {
   }
   , Sorting :
   {
   }
}
;
$Base.Dom =
{
   init : null, getCssRulesBySelector : null, setCssRule : null
}
;
$Base.Ajax =
{
   XMLHttpRequest : null, ajaxGet : null, ajaxPost : null, error : null, __ORSC__ : null
}
;
$Base.Events =
{
   addEvent : null, fixEvent : null
}
;
$Base.Encoding =
{
   htmlEncode : null, attrEncode : null, regExpEncode : null, highlight : null
};

var $Env = function(a)
{
   return env[a]
};

var $Lang = function(b)
{
   var a = $Data.Lang.getCurrentLanguage();
   if(lang[a])
   {
      return lang[a][b]
   }
   else
   {
      return"####"
   }
};

var $ = function(a)
{
   return document.getElementById(a)
};

var $create = function(a)
{
   return document.createElement(a)
};

var $copy = function(a)
{
   window.prompt($Lang("copyGuide"), a);
   return true
};

function init()
{
   $Base.Dom.init($(View.Passport), Passport);
   $Base.Dom.init($(View.FavTable), FavTable);
   $Base.Dom.init($(View.FavHead), FavHead);
   $Base.Dom.init($(View.FavBody), FavBody);
   $Base.Dom.init($(View.NavBlock), NavBlock);
   $Base.Dom.init($(View.SearchBlock), SearchBlock);
   $Base.Dom.init($(View.ManageBlock), ManageBlock);
   $Base.Dom.init($(View.LocationBlock), LocationBlock);
   Controls.init()
}
window.onload = init;
function $debug(c)
{
   var a = $("debug");
   if( ! a)
   {
      alert(c);
      return false
   }
   var b = $create("pre");
   a.appendChild(b);
   b.innerHTML = c
}
Passport.Model.init = function()
{
   this.uid = $Data.User.getUid();
   this.nickname = $Base.Encoding.htmlUnescape($Data.User.getNickname());
   this.hasLogged = (this.uid > 0);
   if(this.hasLogged)
   {
      this.innerHTML = '<a id="btn-profile" class="nickname" href="'+$Env("profileUrl")+'" target="_blank">' + $Base.Encoding.htmlEncode(this.nickname) + '</a><div class="vr"></div><a id="btn-logout" class="btn-logout" href="'+$Env("logoutUrl")+'">' + $Lang("logout") + "</div>"
   }
   else
   {
      this.innerHTML = '<div id="btn-login" class="btn-login"><span>' + $Lang("login") + "</span></div>"
   }
}
;
Passport.Events.mouseover = function(b)
{
   b = b || window.event;
   var c = b.target || b.srcElement;
   var a = $("passport");
   while(c && c != a)
   {
      switch(c.className)
      {
         case"nickname" :
            this.className = "passport hover-on-nickname";
            return;
         case"vr" :
            this.className = "passport hover-on-nickname";
            return;
         case"btn-logout" :
            this.className = "passport hover-on-logout";
            return
      }
      c = c.parentNode
   }
}
;
Passport.Events.mouseout = function()
{
   this.className = "passport"
}
;
FavTable.Model.init = function()
{
   $(this.headId).init();
   $(this.bodyId).init()
}
;
FavHead.Model.init = function()
{
   this.innerHTML = "";
   var e = $Env("mapColumnsInfo");
   this.changeColumnWidth(e);
   for(var b in e)
   {
      var a = e[b];
      var c = FavHeadItem.create(b, a);
      if( ! c)
      {
         continue
      }
      c.id = "fav-head-item-" + b;
      this.appendChild(c);
      this.mapItemsId[b] = c.id;
      var f = FavHeadSeparater.create(b, c.id);
      f.id = "fav-head-separater-" + b;
      this.appendChild(f);
      this.mapSeparatersId[b] = f.id
   }
   if(this.childNodes.length > 1)
   {
      this.removeChild(this.lastChild)
   }
   var d = $Env("sortedBy");
   this.changeSortingMarks(d)
}
;
FavHead.Model.changeColumnWidth = function(d)
{
   for(var b in d)
   {
      var a = d[b];
      $(this.tableId).mapColumnsWidth[b] = a.width;
      var c = $Base.Dom.getCssRulesBySelector(a.selector);
      $Base.Dom.setCssRule(c[0], "width", a.width + "px")
   }
}
;
FavHead.Model.changeSortingMarks = function(b)
{
   var c = $(this.mapItemsId[this.sortedBy.column]);
   if(c)
   {
      c.className = ""
   }
   this.sortedBy = b;
   var a = $(this.mapItemsId[b.column]);
   if( ! a)
   {
      return
   }
   a.className = b.isReversed ? "reversed" : "sorted"
}
;
FavBody.Model.init = function()
{
   $Data.Fav.requestFavXml(
   {
      success : this.initFavXml, error : this.initError
   }
   )
}
;
FavBody.Model.initFavXml = function(a)
{
   $Data.Fav.initRequest(a);
   $(View.FavBody).initList()
}
;
FavBody.Model.initError = function(b)
{
   $Data.Fav.initError();
   var a = $Lang("readXml" + b);
   if( ! a)
   {
      a = $Lang("readXml500")
   }
   alert(a);
   $(View.FavBody).initList()
}
;
FavBody.Model.initList = function()
{
   this.currentCatogeryId = 0;
   this.currentFolderDepth = - 1;
   this.currentMode = "catogery";
   this.currentId = this.hoverId = "";
   this.buildCatogeryList($Data.Fav.getRootItem());
   $(View.NavBlock).init();
   $(View.SearchBlock).init();
   $(View.ManageBlock).init();
   $(View.LocationBlock).init()
}
;
FavBody.Model.buildCatogeryList = function(b)
{
   var d = this;
   var a = $(d.headId);
   var c = $Data.FavItem.getChildren(b);
   d.arrRootChildren = $Data.Fav.copyNodeSetToArray(c);
   c = d.sortListBy(c, a.sortedBy);
   d.buildList(c)
}
;
FavBody.Model.expandCatogeryList = function(d, e)
{
   var c = this;
   var a =
   {
   }
   ;
   for(var b in d)
   {
      a[b] = d[b]
   }
   for(var b in d["folder-" + e])
   {
      if(d["folder-" + e][b] == true)
      {
         c.expandFolder(c.mapItemsId[b]);
         c.expandCatogeryList(a, b)
      }
   }
}
;
FavBody.Model.buildList = function(f, h)
{
   var g = this;
   var b = f.length;
   var l = (b == 0 && g.currentMode == "search");
   $("fav-table").className = l ? "fav-table note-mode" : "fav-table list-mode";
   var e = - 1;
   var c = 0;
   if(h)
   {
      e = h.data.depth + 1;
      c = (e - g.currentFolderDepth) * 16
   }
   else
   {
      g.innerHTML = "";
      g.mapItemsId =
      {
      }
   }
   var a = $create("li");
   if(h && h.nextSibling)
   {
      g.insertBefore(a, h.nextSibling)
   }
   else
   {
      g.appendChild(a)
   }
   for(var d = 0; d < b; d ++ )
   {
      var j = f[d];
      var k = FavBodyItem.create(j,
      {
         icon : true
      }
      );
      k.data.depth = e;
      k.data.parentId = h ? h.data.id : null;
      g.insertBefore(k, a); g.mapItemsId[k.data.id] = k.id; k.icon.style.marginLeft = ((k.data.type == "file") ? (c - ( - 16)) : c) + "px"
   }
   g.removeChild(a, g)
}
;
FavBody.Model.sortListBy = function(b, a)
{
   switch(a.column)
   {
      case"title" :
      b.sort($Data.FavItem.sortByTitle);
      break;
      case"url" :
      b.sort($Data.FavItem.sortByUrl);
      break;
      case"visited" :
      b.sort($Data.FavItem.sortByVisited);
      break;
      default :
   }
   if(a.isReversed)
   {
      b.reverse()
   }
   return b
}
;
FavBody.Model.changeSorting = function(d)
{
   var c = this;
   var a = $(this.headId);
   var b = $Data.Fav.copyNodeSetToArray(c.arrRootChildren);
   b = c.sortListBy(b, a.sortedBy);
   c.buildList(b);
   if(c.currentMode == "catogery")
   {
      c.expandCatogeryList(c.mapExpandedFolders, c.currentCatogeryId)
   }
   c.changeCurrentItem(c.currentId);
   return
}
;
FavBody.Model.changeMode = function(g)
{
   var e = this;
   var a = $(this.headId);
   var d = this.currentMode;
   var f = $(View.SearchBlock);
   if((d == "search" || f.isInputing) && g != "search")
   {
      f.isInputing = false;
      Controls.clearFavKeywords();
      $(View.ManageBlock).initTotalCount()
   }
   var c = (g == "visited" || g == "loved" || g == "search") ? "visited" : null;
   this.currentMode = g;
   if(d != g)
   {
      a.changeSortingMarks(
      {
         column : c
      }
      )
   }
   switch(g)
   {
      case"visited" :
      var b = $Data.Fav.getMostVisitedItems();
      this.arrRootChildren = $Data.Fav.copyNodeSetToArray(b);
      b = e.sortListBy(b, a.sortedBy);
      this.buildList(b);
      break;
      case"loved" :
      var b = $Data.Fav.getMostLovedItems();
      this.arrRootChildren = $Data.Fav.copyNodeSetToArray(b);
      b = e.sortListBy(b, a.sortedBy);
      this.buildList(b);
      break;
      case"search" :
      this.changeKeywords(this.currentKeywords);
      break;
      default :
   }
   e.changeCurrentItem(e.currentId)
}
;
FavBody.Model.changeCatogery = function(c)
{
   var b = this;
   var a = $(this.headId);
   if(isNaN(c))
   {
      c = 0
   }
   if(this.currentMode != "catogery" || $(View.SearchBlock).isInputing)
   {
      this.changeMode("catogery")
   }
   this.currentCatogeryId = c;
   this.currentFolderDepth = $Data.FavItem.getDepth($Data.Fav.getItemById(c));
   this.buildCatogeryList($Data.Fav.getItemById(c));
   b.changeCurrentItem(b.currentId)
}
;
FavBody.Model.changeKeywords = function(b)
{
   this.currentKeywords = b;
   var a = $(this.headId);
   if(this.currentMode != "search")
   {
      this.changeMode("search");
      return
   }
   var c = $Data.Fav.getItemsByKeywords(b);
   this.arrRootChildren = $Data.Fav.copyNodeSetToArray(c);
   c = this.sortListBy(c, a.sortedBy);
   this.buildList(c);
   $(View.ManageBlock).initSearchCount(c.length);
   $("current-keywords").innerHTML = $Base.Encoding.htmlEncode(b)
}
;
FavBody.Model.changeCurrentItem = function(c)
{
   var b = $(c);
   if( ! b)
   {
      return
   }
   if(this.currentId && this.currentId != "")
   {
      var a = $(this.currentId);
      if(a)
      {
         a.className = (a.data.type == "folder") ? "folder-item" : "file-item"
      }
   }
   switch(b.className)
   {
      case"folder-item" :
      case"folder-item hover" :
      b.className = "folder-item current";
      break;
      case"file-item" :
      case"file-item hover" :
      b.className = "file-item current";
      break
   }
   this.currentId = b.id;
   this.hoverId = null;
   $(View.LocationBlock).update()
}
;
FavBody.Model.expandFolder = function(h)
{
   var f = this;
   var a = $(this.headId);
   var b = $(h);
   var d = $Data.Fav.getItemById(b.data.id);
   var g = $Data.FavItem.getId($Data.FavItem.getParent(d));
   if(b.isExpanded)
   {
      return
   }
   var e = $Data.FavItem.getChildren(d);
   var c = e.length;
   e = f.sortListBy(e, a.sortedBy);
   f.buildList(e, b);
   b.icon.src = $Env("iconExpandedUrl");
   b.isExpanded = true;
   if( ! f.mapExpandedFolders["folder-" + g])
   {
      f.mapExpandedFolders["folder-" + g] =
      {
      }
   }
   f.mapExpandedFolders["folder-" + g][b.data.id] = true;
   f.mapExpandedFolders["folder-" + b.data.id] =
   {
   }
}
;
FavBody.Model.collapseFolder = function(h)
{
   var f = this;
   var a = $(this.headId);
   var b = $(h);
   var e = $Data.Fav.getItemById(b.data.id);
   var g = $Data.FavItem.getId($Data.FavItem.getParent(e));
   if( ! b.isExpanded)
   {
      return
   }
   var d = b.nextSibling;
   while(d)
   {
      if(d.data.parentId == b.data.id)
      {
         var c = d;
         if(c.data.type == "folder")
         {
            this.collapseFolder(c.id)
         }
         d = d.nextSibling;
         this.removeChild(c, this)
      }
      else
      {
         break
      }
   }
   b.icon.src = $Env("iconCollapsedUrl");
   b.isExpanded = false;
   if(f.mapExpandedFolders["folder-" + g])
   {
      f.mapExpandedFolders["folder-" + g][b.data.id] = false
   }
   if(f.mapExpandedFolders["folder-" + b.data.id])
   {
      delete f.mapExpandedFolders["folder-" + b.data.id]
   }
}
;
FavBody.Events.click = function(b)
{
   b = b || window.event;
   var c = b.target || b.srcElement;
   var a = this;
   while(c && c != a)
   {
      switch(c.className)
      {
         case"folder-item hover" :
         case"file-item hover" :
         this.changeCurrentItem(c.id);
         return
      }
      c = c.parentNode
   }
}
;
FavBody.Events.mouseover = function(b)
{
   b = b || window.event;
   var d = b.target || b.srcElement;
   var a = this;
   while(d && d != a)
   {
      switch(d.className)
      {
         case"folder-item" :
         if(this.hoverId && this.hoverId != "")
         {
            var c = $(this.hoverId);
            if(c)
            {
               c.className = (c.data.type == "folder") ? "folder-item" : "file-item"
            }
         }
         this.hoverId = d.id;
         d.className = "folder-item hover";
         return;
         case"file-item" :
         if(this.hoverId && this.hoverId != "")
         {
            var c = $(this.hoverId);
            if(c)
            {
               c.className = (c.data.type == "folder") ? "folder-item" : "file-item"
            }
         }
         this.hoverId = d.id;
         d.className = "file-item hover";
         return
      }
      d = d.parentNode
   }
}
;
FavBody.Events.mouseout = function(a)
{
   if(this.hoverId && this.hoverId != "")
   {
      var b = $(this.hoverId);
      if(b)
      {
         b.className = (b.data.type == "folder") ? "folder-item" : "file-item"
      }
      this.hoverId = null
   }
}
;
FavHeadItem.create = function(c, b)
{
   var a = $create("li");
   $Base.Dom.init(a, FavHeadItem);
   a.innerHTML = "<span>" + $Lang("favTable" + c) + "</span>";
   a.firstChild.className = b.className;
   a.offset = c;
   return a
}
;
FavHeadItem.Events.click = function(a)
{
   var d = this;
   var b =
   {
   }
   ;
   b.column = d.offset;
   b.isReversed = false;
   var c = $(d.headId).sortedBy;
   if(c.column == b.column)
   {
      if(c.isReversed)
      {
         b.column = null
      }
      else
      {
         if( ! c.isReversed)
         {
            b.isReversed = true
         }
      }
   }
   Controls.sortFavTable(b)
}
;
FavHeadSeparater.create = function(c, b)
{
   var a = $create("li");
   $Base.Dom.init(a, FavHeadSeparater);
   a.innerHTML = "<span></span>";
   a.className = "vr";
   a.offset = c;
   a.itemId = b;
   return a
}
;
FavHeadSeparater.Events.mousedown = function(b)
{
   b = b || window.event;
   var f = this;
   var a = $(f.headId);
   var e = false;
   for(var c in a.mapItemsId)
   {
      if(c == f.offset)
      {
         f.itemLeftOffset = c;
         e = true;
         continue
      }
      if(e)
      {
         f.itemRightOffset = c;
         break
      }
   }
   if( ! a.mapItemsId[f.itemLeftOffset] || ! a.mapItemsId[f.itemRightOffset])
   {
      return
   }
   var d = $(f.tableId);
   f.originalLeftItemWidth = d.mapColumnsWidth[f.itemLeftOffset];
   f.originalRightItemWidth = d.mapColumnsWidth[f.itemRightOffset];
   f.originalX = b.clientX || b.pageX;
   document.onmousemove = function(g)
   {
      g = g || window.event;
      g = $Base.Events.fixEvent(g);
      g.preventDefault();
      f.currentX = g.clientX || g.pageX;
      var h = f.originalX - f.currentX;
      var i = $Env("minColumnWidth");
      var j = $Env("mapColumnsInfo");
      if(f.originalLeftItemWidth - h < i)
      {
         j[f.itemLeftOffset].width = i;
         j[f.itemRightOffset].width = f.originalLeftItemWidth + f.originalRightItemWidth - i
      }
      else
      {
         if(f.originalRightItemWidth + h < i)
         {
            j[f.itemRightOffset].width = i;
            j[f.itemLeftOffset].width = f.originalLeftItemWidth + f.originalRightItemWidth - i
         }
         else
         {
            j[f.itemLeftOffset].width = f.originalLeftItemWidth - h;
            j[f.itemRightOffset].width = f.originalRightItemWidth + h
         }
      }
      a.changeColumnWidth(j)
   }
   ;
   document.onmouseup = function()
   {
      document.onmousemove = null;
      document.onmouseup = null
   }
}
;
FavBodyItem.create = function(i, d)
{
   var k = $create("li");
   $Base.Dom.init(k, FavBodyItem);
   var c = $Data.FavItem.toJson(i, d);
   k.data = c;
   k.id = "fav-body-item-" + c.id;
   var f = $Base.Encoding.attrEncode(c.title);
   switch(c.type)
   {
      case"folder" :
      var b = $Base.Encoding.htmlEncode(c.title);
      k.className = "folder-item";
      k.innerHTML = '<span class="item-title" title="'+f+'"><img alt="" src="'+$Env("iconCollapsedUrl")+'" /><img alt="" src="'+$Env("iconFolderUrl")+'" /> ' + b + '</span><a name="fav-item-'+k.data.id+'"></a>';
      k.troggleBtn = k.firstChild;
      k.icon = k.troggleBtn.firstChild;
      k.icon.type = c.type;
      k.troggleBtn.itemId = k.id;
      $Base.Events.addEvent(k.troggleBtn, "click", k.troggle);
      break;
      case"file" :
      var g = $Base.Encoding.attrEncode(c.url);
      var h = ($(View.FavBody).currentKeywords);
      var j = new RegExp("(" + $Base.Encoding.regExpEncode(h) + ")", "ig");
      if(h.length > 0)
      {
         var b = $Base.Encoding.highlight(c.title, j);
         var e = $Base.Encoding.highlight(c.url, j)
      }
      else
      {
         var b = $Base.Encoding.htmlEncode(c.title);
         var e = $Base.Encoding.htmlEncode(c.url)
      }
      k.className = "file-item";
      var a = "http://www.google.com/s2/favicons?domain_url=" + g;
      k.innerHTML = '<span class="item-title" title="'+f+'"><img alt="" src="'+a+'" onerror="this.src=\''+$Env("iconFileUrl")+'\'" /><a href="'+g+'" target="_blank">' + b + '</a></span><span class="item-url" title="'+g+'"><a href="'+g+'" target="_blank" title="'+g+'">' + e + '</a></span><span class="item-visited">' + c.visited + "</span>";
      k.icon = k.firstChild.firstChild;
      break;
      default :
   }
   return k
}
;
FavBodyItem.Model.copyUrl = function()
{
   var a = ($copy(this.url))
}
;
FavBodyItem.Model.troggle = function()
{
   Controls.troggleFavFolder(this.itemId)
}
;
NavBlock.Model.init = function()
{
   if( ! this.hasInit)
   {
      $(this.navTitleId).innerHTML = $Lang("navTitle");
      var f = $(this.customNavId);
      f.innerHTML = "";
      var b = [
      {
         mode : "visited", title : $Lang("navMostVisited"), icon : $Env("iconMostVisitedUrl")
      }
      ,
      {
         mode : "loved", title : $Lang("navMostLoved"), icon : $Env("iconMostLovedUrl")
      }
      ];
      var d;
      for(var e = 0; d = b[e]; e ++ )
      {
         f.appendChild(CustomNavItem.create(d))
      }
      this.hasInit = true
   }
   var a = $(this.catogeryNavId);
   a.innerHTML = "";
   var b = [];
   var c = $Data.Fav.getRootItem();
   b.push(
   {
      title : $Lang("navAll"), count : $Data.FavItem.getCount(c), depth : 0, id : 0
   }
   );
   var h = $Data.FavItem.getChildren(c);
   var g;
   for(var e = 0; g = h[e]; e ++ )
   {
      if($Data.FavItem.getType(g) == "folder")
      {
         b.push(
         {
            id : $Data.FavItem.getId(g), depth : 1, title : $Data.FavItem.getTitle(g), count : $Data.FavItem.getCount(g)
         }
         )
      }
   }
   var d;
   for(var e = 0; d = b[e]; e ++ )
   {
      a.appendChild(CatogeryNavItem.create(d))
   }
   this.setCurrentItem("catogery")
}
;
NavBlock.Model.setCurrentItem = function(d, c)
{
   var a;
   switch(d)
   {
      case"catogery" :
      c = c || 0;
      a = $("catogery-nav-" + c);
      break;
      case"visited" :
      case"loved" :
      a = $("custom-nav-" + d);
      break;
      default :
   }
   if(this.currentItemId && this.currentItemId != "")
   {
      var b = $(this.currentItemId);
      if(b)
      {
         b.className = ""
      }
   }
   if(a)
   {
      this.currentItemId = a.id;
      a.className = "current"
   }
}
;
CustomNavItem.create = function(b)
{
   var a = $create("li");
   $Base.Dom.init(a, CustomNavItem);
   a.data = b;
   a.innerHTML = '<img alt="" src="'+b.icon+'" /> ' + b.title;
   a.id = "custom-nav-" + (b.mode || "all");
   return a
}
;
CustomNavItem.Events.click = function(a)
{
   Controls.changeFavMode(this.data.mode)
}
;
CatogeryNavItem.create = function(c)
{
   var b = $create("li");
   $Base.Dom.init(b, CatogeryNavItem);
   b.data = c;
   var a = (c.id) ? $Env("iconFolderUrl") : $Env("iconAllUrl");
   b.innerHTML = '<img alt="" src="'+$Base.Encoding.attrEncode(a)+'" /> ' + $Base.Encoding.htmlEncode(c.title) + ' <span class="items-count">(' + c.count + ")</span>";
   b.title = c.title;
   b.id = "catogery-nav-" + (c.id || "0");
   return b
}
;
CatogeryNavItem.Events.click = function(a)
{
   Controls.changeFavCatogery(this.data.id)
}
;
SearchBlock.Model.init = function()
{
   var b = $(this.keywordsId);
   var a = $(this.btnId);
   b.className = "search-keywords empty";
   b.value = $Lang("searchNotes");
   if( ! this.hasInit)
   {
      if(window.addEventListener)
      {
         b.addEventListener("input", this.changeKeywords, false)
      }
      else
      {
         $Base.Events.addEvent(b, "keyup", this.changeKeywords)
      }
      $Base.Events.addEvent(b, "click", this.focusKeywords);
      $Base.Events.addEvent(b, "blur", this.blurKeywords);
      $Base.Events.addEvent(a, "click", this.clearKeywords);
      this.hasInit = true
   }
}
;
SearchBlock.Model.focusKeywords = function()
{
   var a = this;
   if(a.className == "search-keywords empty")
   {
      a.className = "search-keywords";
      a.value = ""
   }
}
;
SearchBlock.Model.blurKeywords = function()
{
   var a = this;
   if(a.value == "")
   {
      a.className = "search-keywords empty";
      a.value = $Lang("searchNotes")
   }
}
;
SearchBlock.Model.changeKeywords = function()
{
   var b = $(View.SearchBlock);
   var c = this;
   b.currentKeywords = c.value;
   b.isInputing = true;
   var a = (new Date()).valueOf();
   b.currentChangingTime = a;
   window.setTimeout(function()
   {
      if( ! b.isInputing || b.currentChangingTime != a)
      {
         return
      }
      if(b.currentKeywords != c.value)
      {
         SearchBlock.Model.changeKeywords();
         return
      }
      if(c.value != "")
      {
         b.isEmpty = false;
         b.doSearch()
      }
      else
      {
         Controls.changeFavCatogery();
         $("search-keywords").focus();
         window.setTimeout(function()
         {
            $("search-keywords").className = "search-keywords";
            $("search-keywords").value = ""
         }
         , 10)
      }
      b.isInputing = false
   }
   , 1000)
}
;
SearchBlock.Model.clearKeywords = function()
{
   Controls.changeFavCatogery()
}
;
SearchBlock.Model.doSearch = function()
{
   if(this.isEmpty)
   {
      Controls.clearFavKeywords()
   }
   else
   {
      var a = this.currentKeywords;
      Controls.changeFavKeywords(a)
   }
}
;
SearchBlock.Events.mouseover = function()
{
   this.className = "search-block hover-on-search"
}
;
SearchBlock.Events.mouseout = function()
{
   this.className = "search-block"
}
;
ManageBlock.Model.init = function()
{
   if( ! this.hasInit)
   {
      this.innerHTML = '<div id="total-count-wrapper" class="total-count-wrapper"></div><div class="refresh-btn"><span>' + $Lang("refresh") + "</span></div>";
      $Base.Events.addEvent(this.lastChild, "click", Controls.reload);
      $Base.Events.addEvent(this.lastChild, "mouseover", this.hoverOnRehreshBtn);
      $Base.Events.addEvent(this.lastChild, "mouseout", this.hoverOffRehreshBtn);
      this.hasInit = true
   }
   this.initTotalCount()
}
;
ManageBlock.Model.initTotalCount = function()
{
   var b = $Data.FavItem.getCount($Data.Fav.getRootItem());
   var a = $("total-count-wrapper");
   if( ! a)
   {
      return
   }
   a.innerHTML = $Lang("totalCountBefore") + b + $Lang("totalCountAfter"); a.className = "total-count-wrapper"
}
;
ManageBlock.Model.initSearchCount = function(b)
{
   var a = $("total-count-wrapper");
   if( ! a)
   {
      return
   }
   a.innerHTML = $Lang("totalSearchBefore") + b + $Lang("totalSearchAfter"); a.className = "total-search-wrapper"
}
;
ManageBlock.Model.hoverOnRehreshBtn = function()
{
   this.className = "refresh-btn refresh-btn-hover"
}
;
ManageBlock.Model.hoverOffRehreshBtn = function()
{
   this.className = "refresh-btn"
}
;
LocationBlock.Model.init = function()
{
   this.update()
}
;
LocationBlock.Model.update = function()
{
   var b = $(this.bodyId).currentId;
   var f = 0;
   if(b && $(b))
   {
      f = $(b).data.id
   }
   if( ! f)
   {
      f = $(View.FavBody).currentCatogeryId || 0
   }
   var a = [];
   var d = $Data.Fav.getRootItem();
   var h = $Data.Fav.getItemById(f);
   while(h != d)
   {
      a.push($Data.FavItem.toJson(h));
      h = $Data.FavItem.getParent(h)
   }
   a.push(
   {
      title : $Lang("navAll"), id : 0
   }
   );
   a.reverse();
   this.arrFolderId = [];
   this.innerHTML = $Lang("locationLabel");
   for(var g = 0, e; e = a[g]; g ++ )
   {
      if(e.type == "file")
      {
         continue
      }
      var h = $create("a");
      this.appendChild(h);
      h.innerHTML = e.title;
      h.title = e.title;
      h.href = "#fav-item-" + e.id;
      h.data = e;
      h.onclick = function()
      {
         return false
      }
      ;
      var c = document.createTextNode(" \\ ");
      this.appendChild(c);
      this.arrFolderId.push(e.id)
   }
}
;
LocationBlock.Events.click = function(a)
{
   a = a || window.event;
   var b = a.target || a.srcElement;
   while(b != this)
   {
      if(b.tagName && b.tagName.toLowerCase() == "a" && b.data)
      {
         b.blur();
         Controls.scrollToFavItem(b.data.id);
         return
      }
      b = b.parentNode
   }
}
;
Controls.init = function()
{
   Controls.resize();
   $(View.Passport).init();
   $(View.FavTable).init();
   window.onresize = Controls.resize
}
;
Controls.reload = function()
{
   $(View.FavTable).init()
}
;
Controls.changeFavMode = function(a)
{
   $(View.NavBlock).setCurrentItem(a);
   $(View.FavBody).changeMode(a);
   $(View.LocationBlock).update()
}
;
Controls.changeFavCatogery = function(a)
{
   a = a || 0;
   $(View.NavBlock).setCurrentItem("catogery", a);
   $(View.FavBody).changeCatogery(a, true);
   $(View.LocationBlock).update();
   Controls.scrollToFavItem(a)
}
;
Controls.changeFavKeywords = function(a)
{
   $(View.NavBlock).setCurrentItem("keywords");
   var b = $(View.FavBody);
   b.changeKeywords(a);
   $(View.LocationBlock).update()
}
;
Controls.clearFavKeywords = function(b)
{
   var a = $(View.SearchBlock);
   var d = $(a.keywordsId);
   d.focus();
   d.className = "search-keywords";
   a.currentKeywords = d.value = "";
   a.isEmpty = true;
   if( ! b)
   {
      d.blur()
   }
   var c = $(View.FavBody);
   c.changeKeywords("");
   $(View.LocationBlock).update()
}
;
Controls.sortFavTable = function(a)
{
   $(View.FavHead).changeSortingMarks(a);
   $(View.FavBody).changeSorting(a);
   $(View.LocationBlock).update()
}
;
Controls.scrollToFavItem = function(a)
{
   a = a || 0;
   var h = $(View.FavBody);
   var e = $(View.LocationBlock);
   if(h.currentMode != "catogery")
   {
      var d = e.arrFolderId;
      var g =
      {
         "folder-0" :
         {
         }
      }
      ;
      for(var b = 1, k, c = 0; k = d[b]; b ++ )
      {
         g["folder-" + k] =
         {
         }
         ;
         g["folder-" + c][k] = true;
         if(k == a)
         {
            break
         }
         c = k
      }
      Controls.changeFavCatogery(0);
      h.mapExpandedFolders = g;
      h.expandCatogeryList(h.mapExpandedFolders, h.currentCatogeryId);
      Controls.scrollToFavItem(a);
      return
   }
   if(h.currentId && h.currentId != "")
   {
      var l = $(h.currentId);
      if(l)
      {
         l.className = (l.data.type == "folder") ? "folder-item" : "file-item"
      }
   }
   if(h.currentCatogeryId > 0 && ! a)
   {
      h.currentId = null;
      h.hoverId = null;
      Controls.changeFavCatogery(0);
      return
   }
   var f = $("fav-body-item-" + a);
   if(a == h.currentCatogeryId || ! f)
   {
      h.currentId = null;
      h.hoverId = null;
      e.update();
      var j = h.firstChild;
      if(j)
      {
         j.scrollIntoView()
      }
      return
   }
   f.className = "folder-item current";
   h.currentId = f.id;
   h.hoverId = null;
   e.update();
   f.scrollIntoView()
}
;
Controls.troggleFavFolder = function(c)
{
   var a = $(c);
   var b = $(View.FavBody);
   if(a.isExpanded)
   {
      b.collapseFolder(c)
   }
   else
   {
      b.expandFolder(c)
   }
}
;
Controls.resize = function()
{
   var c = document.documentElement.clientWidth;
   var a = document.documentElement.clientHeight;
   var b = $Env("windowSize");
   b.wrapper.width = (c > 960) ? c - 40 : 920, b.wrapper.height = (a > 500) ? a : 500, b.content.width = b.wrapper.width - b.navigator.width - 3;
   b.main.height = b.wrapper.height - 100;
   b.navigator.height = b.main.height - 2;
   b.catogery.height = b.main.height - 100;
   b.table.height = b.main.height - 99;
   var g = $Base.Dom.getCssRulesBySelector(b.wrapper.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "width", b.wrapper.width + "px")
   }
   var g = $Base.Dom.getCssRulesBySelector(b.content.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "width", b.content.width + "px")
   }
   var g = $Base.Dom.getCssRulesBySelector(b.main.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "height", b.main.height + "px")
   }
   var g = $Base.Dom.getCssRulesBySelector(b.navigator.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "height", b.navigator.height + "px")
   }
   var g = $Base.Dom.getCssRulesBySelector(b.catogery.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "height", b.catogery.height + "px")
   }
   var g = $Base.Dom.getCssRulesBySelector(b.table.selector);
   if(g)
   {
      $Base.Dom.setCssRule(g[g.length - 1], "height", b.table.height + "px")
   }
   var e = $Env("minColumnWidth");
   var f = $Env("mapColumnsInfo");
   var d = b.content.width - f.title.width - f.visited.width - 80;
   if(d < e)
   {
      f.url.width = f.visited.width = e;
      f.title.width = b.content.width - e - e - 80
   }
   else
   {
      f.url.width = d
   }
   if($(View.FavTable).mapColumnsWidth.url)
   {
      $(View.FavHead).changeColumnWidth(f)
   }
}
;
$Data.User.getNickname = function()
{
   return data.user.nickname
}
;
$Data.User.getUid = function()
{
   return data.user.uid
}
;
$Data.Fav.requestFavXml = function(a)
{
   $Base.Ajax.ajaxGet($Env("favXmlUrl"), "uid=" + $Data.User.getUid(), a)
}
;
$Data.Fav.initRequest = function(c)
{
   data.fav =
   {
   }
   ;
   data.fav.root = c.responseXML.getElementsByTagName("favorites")[0];
   try
   {
      var d = data.fav.root.childNodes;
      for(var a = 0, b; b = d[a]; a ++ )
      {
         if( ! b || ! b.tagName)
         {
            data.fav.root.removeChild(b);
            continue
         }
         if($Data.FavItem.isTrash(b))
         {
            data.fav.root.removeChild(b)
         }
         if($Data.FavItem.getTitle(b) == "__groups")
         {
            data.fav.root.removeChild(b)
         }
      }
      data.fav.folders = data.fav.root.getElementsByTagName("f");
      data.fav.files = data.fav.root.getElementsByTagName("e")
   }
   catch(f)
   {
      alert($Lang("readXml500"));
      $Data.Fav.initError();
      if(c && c.responseText && c.responseText.length > 5)
      {
         $Base.Ajax.ajaxGet($Env("favErrorUrl"), "error=" + $Data.User.getUid() + "+" + encodeURIComponent(c.responseText.substring(0, 100)), function()
         {
         }
         )
      }
   }
}
;
$Data.Fav.initError = function()
{
   data.fav =
   {
   }
   ;
   data.fav.root = document.createElement("favorites");
   data.fav.folders = [];
   data.fav.files = []
}
;
$Data.Fav.getRootItem = function()
{
   return data.fav.root
}
;
$Data.Fav.getFoldersIndex = function()
{
   return data.fav.folders
}
;
$Data.Fav.getFilesIndex = function()
{
   return data.fav.files
}
;
$Data.Fav.getItemById = function(e)
{
   if( ! e || e == 0)
   {
      return data.fav.root
   }
   var a;
   var c = data.fav.folders;
   for(var b = 0; a = c[b]; b ++ )
   {
      if(a.getAttribute("i") == e)
      {
         return a
      }
   }
   var d = data.fav.files;
   for(var b = 0; a = d[b]; b ++ )
   {
      if(a.getAttribute("i") == e)
      {
         return a
      }
   }
   return null
}
;
$Data.Fav.getMostVisitedItems = function()
{
   var a = [];
   var d = data.fav.files;
   var b;
   for(var c = 0; b = d[c]; c ++ )
   {
      a.push(b)
   }
   return a.sort($Data.FavItem.sortByVisited).slice(0, 10)
}
;
$Data.Fav.getMostLovedItems = function()
{
   var a = [];
   var d = data.fav.files;
   var b;
   for(var c = 0; b = d[c]; c ++ )
   {
      if(b.getAttribute("m") == 1)
      {
         a.push(b)
      }
   }
   return a
}
;
$Data.Fav.getItemsByKeywords = function(f)
{
   if( ! f || f == "")
   {
      return[]
   }
   var d = new RegExp($Base.Encoding.regExpEncode(f), "i");
   var a = [];
   var g = data.fav.files;
   var b;
   for(var e = 0; b = g[e]; e ++ )
   {
      var h = $Data.FavItem.getTitle(b);
      var c = $Data.FavItem.getUrl(b);
      if(h.match(d) || c && c.match(d))
      {
         a.push(b)
      }
   }
   return a
}
;
$Data.Fav.copyNodeSetToArray = function(d)
{
   var a = [];
   var b;
   for(var c = 0; b = d[c]; c ++ )
   {
      a.push(b)
   }
   return a
}
;
$Data.FavItem.getId = function(a)
{
   return a.getAttribute("i") || 0
}
;
$Data.FavItem.getTitle = function(a)
{
   return a.getAttribute("t")
}
;
$Data.FavItem.getType = function(a)
{
   switch(a.tagName)
   {
      case"f" :
      return"folder";
      case"e" :
      return"file";
      default :
      return""
   }
}
;
$Data.FavItem.getUrl = function(a)
{
   return a.getAttribute("u")
}
;
$Data.FavItem.getVisited = function(a)
{
   return a.getAttribute("v")
}
;
$Data.FavItem.getCount = function(a)
{
   return a.getElementsByTagName("e").length
}
;
$Data.FavItem.isTrash = function(a)
{
   return(a.getAttribute("r") == "Trash")
}
;
$Data.FavItem.getDepth = function(b)
{
   var c = - 1;
   var a = b;
   while(a && a != data.fav.root)
   {
      c ++ ;
      a = a.parentNode
   }
   return c
}
;
$Data.FavItem.getLocation = function(c)
{
   var a = [];
   var b = c;
   while(b && b != data.fav.root)
   {
      a.push(b);
      b = b.parentNode
   }
   return a
}
;
$Data.FavItem.getParent = function(a)
{
   return a.parentNode
}
;
$Data.FavItem.getChildren = function(b)
{
   var e = b.childNodes;
   var d = [];
   var a;
   for(var c = 0; a = e[c]; c ++ )
   {
      if(a && a.tagName)
      {
         d.push(a)
      }
   }
   return d
}
;
$Data.FavItem.toString = function(c)
{
   var f = $Data.FavItem.getTitle(c);
   var e = $Data.FavItem.getType(c);
   var a = "[" + e + "]" + f;
   if(e == "file")
   {
      var d = $Data.FavItem.getUrl(c);
      var b = $Data.FavItem.getVisited(c);
      a += ": " + d + " (" + b + " visited)"
   }
   return a
}
;
$Data.FavItem.toJson = function(b, c)
{
   if( ! c)
   {
      c =
      {
         count : true, depth : true, location : true, parentId : true
      }
   }
   var a =
   {
   }
   ;
   a.id = $Data.FavItem.getId(b);
   a.title = $Data.FavItem.getTitle(b);
   a.type = $Data.FavItem.getType(b);
   if(c.depth)
   {
      a.depth = $Data.FavItem.getDepth(b)
   }
   if(c.location)
   {
      a.location = $Data.FavItem.getLocation(b)
   }
   if(c.parentId)
   {
      a.parentId = $Data.FavItem.getId($Data.FavItem.getParent(b))
   }
   switch(a.type)
   {
      case"folder" :
      if(c.count)
      {
         a.count = $Data.FavItem.getCount(b)
      }
      break;
      case"file" :
      a.url = $Data.FavItem.getUrl(b);
      a.visited = $Data.FavItem.getVisited(b);
      break;
      default :
   }
   return a
}
;
$Data.FavItem.sortByTitle = function(d, c)
{
   var f = $Data.FavItem.getType(d);
   var e = $Data.FavItem.getType(c);
   if(f != e)
   {
      return(f == "folder") ? - 1 : 1
   }
   return $Data.FavItem.getTitle(d).localeCompare($Data.FavItem.getTitle(c))
}
;
$Data.FavItem.sortByUrl = function(d, c)
{
   var f = $Data.FavItem.getType(d);
   var e = $Data.FavItem.getType(c);
   if(f != e)
   {
      return(f == "folder") ? - 1 : 1
   }
   else
   {
      if(f == "folder")
      {
         return $Data.FavItem.getTitle(d).localeCompare($Data.FavItem.getTitle(c))
      }
      else
      {
         return $Data.FavItem.getUrl(d).localeCompare($Data.FavItem.getUrl(c))
      }
   }
}
;
$Data.FavItem.sortByVisited = function(d, c)
{
   var f = $Data.FavItem.getType(d);
   var e = $Data.FavItem.getType(c);
   if(f != e)
   {
      return(f == "folder") ? - 1 : 1
   }
   else
   {
      if(f == "folder")
      {
         return $Data.FavItem.getTitle(d).localeCompare($Data.FavItem.getTitle(c))
      }
      else
      {
         return $Data.FavItem.getVisited(c) - $Data.FavItem.getVisited(d)
      }
   }
}
;
$Data.Lang.getCurrentLanguage = function()
{
   return data.lang || "en-us"
}
;
$Base.Dom.init = function(c, b)
{
   if(b.Model)
   {
      for(var a in b.Model)
      {
         c[a] = b.Model[a]
      }
   }
   if(b.Events)
   {
      for(var a in b.Events)
      {
         $Base.Events.addEvent(c, a, b.Events[a])
      }
   }
}
;
$Base.Dom.getCssRulesBySelector = function(c)
{
   var e = document.styleSheets[0].cssRules || document.styleSheets[0].rules;
   var a = [];
   for(var b = 0, d; d = e[b]; b ++ )
   {
      var d = e[b];
      if(d && d.selectorText && d.selectorText.toLowerCase() == c)
      {
         a.push(d)
      }
   }
   return a
}
;
$Base.Dom.setCssRule = function(c, a, b)
{
   if(c)
   {
      c.style.cssText = a + ": " + b + ";"
   }
}
;
$Base.Ajax.XMLHttpRequest = function()
{
   if(window.XMLHttpRequest)
   {
      return new XMLHttpRequest
   }
   else
   {
      if(window.ActiveXObject)
      {
         var a;
         try
         {
            a = new ActiveXObject("Msxml2.XMLHTTP")
         }
         catch(b)
         {
            try
            {
               a = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch(b)
            {
               return null
            }
         }
         return a
      }
      else
      {
         return null
      }
   }
}
;
$Base.Ajax.ajaxGet = function(c, b, a, e)
{
   var d = $Base.Ajax.XMLHttpRequest();
   if(b != "")
   {
      b = "?" + b
   }
   d.open("GET", c + b, ! e);
   d.onreadystatechange = function()
   {
      $Base.Ajax.__ORSC__(d, a)
   }
   ;
   d.send("")
}
;
$Base.Ajax.ajaxPost = function(c, b, a, e)
{
   var d = $Base.Ajax.XMLHttpRequest();
   d.open("POST", c, ! e);
   d.setRequestHeader("Method", "POST " + c + " HTTP/1.1");
   d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); d.onreadystatechange = function()
   {
      $Base.Ajax.__ORSC__(d, a)
   }
   ;
   d.send(b)
}
;
$Base.Ajax.error = function(a)
{
   alert("Ajax error" + a)
}
;
$Base.Ajax.__ORSC__ = function(d, a)
{
   if(d.readyState != 4)
   {
      return
   }
   try
   {
      var c = d.status
   }
   catch(b)
   {
      $Base.Ajax.error("HTTP status code not find!")
   }
   if(a)
   {
      if(a.success)
      {
         if(c == 200)
         {
            a.success(d)
         }
         else
         {
            a.error ? a.error(c) : $Base.Ajax.error(c)
         }
         if(a.timeout)
         {
            setTimeout(function()
            {
               if(d.readyState == 4)
               {
                  return
               }
               d.abort();
               d.onreadystatechange = DUMMY;
               $Base.Ajax.error(408)
            }
            , a.timeout)
         }
      }
      else
      {
         if(c == 200)
         {
            a(d)
         }
         else
         {
            $Base.Ajax.error(c)
         }
      }
   }
}
;
$Base.Events.addEvent = function(a, c, b)
{
   a["on" + c] = b
}
;
$Base.Events.fixEvent = function(a)
{
   a.preventDefault = function()
   {
      this.returnValue = false
   }
   ;
   a.stopPropagation = function()
   {
      this.cancelBubble = true
   }
   ;
   return a
}
;
$Base.Encoding.htmlUnescape = function(b)
{
   var a = document.createElement("div");
   a.innerHTML = b;
   if(a.innerText)
   {
      return a.innerText
   }
   else
   {
      return a.textContent
   }
}
;
$Base.Encoding.htmlEncode = function(a)
{
   a = a.replace(/\&/g, "&amp;");
   a = a.replace(/\</g, "&lt;");
   a = a.replace(/\>/g, "&gt;");
   a = a.replace(/\s/g, "&nbsp;");
   return a
}
;
$Base.Encoding.attrEncode = function(a)
{
   a = $Base.Encoding.htmlEncode(a);
   a = a.replace(/\"/g," & quot; ");
   return a
}
;
$Base.Encoding.regExpEncode = function(a)
{
   if(a == undefined)
   {
      return""
   }
   a = a.replace(/\$/g, "\\$");
   a = a.replace(/\\/g,"\\\\");a=a.replace(/\^/g, "\\^");
   a = a.replace(/\*/g, "\\*");
   a = a.replace(/\?/g, "\\?");
   a = a.replace(/\+/g, "\\+");
   a = a.replace(/\./g, "\\.");
   a = a.replace(/\|/g, "\\|");
   a = a.replace(/\[/g, "\\[");
   a = a.replace(/\]/g, "\\]");
   a = a.replace(/\(/g,"\\(");
   a = a.replace(/\)/g, "\\)");
   a = a.replace(/\{/g, "\\{");
   a = a.replace(/\}/g, "\\}");
   return a
}
;
$Base.Encoding.highlight = function(f, d)
{
   var c;
   var a = [];
   var g = 0, b = 0, e = 0;
   while((c = d.exec(f)) != null)
   {
      b = d.lastIndex;
      e = c[0].length;
      a.push($Base.Encoding.htmlEncode(f.substring(g, b - e)), $Base.Encoding.htmlEncode(f.substr(b - e, e)));
      g = b
   }
   a.push(f.substr(b));
   return a.join("<>").replace(/<>([^<]+)<>/ig, "<strong>$1</strong>")
}
;
