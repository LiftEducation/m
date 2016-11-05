var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject('https://docs.google.com/spreadsheets/d/1ETtva0a6VoI8ncFf2MF-x30-sUgp5elAIRU0Y2xP_ho/pubhtml');
});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
    	{"mDataProp": "publication", "sTitle": "Publication", "sClass": "center"},
    	{"mDataProp": "date", "sTitle": "Date", "sClass": "center"},
		{"mDataProp": "title", "sTitle": "Title of work", "sClass": "center"},
		{"mDataProp": "author", "sTitle": "Author", "sClass": "center"},
		{"mDataProp": "curriculumarea", "sTitle": "Curriculum area", "sClass": "center"},
		{"mDataProp": "curriculumarea2", "sTitle": "Curriculum area", "sClass": "center"},
		{"mDataProp": "curriculumarea3", "sTitle": "Curriculum area", "sClass": "center"},
		{"mDataProp": "masampasifika", "sTitle": "MASAM/Pasifika", "sClass": "center"},
		{"mDataProp": "ethnicity", "sTitle": "Ethnicity", "sClass": "center"},
		{"mDataProp": "gender", "sTitle": "Gender", "sClass": "center"},
		{"mDataProp": "texttype", "sTitle": "Text type", "sClass": "center"},
		{"mDataProp": "keyword1", "sTitle": "Keyword", "sClass": "center"},
		{"mDataProp": "keyword2", "sTitle": "Keyword", "sClass": "center"},
		{"mDataProp": "keyword3", "sTitle": "Keyword", "sClass": "center"},
		{"mDataProp": "keyword4", "sTitle": "Keyword", "sClass": "center"}
	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 25,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
        "fnRowCallback": function(nRow, aData, iDisplayIndex) {
            console.log(aData);
            return nRow;
        },
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort["string-case-asc"]  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort["string-case-desc"] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};