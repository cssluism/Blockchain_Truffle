const SimpleSTorage = artifacts.require("SimpleStorage.sol");

contract('SimpleStorage',() => {
    it("should set the value", async () => {
        const storage = await SimpleSTorage.new()
        await storage.updateData(50);
        const data = await storage.readData();
        assert(data.toString() === '50');
        assert(data.toNumber() === 50);
    });
});