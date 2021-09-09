$(document).ready( onReady );

function onReady(){
    $( "#generatorButton" ).on ('click', createSection )
    $( "#sectionDiv" ).on ( 'click', ".yellowButton", yellowFunciton )
    $( "#sectionDiv" ).on ( 'click', ".deleteButton", deleteFunciton )
}
let counterID = 1;

function createSection (){
    $( "#sectionDiv" ).append(
       `<div class="subSection">
            <strong><p>${ counterID }</p></strong>
            <input class="yellowButton" type="button" value="Yellow">
            <input class="deleteButton" type="button" value="Delete">
       </div>` 
    )
    counterID++
}

function yellowFunciton(){
    $( this ).parent().toggleClass( 'yellow' );
    if ($( this ).val() === "Yellow" ){
        $( this ).val("Red"); 
    }
    else if ($( this ).val() === "Red" ){
        $( this ).val("Yellow"); 
    }
}

function deleteFunciton(){
    $( this ).parent().slideUp(1000);
}