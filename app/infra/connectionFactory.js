var ibm_db = require('ibm_db'), connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=tvz74199;PWD=cfztb6rntj@vwp2p;"

function createDBConnection() {
    return ibm_db.openSync(connStr, (err, conn) => {
        if (!err) console.log(conn);

    });
}

module.exports = () => {
    return createDBConnection;
}