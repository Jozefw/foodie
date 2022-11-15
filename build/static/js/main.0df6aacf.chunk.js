(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={header:"Header_header__1cM8q",title:"Header_title__3Wu4I",headerWrapper:"Header_headerWrapper__1iuDz",subheader:"Header_subheader__2LZ_d","main-image":"Header_main-image__1RoZ3"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},function(e,t,n){e.exports={meal:"DesertItem_meal__21N_g",description:"DesertItem_description__2lu76",price:"DesertItem_price__31vvk"}},function(e,t,n){e.exports={form:"Form_form__2GmWF"}},,,function(e,t,n){e.exports={summary:"DesertsSummary_summary__3G4NN"}},function(e,t,n){e.exports={meals:"AvailableDeserts_meals__33rRo","meals-appear":"AvailableDeserts_meals-appear__31SBS"}},function(e,t,n){e.exports={input:"Input_input__3Lg_X"}},function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),r=(n(24),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/header.37788299.jpg",l=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(6),u=n.n(d),j=n(0),m=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#fff",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=function(e){var t=Object(i.useContext)(l).items.reduce((function(e,t){return e+t.amount}),0);return Object(j.jsxs)("button",{onClick:e.onClickButton,className:u.a.button,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(m,{children:"Cart"})}),Object(j.jsx)("span",{children:"Your Cart "}),Object(j.jsx)("span",{className:u.a.badge,children:t})]})},h=n(3),p=n.n(h),_=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:p.a.header,children:[Object(j.jsxs)("span",{className:p.a.headerWrapper,children:[Object(j.jsx)("h1",{className:p.a.title,children:"GoGo Donuts"}),Object(j.jsx)("h4",{className:p.a.subheader,children:"Caffeinated Confections"})]}),Object(j.jsx)(b,{onClickButton:e.onShowingCart,children:"Cart"})]}),Object(j.jsx)("div",{className:p.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"Donuts"})})]})},x=n(5),O=n.n(x),f=n(7),v=n.n(f),C=function(e){return Object(j.jsx)("div",{className:v.a.backdrop,onClick:e.onClose})},g=function(e){return Object(j.jsx)("div",{className:v.a.modal,children:Object(j.jsx)("div",{className:v.a.content,children:e.children})})},N=function(e){var t=document.getElementById("overlays");return Object(j.jsxs)(i.Fragment,{children:[O.a.createPortal(Object(j.jsx)(C,{onClose:e.onClose}),t),O.a.createPortal(Object(j.jsx)(g,{children:e.children}),t)]})},A=n(4),w=n.n(A),y=function(e){var t=Object(j.jsx)("ul",{className:w.a["cart-items"],children:[{id:"c1",name:"One Pounder",price:12.99,amount:2}].map((function(e){return Object(j.jsx)("li",{children:e.name},e.id)}))});return Object(j.jsxs)(N,{onClose:e.onClose,children:[t,Object(j.jsxs)("div",{className:w.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:"$62.54"})]}),Object(j.jsxs)("div",{className:w.a.actions,children:[Object(j.jsx)("button",{onClick:e.onClose,className:w.a["button--alt"],children:"Close"}),Object(j.jsx)("button",{className:w.a.button,children:"Order"})]})]})},D=n(12),H=n.n(D);function I(){return Object(j.jsxs)("section",{className:H.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Caffeinated Confections"}),Object(j.jsx)("p",{children:"Choose your favorite donuts from our broad selection and enjoy a delicious treat at home or on the go."}),Object(j.jsx)("p",{children:"All our donuts are cooked with high-quality ingredients!"})]})}var k=n(13),B=n.n(k),M=n(16),F=n(14),R=n.n(F),T=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:R.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(M.a)({ref:t},e.input))]})})),S=n(9),z=n.n(S);function E(e){var t=Object(i.useRef)(),n=Object(i.useState)(!0),a=Object(r.a)(n,2),c=a[0],s=a[1];return Object(j.jsxs)("form",{className:z.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.addItemToCart(c)},children:[Object(j.jsx)(T,{label:"Amount",ref:t,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{className:z.a.button,children:"+ Add"}),!c&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})}var W=n(8),G=n.n(W);function P(e){var t=Object(i.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:G.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:G.a.description,children:e.descr}),Object(j.jsx)("div",{className:G.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(E,{id:e.id,addItemToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})}var q=n(15),J=n.n(q);function L(e){return Object(j.jsx)("div",{className:J.a.card,children:e.children})}var Q=[{id:"m1",name:"Cake Donut",description:"Cake Donut with icing and sprinkles",price:22.99},{id:"m2",name:"Bear Claw",description:"A big yeast donut, with no whole and icing",price:16.5},{id:"m3",name:"Jelly Donuts",description:"A big yeast donut, with jelly center and covered in sugar ",price:12.99},{id:"m4",name:"Maple Bacon",description:"A big yeast donut, with bacon crumbles and maple icing",price:18.99}];function V(){var e=Q.map((function(e){return Object(j.jsx)(P,{id:e.id,name:e.name,descr:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:B.a.meals,children:Object(j.jsx)(L,{children:Object(j.jsx)("ul",{children:e})})})}function U(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{}),Object(j.jsx)(V,{})]})}var X={items:[],totalAmount:0},Y=function(e,t){return(t.type="ADD")?{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price*t.item.amount}:X},Z=function(e){var t=Object(i.useReducer)(Y,X),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_CART_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_CART_ITEM",id:e})}};return Object(j.jsx)(l.Provider,{value:s,children:e.children})};var $=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(Z,{children:[n&&Object(j.jsx)(y,{onClose:function(){a(!1)}}),Object(j.jsx)(_,{onShowingCart:function(){a(!0)},children:" "}),Object(j.jsx)("main",{children:Object(j.jsx)(U,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)($,{}))}],[[26,1,2]]]);
//# sourceMappingURL=main.0df6aacf.chunk.js.map