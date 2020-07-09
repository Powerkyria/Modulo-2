describe("2. Conditional operators + Case statements, Data types [Bools]", function(){

    it("Type bool", function(){
        let boolean = true;

        assert.equal(boolean, true);
    });

    it("Structure if", function(){
        let execute = false;

        let result = "Hello";
        if(execute){
           result = "Hello"
        }

        assert.equal(result, "Hello");
    });

    it("Equal operator", function(){
        let result = "javascript" === "javascript";

        assert.equal(result, true);
    });

    it("Structure if...else ", function(){
        let sum = 1+1;
        let message = "";

        if(sum == 2){
            message = "You guessed it right!";
        }else{
            message = "How can you be so wrong?";
        }

        assert.equal(message, "You guessed it right!");
    });

    it("Nested if...else", function(){
        let greeting = "";
        let time = "evening";

        if( time === "morning" )
        {
            greeting ="Good morning";
        }
        else
        {
            if (time === "evening" )
            {
                greeting = "Good evening";
            }
            else
            {
                greeting = "Good night";
            }
        }

        assert.equal(greeting, "Good evening");
    });

    it("Nested 'if else'", function(){
        let greeting = "";
        let time = "evening";

        if( time === "morning" )
        {
            greeting ="Good morning";
        }
        else if (time === "evening" )
        {
            greeting = "Good evening";
        }
        else
        {
            greeting = "Good night";
        }

        assert.equal(greeting, "Good evening");
    });

    it("switch", function(){
        let note = "";
        let examenResult = 6;

        switch (examenResult) {
            case 4:
                note = "suspended";
                break;
            case 5:
                note = "Sufficient";
                break;
            case 6:
                note = "Fine";
                break;
            case 7:
                note = "Great";
                break;
            case 8:
                note = "Notable";
                break;
            case 9:
                note = "Excellent";
                break;
            case 10:
                note = "Outstanding";
                break;
            default:
                note = "this exam result is impossible";
                break;
        }

        assert.equal(note, "Fine");
    });

    it("&& AND operator", function(){
        //In this exercise you can change the assert

        let result1 = true && true;
        let result2 = false && true;
        let result3 = true && false;
        let result4 = false && false;

        assert.equal(result1, true);
        assert.equal(result2, false);
        assert.equal(result3, false);
        assert.equal(result4, false);
    });

    it("&& OR operator", function(){
        //In this exercise you can change the assert

        let result1 = true || true;   // true
        let result2 = false || true;  // false
        let result3 = true || false;  // false
        let result4 = false && false; // false

        assert.equal(result1, true);
        assert.equal(result2, true);
        assert.equal(result3, true);
        assert.equal(result4, false);
    });

    it("'Greater than ...' and 'Less than ...' operator", function(){
        let result1 = 3 < 5;
        let result2 = 3 < 5;

        assert.equal(result1, true);
        assert.equal(result2, true);
    });

    it("Do you have legal age?", function(){
        let age = 18;

        let message = "";
        if(age >= 18){
            message = "you have legal age."
        }else{
            message = "you don't have legal age.";
        }

        assert.equal(message, "you have legal age.");
    });

});