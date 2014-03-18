SenchaCouchDBTouch
===========

SenchaCouchDBTouch is a small library for Sencha Touch for performing CRUD operations and writing nested data sets to
a CouchDB compatible database.

CouchDB Compatible databases(that i know of):

- CouchDB (duh)
- Cloudant
- PouchDB
- Couchbase Lite

**NOTE**: SenchaCouchDBTouch has been tested with Sencha Touch 2.3.1

Running The Specs
-----------------
Instructions coming soon...
I use pouchdb and pouchdb-server on node.js

Acknowledgements
----------------
- Steven R. Farley's work on the original SenchaCouch https://github.com/srfarley/sencha-couch

- Peter Müller's Sencha forum post and work on platform dernormalization for Sencha Touch and ExtJS.
  http://www.sencha.com/forum/showthread.php?127547-Sencha-Platform-denormalized-Data-patch


License
-------

Need to figure this out, it's probably going to be GPL'd if you're using GPL version of Sench Touch
otherwise MIT or Apache except for the code taken directly from the Sencha sources

TODO
----

Add more exhaustive test suite.

Seperate nested data code and CouchDB specific code so this can be applied to MongoDB etc.
