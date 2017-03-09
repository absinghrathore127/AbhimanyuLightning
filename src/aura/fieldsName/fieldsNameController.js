({
doInit : function(cmp) {
// Initialize input select options
var opts = [
{ "class": "optionClass", label: "Option1", value: "opt1", selected: "true"
},
{ "class": "optionClass", label: "Option2", value: "opt2" },
{ "class": "optionClass", label: "Option3", value: "opt3" }
];
cmp.find("InputSelectDynamic").set("v.options", opts);
},

onChange: function(cmp, evt) {
var dynamicCmp = cmp.find("InputSelectDynamic");
resultCmp = cmp.find("dynamicResult");
resultCmp.set("v.value", dynamicCmp.get("v.value"));
}
})

doInit:function(component,event,helper){
component.set('v.options',['jan','feb','mar']);
component.find('myselection').set('v.value','feb');
}