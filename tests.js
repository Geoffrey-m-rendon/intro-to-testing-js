// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//
   describe('sayHello',function () {
       it('should a defined function!', function () {
           expect(typeof sayHello).toBe('function');
       });
       it('should return a string when called', function () {
           expect(typeof sayHello()).toBe("string");
       });
       it('should return "Hello, Jane!" when passed Jane"', function () {
           expect(  sayHello('Jane')).toBe("Hello, Jane!");
       });
       it('should return "Hello, Alex!" when passed Alex"', function () {
           expect(sayHello('Alex')).toBe("Hello, Alex!");
       });
       it('should return "Hello, Pat!" when passed Pat', function(){
           expect(sayHello('Pat')).toBe("Hello, Pat!");
       })
       it('should return "Hello, World! when called without input', function(){
           expect(sayHello()).toBe("Hello, World!");
       });
       it('should return "Hello, World! when passed the boolean true', function() {
           expect(sayHello(true)).toBe("Hello, World!");
       });
       it('should return "Hello, World! when passed the boolean false', function() {
           expect(sayHello(false)).toBe("Hello, World!");
       })
   });