const readFile = require('../../utils/fs').getFromFileJSON;

//test that tests if filesystem function could read data from file
test('getFromFileJSON reads file and returns string', async ()=>{
      const data = await readFile(__dirname+'/test');
      expect(data.test).toBe('test passed!');
});


