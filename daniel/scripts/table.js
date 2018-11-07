
$(function(){


$("#table").tabulator({
    height:"311px",
    fitColumns: true,
    columns:[
    {title:"Name", field:"name", width:150, headerFilter:"input", visible: true},
    {title:"Style", field:"style", headerFilter:"input", visible: true},
    {title:"ABV", field:"abv", headerFilter:"input", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
    {title:"IBU", field:"ibu", headerFilter:"input", headerFilterPlaceholder:"at least...", headerFilterFunc:">="},
    {title:"Recipe link: https://www.brewersfriend.com", field:"input", headerFilter:"input"}
    ],
})

var tableData = [
    {name: "neipa", style:"ne ipa"},
    {iname: "apa", style:"amber"},
]
$("#example-table").tabulator("setData", tableData);
})

