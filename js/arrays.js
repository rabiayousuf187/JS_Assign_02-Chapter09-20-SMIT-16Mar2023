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
  //9.    Initialize an array with color names. Display the array
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

function createElement(tag, id, class_name, text ){
    let ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.setAttribute('class', class_name);
    ele.innerHTML = text;

    return ele;
}

function ques9(){
    // Declare 
    let colors_name = new Array();

    // initialize
    colors_name  = [" Pink " , " Red " , " Blue " , " Green " , " Orange "];

    return colors_name;
}
function add_clr_start(){

    colors_name = ques9();
    let color_add_start = new Array();
    // let newcolors_name = new Array();

    // a. Ask the user what color he/she wants to add to the
        // beginning & add that color to the beginning of the array.
        // Display the updated array in your browser.

        console.log("colorname == ",colors_name);
        alert("Colors in My Array are:" + "\n" + colors_name  );
        
        color_add_start = prompt("Enter the Color Name You Want to Add at the Beginning of the Array\nFor Multiple Enteries: \ne.g: Blue , Green")

        if ( color_add_start !== null && (+color_add_start !== 1 && +color_add_start !== 2 && +color_add_start !== 3 && +color_add_start !== 4 && +color_add_start !== 5 && +color_add_start !== 6 && +color_add_start !== 7 && +color_add_start !== 8 &&  +color_add_start !== 9  && +color_add_start !== 0)
        ){   
            let ele = createElement('div','divA','content', "")
            document.getElementById("paraA").appendChild(ele);
                
            ele.appendChild(createElement('h4',"","","Before Add:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            
            colors_name.unshift(color_add_start),
            alert("Array has Been Update Successfully.");
            ele.appendChild(createElement('h4',"","","Add Color Name at the Beginning"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
        }
        else{
            alert("Invalid Input \nOR \nMay be You does not Want to Add at the Beginning of the Array.")
        }
}
function add_clr_end(){
    // b. Ask the user what color he/she wants to add to the end
        // & add that color to the end of the array. Display the
        // updated array in your browser.

        let color_add_end;
        colors_name = ques9();
        alert("Colors in My Array are:" + "\n" + colors_name  );
        
        color_add_end = prompt("Enter the Color Name You Want to Add at the End of the Array\nFor Multiple Enteries: \ne.g: Blue , Green")

        if ( color_add_end !== null && (+color_add_end !== 1 && +color_add_end !== 2 && +color_add_end !== 3 && +color_add_end !== 4 && +color_add_end !== 5 && +color_add_end !== 6 && +color_add_end !== 7 && +color_add_end !== 8 &&  +color_add_end !== 9  && +color_add_end !== 0)
            )                             
        {   

            let ele = createElement('div','divA','content', "")
            document.getElementById("paraB").appendChild(ele);
                
            ele.appendChild(createElement('h4',"","","Before Add:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            
            colors_name.push(color_add_end),
            alert("Array has Been Update Successfully.");
            ele.appendChild(createElement('h4',"","","Add Color Name at the End"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
        
        }
        else
        {
            alert("Invalid Input \nOR \nMay be You does not Want to Add at the Beginning of the Array.")
        }
}
function add_2clr_start(){
    colors_name = ques9();

    let ele = createElement('div','divA','content', "")
    document.getElementById("paraC").appendChild(ele);

    ele.appendChild(createElement('h4',"","","Before Add:"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));

    colors_name.unshift(" Black " , " Light Green");
    ele.appendChild(createElement('h4',"","","Add Two Colors Name at the Beginning"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));
}
function delete_first_clr(){
    colors_name = ques9();

    let ele = createElement('div','divA','content', "")
    document.getElementById("paraD").appendChild(ele);

    ele.appendChild(createElement('h4',"","","Defore Delete:"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));

    colors_name.shift();
    ele.appendChild(createElement('h4',"","","Delete First Color:"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));
}
function delete_last_clr(){
    colors_name = ques9();

    let ele = createElement('div','divA','content', "")
    document.getElementById("paraE").appendChild(ele);

    ele.appendChild(createElement('h4',"","","Before Delete:"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));

    colors_name.pop();
    ele.appendChild(createElement('h4',"","","Delete Last Color:"));
    ele.appendChild(createElement('p',"","",`${colors_name}`));
}
function add_on_position(){

    // f. Ask the user at which index he/she wants to add a color
    // & color name. Then add the color to desired
    // position/index. . Display the updated array in your
    // browser.
    colors_name = ques9();

    var index,add_color;

    alert("Colors in My Array are:" + "\n" + colors_name  );  

    index = +prompt("Enter Position at Which You Want to insert Color:");
    
    if (index !== null )
    {
        add_color = prompt("Enter a Color Name You Want to Insert:");
        if (add_color !== null)
        {
            let ele = createElement('div','divA','content', "")
            document.getElementById("paraF").appendChild(ele);

            ele.appendChild(createElement('h4',"","","Before Insert:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            
            colors_name.splice(index,0,add_color);

            ele.appendChild(createElement('h4',"","","Updated Array:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            ele.appendChild(createElement('p',"","",`You add Color <b> ${add_color}</b> on this ${index}</b> Position.`));

        }
        else
        {
            alert("You not Enter Any Color Name")
        }
        
    }
    else
    {
        alert("May be You do not Want to Insert Any Color Name")
    }
}
function delete_on_position(){

    colors_name = ques9();

    var index,delete_no;

    alert("Colors in My Array are:" + "\n" + colors_name  );  

    index = +prompt("Enter Position at Which You Want to delete Color:");
    
    if (index !== null )
    {
        delete_no= +prompt("Enter Number of Colours to be delete:");
        if (delete_no !== null)
        {
            let ele = createElement('div','divA','content', "")
            document.getElementById("paraG").appendChild(ele);

            ele.appendChild(createElement('h4',"","","Before Insert:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            
            colors_name.splice(index,delete_no);

            ele.appendChild(createElement('h4',"","","Updated Array:"));
            ele.appendChild(createElement('p',"","",`${colors_name}`));
            ele.appendChild(createElement('p',"","",`You delete ${delete_no} Colors from <b>${index}</b> Position.`));

        }
        else
        {
            alert("You not Enter Any Number of Colors to be delete")
        }
        
    }
    else
    {
        alert("May be You do not Want to Insert Any Color Name")
    }
}

function ques10(){
    //10.    Write a program to store student scores in an array &
        // Sort the array in ascending order using Array’s sort
        // method.
    

        // Declare
        let student_scores = new Array();
        let updated_asc_ord;
        
        // initialize
        student_scores  = [120 , 350, 75 , 896 , 4450 , 797];

        document.write("<h2>Student Scores in Ascending Order: </h2>");
        document.write("<h4>Before:</h4>");
        document.write("Scores of Student: " + student_scores);

        updated_asc_ord = student_scores.sort(function(a, b)
        { //causes an array to be sorted numerically and ascending
            return (a - b); 
        });

        document.write("<h4>After:</h4>");
        document.write("Ordered Scores of Student: " + updated_asc_ord);
  
}

function ques11(){
    // 11.  Write a program to initialize an array with city names.
    //     Copy 3 array elements from cities array to selectedCities
    //     array.


        // Declare
        let cities = new Array();
        let selected_cities;
        
        // initialize
        cities  = ["Karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];

        selected_cities = cities.slice(2,5);

        document.write("<h4>Cities List:</h4>");
        document.write(cities + "<br><br>");

        document.write("<br><h4>Selected Cities List:</h4>");
        document.write(selected_cities);
  
}

function ques12(){
     // 12. Write a program to create a single string from the
        // below mentioned array:
        // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
        // (Use array’s join method)


        // Declare
        var arr = new Array();
        var arry_to_string;

        // initialize
        arr = ["This" , "is" , "my" , "cat"];

        document.write("<h2>Array.Join  Method:</h2>");
        document.write("<br><h4>Array:</h4>");
        document.write(arr + "<br>");
        
        arry_to_string = arr.join(" ");//joint by space

        document.write("<h4>String:</h4>");
        document.write(arry_to_string);
}

function ques13(){
    // 13.  Create a new array. Store values one by one in such a way
        // that you can access the values in the order in which they
        // were stored. (FIFO-First In First Out)


        // Declare
        var arr = new Array();
        var FIFO_input,
            length_arr,
            arr_removed;

        // initialize
        // arr = [];

            FIFO_input = prompt("Enter 5 Hardware Names: \nFor Operation FIFO \n Name_1:");        {
            length_arr = arr.push(FIFO_input);
            
            FIFO_input = prompt("Enter Hardware Name2: \nFor Operation FIFO");
            length_arr = arr.push(FIFO_input);

            FIFO_input = prompt("Enter Hardware Name3: \nFor Operation FIFO");
            length_arr = arr.push(FIFO_input);

            FIFO_input = prompt("Enter Hardware Name4: \nFor Operation FIFO");
            length_arr = arr.push(FIFO_input);

            FIFO_input = prompt("Enter Hardware Name5: \nFor Operation FIFO");
            length_arr = arr.push(FIFO_input);

            document.write("<h4>Devices:</h4>");
            document.write(arr);
            
            arr_removed = arr.shift();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.shift();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.shift();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.shift();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.shift();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);
        }
}

function ques14(){
    // 14. Create a new array. Store values one by one in such a way
        // that you can access the values in reverse order. (Last InFirst Out)


        // Declare
        var arr = new Array();
        var LIFO_input,
            length_arr,
            arr_removed;

        // initialize
        // arr = [];

            LIFO_input = prompt("Enter 5 Hardware Names: \nFor Operation LIFO \n Name_1:");        {
            length_arr = arr.push(LIFO_input);
            
            LIFO_input = prompt("Enter Hardware Name2: \nFor Operation LIFO");
            length_arr = arr.push(LIFO_input);

            LIFO_input = prompt("Enter Hardware Name3: \nFor Operation LIFO");
            length_arr = arr.push(LIFO_input);

            LIFO_input = prompt("Enter Hardware Name4: \nFor Operation LIFO");
            length_arr = arr.push(LIFO_input);

            LIFO_input = prompt("Enter Hardware Name5: \nFor Operation LIFO");
            length_arr = arr.push(LIFO_input);

            document.write("<h4>Devices:</h4>");
            document.write(arr);
            
            arr_removed = arr.pop();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.pop();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.pop();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.pop();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);

            arr_removed = arr.pop();
            document.write("<h4>Out:</h4>");
            document.write(arr_removed);
        }
  
}
function ques15(){
    // /15. Write a program to store phone manufacturers (Apple,
        // Samsung, Motorola, Nokia, Sony & Haier) in an array.
        // Display the following dropdown/select menu in your
        // browser using document.write() method:
        // Declare

        var mobile_manu = new Array();
       

        // initialize
        mobile_manu = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
        
        document.write("<h2>Drop-Down Menu Using Document.write():</h2><br><br>");
        document.write(
                "<div class=" + "dropdown" + "><button type=" + "button class= 'btn btn-primary dropdown-toggle'"  + "data-toggle= dropdown" + 
                ">Dropdown button</button><div class=" + "dropdown-menu" + "><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[0] + "</a><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[1] + "</a><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[2] + "</a><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[3] + "</a><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[4] + "</a><a class=" + 
                "dropdown-item href=" + "#" + ">"+ mobile_manu[5] + "</a></div></div>" 
                       );
}