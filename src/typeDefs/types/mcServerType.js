const { gql } = require('apollo-server');

const mcServerType = gql`
    type MCServer {
        id: String
        name: String
        version: String
        status: MCServerStatus
    }
    type MCServerStatus {
        isOnline: Boolean
        onlinePlayerCount: Int
        maxPlayerCount: Int,
        queryTime: String,
    }
`;

module.exports = {
  mcServerType,
};
