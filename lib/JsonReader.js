Ext.define('CouchDB.data.Reader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.couchdb',
    config: {
        rootProperty: 'rows',
        record: 'doc',
        idProperty: "_id",
        successProperty: 'ok',
        totalProperty: 'total_rows'
    }
});
