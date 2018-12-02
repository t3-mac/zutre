(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf1870a"],{"180e":function(e,t,n){e.exports=n.p+"img/avatar.1549be29.png"},"2db8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("z-container",[a("z-breadcrumbs",{attrs:{items:[{name:"Home",link:{name:"home"}},{name:"Components"},{name:"Menu",link:{name:"docsMenu"}}]}}),a("h4",[e._v("Menu")]),a("p",[e._v("Menus are vertical list of links or buttons for actions and navigation.")]),a("p",[e._v("\n        Components:\n        "),a("code",[e._v("<z-menu>")]),e._v(","),a("code",[e._v("<z-menu-divider />")]),e._v(", "),a("code",[e._v("<z-menu-item>")])]),a("z-divider"),a("z-menu",[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-icon"},[a("img",{staticClass:"avatar",attrs:{src:n("180e"),alt:"Avatar"}})]),a("div",{staticClass:"tile-content"},[e._v("Steve Rogers")])]),a("z-menu-divider"),a("z-menu-item",{attrs:{href:"#",name:"Profile"}}),a("z-menu-item",{attrs:{href:"#",name:"Settings"}}),a("z-menu-item",{attrs:{href:"#",name:"Logout"}})],1),a("z-code",{attrs:{lang:"Vue"}},[e._v('\nimport { ZMenu, ZMenuItem, ZMenuDivider, ZAvatar, ZTile, ZTileContent, ZTileIcon } from \'zutre\'\n\n<z-menu>\n  <tile :center="true">\n    <z-tile-icon>\n      <z-avatar src="../avatar.png" alt="Avatar" />\n    </z-tile-icon>\n    <z-tile-content>Steve Rogers</z-tile-content>\n  </tile>\n\n  <z-menu-divider />\n\n  <z-menu-item href="#" name="Profile" />\n  <z-menu-item href="#" name="Settings" />\n  <z-menu-item href="#" name="Logout" />\n</z-menu>\n      ')]),a("z-divider",{attrs:{content:"OR"}}),a("z-menu",[a("z-menu-divider",{attrs:{content:"LINKS"}}),a("z-menu-item",{attrs:{href:"#",name:"Home"}}),a("z-menu-item",{attrs:{href:"#",name:"About us"}}),a("z-menu-item",{attrs:{href:"#",name:"Contact"}})],1),a("z-code",{attrs:{lang:"Vue"}},[e._v('\nimport { ZMenu, ZMenuItem, ZMenuDivider } from \'zutre\'\n\n<z-menu>\n  <z-menu-divider content="LINKS" />\n\n  <z-menu-item href="#" name="Home" />\n  <z-menu-item href="#" name="About us" />\n  <z-menu-item href="#" name="Contact" />\n</z-menu>\n      ')]),a("z-divider",{attrs:{content:"API"}}),a("h4",[e._v("API")]),a("h5",[e._v("MenuDivider "),a("code",[e._v("<z-menu-divider />")])]),a("z-table",[a("z-thead",[a("z-th",[e._v("Name")]),a("z-th",[e._v("Description")]),a("z-th",[e._v("Type")]),a("z-th",[e._v("Values")]),a("z-th",[e._v("Default")])],1),a("z-tbody",[a("z-tr",[a("z-td",[a("code",[e._v("content")])]),a("z-td",[e._v("centered text on divider")]),a("z-td",[e._v("String")]),a("z-td",[e._v("--")]),a("z-td",[e._v("---")])],1)],1)],1),a("br"),a("h5",[e._v("MenuItem "),a("code",[e._v("<z-menu-item />")])]),a("z-table",[a("z-thead",[a("z-th",[e._v("Name")]),a("z-th",[e._v("Description")]),a("z-th",[e._v("Type")]),a("z-th",[e._v("Values")]),a("z-th",[e._v("Default")])],1),a("z-tbody",[a("z-tr",[a("z-td",[a("code",[e._v("name")])]),a("z-td",[e._v("menu item name (link name)")]),a("z-td",[e._v("String")]),a("z-td",[e._v("--")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",[a("code",[e._v("href")])]),a("z-td",[e._v("href link, use if you are not using vue-router")]),a("z-td",[e._v("String")]),a("z-td",[e._v("--")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",[a("code",[e._v("link")])]),a("z-td",[e._v("object, as you would be passing one to vue-router "),a("br"),e._v("component "),a("code",[e._v('<router-link :to="{}"/>')])]),a("z-td",[e._v("Object")]),a("z-td",[e._v("--")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",[a("code",[e._v("exact")])]),a("z-td",[e._v("have effect when used with "),a("code",[e._v("link")]),e._v(" and "),a("code",[e._v("activeClass")]),e._v(", match exact route")]),a("z-td",[e._v("Boolean")]),a("z-td",[e._v("false")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",[a("code",[e._v("activeClass")])]),a("z-td",[e._v("name of css class for active menu item, have effect when used with "),a("code",[e._v("link")]),e._v(" or "),a("code",[e._v("active")])]),a("z-td",[e._v("String")]),a("z-td",[e._v("--")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",[a("code",[e._v("active")])]),a("z-td",[e._v("applies css class from "),a("code",[e._v("activeClass")])]),a("z-td",[e._v("Boolean")]),a("z-td",[e._v("false")]),a("z-td",[e._v("---")])],1)],1)],1)],1)},i=[],v=n("2af9"),o={name:"DocsMenu",components:{ZContainer:v["o"],ZBreadcrumbs:v["a"],ZCode:v["l"],ZDivider:v["p"],ZMenu:v["u"],ZMenuItem:v["w"],ZMenuDivider:v["v"],ZTable:v["x"],ZThead:v["B"],ZTbody:v["y"],ZTh:v["A"],ZTr:v["C"],ZTd:v["z"]}},r=o,d=(n("53fe"),n("2877")),z=Object(d["a"])(r,a,i,!1,null,"01b06400",null);z.options.__file="DocsMenu.vue";t["default"]=z.exports},3832:function(e,t,n){},"53fe":function(e,t,n){"use strict";var a=n("3832"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-0cf1870a.b1d69322.js.map