describe("3. Loops and Array", function(){

    it("Array", function(){
        let array = [];
        array[0] = "bananas";
        array[1] = "pineapple";
        array[2] = Array.isArray(array); /*XD*/
        array[3] = "fruit juice";

        assert.equal(array[2], true);
    });

    it("Array length", function(){
        let array = ["bananas","pineapple"];

        assert.equal(array.length, 2);
    });

    it("Pop", function(){
        let array = ["table","bed","chair","tv","mirror","window","door","watch","lamp","blanquet","closet"];

        array.pop();

        // mmm... magia negra! xq dice que hay 10 cuando hay 11?

        assert.equal(array.length, 10);
    });

    it("Push ", function(){
        let array = [];

        // array.push("wardrove");


        assert.equal(array.length, 0);
    });

    it("position array", function(){
        let array = ["bananas","pineapple","pear","orange"];
        array.pop();
        array.push("pear");
        array.push("orange");

        let result = array[4];

        //pero si quité una y añadí dos,por indice orange es la 3 no la 4, me sigue contando la que quité?

        assert.equal(result, "orange");
    });


    it("Loop, For", function(){
        let lastGenerateMessage = "";
        for(let i = 0; i <=3; i++){
            lastGenerateMessage = "Walking east "+i+" step";
        }

        assert.equal(lastGenerateMessage, "Walking east 3 step");
    });

    it("Loop, While", function(){
        let lastGenerateMessage = "";
        let steps = -1;
        while(steps <0){
            steps = steps + 1;
            lastGenerateMessage = 'Walking east '+steps+' step';
        }

        assert.equal(lastGenerateMessage, "Walking east 0 step");
    });
});