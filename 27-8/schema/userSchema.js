const  {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql') ;

const  userModel = require("../models/userModel.js");

const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        emailId: { type: GraphQLString }
        // no password exposed for security
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUser: {
            type: new GraphQLList(userType),
            args: {
                emailId: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async (_, { emailId }) => {
                return await userModel.find({ emailId });
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        updateUser: {
            type: GraphQLString,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                emailId: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLString }
            },
            resolve: async (_, args) => {
                const { emailId, ...updates } = args;
                const result = await userModel.updateOne({ emailId }, updates);
                return result.modifiedCount > 0
                    ? "User updated successfully"
                    : "User not found or no changes made";
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
