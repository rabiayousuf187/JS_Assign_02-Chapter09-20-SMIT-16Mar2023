function ques1(){
    // 1. Declare an empty array using JS literal notation to store
    // student names in future.
    let student_name_literal = []; 
    document.write("let student_name_literal = []; ");

}
function ques2(){
    // 2. Declare an empty array using JS object notation to store
    // student names in future.
    let student_name_object = new Array();
    document.write("let student_name_object = new Array();");
    // console.log(student_name_object);

}
function ques3(){
    // Declare and initialize a strings array
    let string_arry = [];

    // initialize
    string_array = ["Barein" , "Ruby" , "Marry" , "Rosella"];
    document.writeln(`let string_arry = [];`);
    document.writeln(`string_array = ["Barein" , "Ruby" , "Marry" , "Rosella"];`);
    // console.log(string_array);
}
function ques4(){
    // 4. Declare and initialize a number array.
    // Declare
    let number_arry = [];
    
    // initialize
    number_array = [999 , 500 , 1000 , 5 , 0 , 65];
    document.writeln(`let number_arry = [];`);
    document.writeln(`number_array = [999 , 500 , 1000 , 5 , 0 , 65];`);
    console.log(number_array);
    
}
function ques5(){
    // 5. Declare and initialize a boolean array.
    // Declare
    let boolean_arry = [];
    
    // initialize
    boolean_array = [true , false];
    document.writeln(`let boolean_arry = [];`);
    document.writeln(`boolean_array = [true , false];`);
    console.log(boolean_array);
}
function ques6(){
    // 6. Declare and initialize a mixed array.
    // Declare
    let mixed_arry = new Array();
    
    // initialize
    mixed_array = [true , 111 , "Rosella" ,  ">=" , false , "ABC"];
    document.writeln(` let mixed_arry = new Array();`);
    document.writeln(` mixed_array = [true , 111 , "Rosella" ,  ">=" , false , "ABC"];`);
    console.log(mixed_array);

}
function ques7(){
    // 7. Declare and Initialize an array and store available
    // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
    // BS, BCOM, MS, M. Phil., PhD). Show the listed
    // qualifications in your browser like:

    // Declare
    let qualifications = new Array();

    // initialize
    qualifications  = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil.", "PhD"];

    document.write("<h3>Qualifications: </h3>");
    document.write("<ol>");
    
    for( let ind = 0; ind < qualifications.length; ind++){
        document.write("<li>" + qualifications[ind] + "</li>");
    }
    document.write("</ol>");
    
}
function ques8(){
    //     Write a program to store 3 student names in an array.Take
    // another array to store score of these three students.
    // Assume that total marks are 500 for each student, display
    // the scores & percentages of students like:

    // Declare
    let student_name = new Array(3);
    let student_scores = new Array(3);
    let student_percentage = new Array();

    let total_marks = 500;

    // initialize
    student_name  = ["Barein" , "Rosella" , "Row"];
    student_scores  = [495, 250 , 480];


    // PUSH Percentage in student_percentage array
    student_percentage.push( 
        ( ( student_scores[0] / total_marks ) * 100 ) + "%" ,  

        (( student_scores[1] / total_marks ) * 100) + "%" , 

        (( student_scores[2] / total_marks ) * 100 ) + "%" 
    ) ;
    console.log(student_percentage);

    document.write("<h3>Students Scores with Percentages: </h3>");
    for( let ind = 0; ind < student_name.length; ind++){
        document.write(`<p>Score of ${student_name[ind]} is ${student_scores[ind]}. Percentage: ${student_percentage[ind]}</p>`);
    }  
}

