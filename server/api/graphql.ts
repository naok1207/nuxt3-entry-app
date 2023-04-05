import { PrismaClient, Task } from '@prisma/client'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
// NOTE: 型を合わせる方法がわからない
// import { Resolvers } from '#graphql/resolver'
import { schema } from '#graphql/schema'

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    tasks: (): Promise<Task[]> => prisma.task.findMany(),
  },
  Mutation: {
    createTask: (_: any, { title }: Task): Promise<Task> =>
      prisma.task.create({ data: { title } }),
    updateTask: (
      _: any,
      {
        id,
        title,
        completed,
      }: Task
    ): Promise<Task> => prisma.task.update({ where: { id }, data: { title, completed } }),
    deleteTask: (_: any, { id }: Task) =>
      prisma.task.delete({ where: { id } }),
  },
}

const apollo = new ApolloServer({typeDefs: schema, resolvers})

export default startServerAndCreateH3Handler(apollo, {
   // Optional: Specify context
  //  context: (event) => {...},
})
