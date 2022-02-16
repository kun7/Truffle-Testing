const simpleStorage = artifacts.require('simpleStorage');

contract('simpleStorage', () => {
  let ss;
    it('should deploy smart contract properly', async () => {
         ss = await ss.deployed();
         assert(ss.address !== '');

    });
});