function ques9(){
    //    Initialize an array with color names. Display the array
    // elements in your browser.
    // a. Ask the user what color he/she wants to add to the
    // beginning & add that color to the beginning of the array.
    // Display the updated array in your browser.
    // b. Ask the user what color he/she wants to add to the end
    // & add that color to the end of the array. Display the
    // updated array in your browser.
    // c. Add two more color to the beginning of the array.
    // Display the updated array in your browser.
    // d. Delete the first color in the array. Display the updated
    // array in your browser.
    // e. Delete the last color in the array. Display the updated
    // array in your browser.
    // f. Ask the user at which index he/she wants to add a color
    // & color name. Then add the color to desired
    // position/index. . Display the updated array in your
    // browser.
    // g. Ask the user at which index he/she wants to delete
    // color(s) & how many colors he/she wants to delete. Then
    // remove the same number of color(s) from user-defined
    // position/index. . Display the updated array in your
    // browser.

    // Declare
    let colors_name = new Array();
    let color_add_start = new Array ();
    let color_add_end = new Array();
    
    var length_colors_name;

    // initialize
    colors_name  = [" Pink " , " Red " , " Blue " , " Green " , " Orange "];

    return colors_name;
 
}

function add_clr_start(){

    colors_name = ques9();


    // a. Ask the user what color he/she wants to add to the
        // beginning & add that color to the beginning of the array.
        // Display the updated array in your browser.

        console.log("colorname == ",colors_name);
        alert("Colors in My Array are:" + "\n" + colors_name  );
        
        color_add_start = prompt("Enter the Color Name You Want to Add at the Beginning of the Array\nFor Multiple Enteries: \ne.g: Blue , Green")

        if ( color_add_start !== null && (+color_add_start !== 1 && +color_add_start !== 2 && +color_add_start !== 3 && +color_add_start !== 4 && +color_add_start !== 5 && 
                                              +color_add_start !== 6 && +color_add_start !== 7 && +color_add_start !== 8 &&  +color_add_start !== 9  && +color_add_start !== 0)
            ){   
            document.getElementById("paraA").appendChild  
            document.write("<h2>Colors Names: </h2>");
            document.write("<h4>Before Add:</h4>");
            document.write("Colors in My Array are " + "<b>" + colors_name + "</b>.");
            length_colors_name = colors_name.unshift(color_add_start);
            alert("Array has Been Update Successfully.");
            document.write("<br><br><h4>Updated Array:</h4>");
            document.write("Add Color Name at the Beginning of the Array: " + "<b>" + colors_name + "</b><br>");
        }
        else{
            alert("Invalid Input \nOR \nMay be You does not Want to Add at the Beginning of the Array.")
        }
}
function add_clr_end(){
    // b. Ask the user what color he/she wants to add to the end
        // & add that color to the end of the array. Display the
        // updated array in your browser.
 
        // Declare
        let colors_name = new Array();
        let color_add_start = new Array ();
        let color_add_end = new Array();
        
        var length_colors_name;
    
        // initialize
        colors_name  = [" Pink " , " Red " , " Blue " , " Green " , " Orange "];
    
        alert("Colors in My Array are:" + "\n" + colors_name  );
        
        color_add_end = prompt("Enter the Color Name You Want to Add at the End of the Array\nFor Multiple Enteries: \ne.g: Blue , Green")


        if ( color_add_end !== null && (+color_add_end !== 1 && +color_add_end !== 2 && +color_add_end !== 3 && +color_add_end !== 4 && +color_add_end !== 5 && 
                                              +color_add_end !== 6 && +color_add_end !== 7 && +color_add_end !== 8 &&  +color_add_end !== 9  && +color_add_end !== 0)
            )                             
        {   

            document.write("<h2>Colors Names: </h2>");
            document.write("<h4>Before Add:</h4>");
            document.write("Colors in My Array are " + "<b>" + colors_name + "</b>.");

            length_colors_name = colors_name.push(color_add_end);

            alert("Array has Been Update Successfully.");

            document.write("<br><br><h4>Updated Array:</h4>");
            document.write("Add Color Name at the End of the Array: " + "<b>" + colors_name + "</b><br>");
        
        }
        else
        {
                alert("Invalid Input \nOR \nMay be You does not Want to Add at the Beginning of the Array.")
        }
}