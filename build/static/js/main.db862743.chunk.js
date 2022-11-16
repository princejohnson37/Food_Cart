(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",head3:"MealItem_head3__h96by",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=(n(21),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=n(7),m=n.n(d),u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=function(e){var t=Object(i.useContext)(u).items.reduce((function(e,t){return e+t.amount}),0);return Object(o.jsxs)("button",{className:m.a.button,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:t})]})},b=n(10),p=n.n(b),x=function(e){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart,children:"Cart"})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg",alt:"A table full of delicious meals"})})]})},h=n(11),_=n.n(h),O=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},f=n(12),v=n.n(f),C=n(13),g=n.n(C);var N=function(e){return Object(o.jsxs)("div",{className:g.a.card,children:[" ",e.children," "]})},y=n(5),A=n.n(y),w=n(14),I=n.n(w),M=n(16),k=n(15),H=n.n(k),B=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:H.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(M.a)({ref:t},e.input))]})}));var F=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:I.a.form,children:[Object(o.jsx)(B,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault();var n=+s.current.value;0===n.length||n<1||n>5?c(!1):e.onAddToCart(n)},children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"please enter a amount (1--5)"})]})};var D=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:A.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:A.a.head3,children:e.name}),Object(o.jsx)("div",{className:A.a.description,children:e.description}),Object(o.jsx)("div",{className:A.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(){var e=S.map((function(e){return Object(o.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:v.a.meals,children:Object(o.jsx)(N,{children:Object(o.jsx)("ul",{children:e})})})};var z=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(R,{})]})},E=n(6),P=n.n(E),T=n(8),U=n.n(T),J=function(e){return Object(o.jsx)("div",{onClick:e.onClose,className:U.a.backdrop})},L=function(e){return Object(o.jsx)("div",{className:U.a.modal,children:Object(o.jsx)("div",{className:U.a.content,children:e.children})})},Q=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),document.getElementById("overlays")),c.a.createPortal(Object(o.jsx)(L,{children:e.children}),document.getElementById("overlays"))]})},V=n(3),Y=n.n(V),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:Y.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:Y.a.summary,children:[Object(o.jsx)("span",{className:Y.a.price,children:t}),Object(o.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var X=function(e){var t=Object(i.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){},r=function(e){},s=Object(o.jsx)("ul",{className:P.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:r.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(o.jsxs)(Q,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:P.a.actions,children:[Object(o.jsx)("button",{className:P.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:P.a.button,children:"Order"})]})]})},Z={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){e.items.findIndex((function(e){return e.id===t.item.id}));return{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price*t.item.amount}}return t.type,Z},G=function(e){var t=Object(i.useReducer)($,Z),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var K=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=function(){a(!1)};return Object(o.jsxs)(G,{children:[n&&Object(o.jsx)(X,{onClose:c}),Object(o.jsx)(x,{onShowCart:function(){a(!0)},onHideCart:c}),Object(o.jsx)("main",{children:Object(o.jsx)(z,{})})]})};c.a.render(Object(o.jsx)(K,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.db862743.chunk.js.map