describe("5. The first object, POJO(Plain Old Object Javascript)", function(){

    it("properties", function(){
        let user = {
            name: "John",
            age: 30
        };

        let message = "My name is "+user.name+" and i am "+user.age+" years old";

        assert.equal(message, "My name is John and i am 30 years old");
    });


    it("increment + age", function(){
        //In this exercise you can change the assert

        let user = {
            name: "John",
            age: 30
        };

        user.age += 1;

        assert.equal(user.age, 31);
    });

});