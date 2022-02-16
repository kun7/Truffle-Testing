const simpleStorage = artifacts.require('simpleStorage');

contract('simpleStorage', () => {
  let SimpleStorage;
    it('should return hello world', async () => {
         simpleStorage = await SimpleStorage();
         const result = await SimpleStorage.hello();
         assert(result === 'Hello World');

    });
});
