Ext.define('CouchDB.data.Writer', {
    extend: 'Ext.data.writer.Json',
    alias: 'writer.couchdb',

    allowSingle: true,
    encode: false,
    writeAllFields: true,
    root: undefined,

    getRecordData: function(record) {
        var isPhantom = record.phantom === true,
            nameProperty = this.getNameProperty(),
            fields = record.getFields(),
            data = {},
            name, field, key, value;

        fields.each(function(field) {
            if (field.getPersist()) {
                name = field.config[nameProperty] || field.getName();
                value = record.get(field.getName());
                if (field.getType().type == 'date') {
                    value = this.writeDate(field, value);
                }


                if (!(fields.map[name] && fields.map[name].optional === true && value === null)) {
                    data[name] = value;
                }
            }
        }, this);

        Ext.iterate(record.associations.map, function (name, association) {
            if (association.config.inner === true) {
                var innerStore = record[name]();
                if (innerStore.getCount() > 0) {
                    data[name] = [];
                    innerStore.each(function (innerRecord) {
                        var innerData = this.getRecordData(innerRecord);
                        // Remove foreign keys that aren't needed with denormalized databases
                        innerRecord.associations.each(function (association) {
                            delete innerData[association._foreignKey];
                        });
                        data[name].push(innerData);
                    }, this);
                }
            }
        }, this);

        if (data._id) {
            //fix for phantom record id's
            if (data._id.match(/ext-record/)){
                delete data._id;
            }
        } else {
            delete data._id;
        }

        if (!data._rev) {
            delete data._rev;
        }

        // Assign the Ext class so view map functions can differentiate in a mixed-document database.
        // Example map function:
        //   function(doc) {
        //     if (doc.type === 'My.Ext.ClassName') {
        //       emit(null, null);
        //     }
        //   }
        data.type = Ext.getClassName(record);

        return data;
    }
});