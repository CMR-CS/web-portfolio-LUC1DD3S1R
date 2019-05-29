/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$.ajax({
    type: "GET",
    url: "/GetItems",
    data: { 'pageNum': $('#pageNum').val() },
    dataType: "json",
    success: function (response) {
        $('#MyDiv ul').append(response.Html);
        $('#pageNum').val(response.PageNum);
    }
}
       });

#MyDiv
{
    border:solid 1px #ccc; 
    width:250px;
    height:500px;
    overflow-y: scroll;
}

<div id="MyDiv">
    <ul>
    <li>...</li>
    ...
        </ul>
</div>