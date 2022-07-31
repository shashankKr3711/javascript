
    // create a variable of type String and try to add a number to it
    let s = 'Shashank'
    console.log("after adding a number of string we get : "+(s+3))// it gets concatinated
    //Q2
    console.log('type of a+b : '+typeof(s+6))
    // Q3 create a const object in java script can u change it to hold a number later.
    const a = {
        "name" : "Shahsank",
        "class" : "10",
        "rank" : '1',
    }
    a1 = 45// cannot change this as this is const
    //Q4--> adding new key to the const
    a["rank"] = "First" // this will work as there is no change in a as it contains refrence of 
                    // object ,and we are changing the content of object
    // Q5
    const my_dict ={
        shashank : "basketball",
        harry : "coder",
        rupal : "cheater",
        nitesh : "proagrammer"
    }
    console.log(my_dict.shashank)
    console.log(a)