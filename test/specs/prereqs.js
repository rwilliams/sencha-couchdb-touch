describe("Prerequisites", function() {

    it("has loaded Sencha Touch 2.3.x", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(2);
        expect(Ext.getVersion().minor === 3).toBeTruthy();
    });
});