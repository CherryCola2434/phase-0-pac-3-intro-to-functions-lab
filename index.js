describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
  function shout(string) {
    // todo
  }
  function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log('HELLO');
  }
  function logWhisper(string) {
    console.log('hello');
  }  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
       return "I can't hear you!"
    } if (string === string.toUpperCase()) {
       return "YES INDEED!"
    } if (string === "Let's have dinner together!") {
      return "I would love to!"
    }
  }
