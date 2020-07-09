describe("4. Functions and scope", function(){

    it("Function", function(){
        function generateName(){
            return "Anna";
        }

        let name = generateName();

        assert.equal(name, "Anna");
    });

    it("Function flow", function(){
        function returnVariable(var2){
            return var2;
        }
        let var1 = "Var 1";
        let var2 = "Var 2";

        let result = returnVariable(var2);

        assert.equal(result, "Var 2");
    });

    it("Arguments", function(){
        function sayHi(name){
            return "Hi, i'm "+ name;
        }
        let name = "David";

        let result = sayHi(name);

        assert.equal(result, "Hi, i'm David");
    });


    it("Arguments again", function(){
        function sayBye(text){
            return "Bye, "+ text;
        }
        let text = "David";

        let result = sayBye(text);

        assert.equal(result, "Bye, David");
    })
});