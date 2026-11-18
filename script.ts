import { prisma } from "./lib/prisma";


async function main() {
  const applications = await prisma.application.findMany({
      where: {
        userId: 1
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  console.log("My applications:", applications);

  const updatedApp = await prisma.application.update({
      where: {
        id: 1, 
      },
      data: {
        company: "Meta",
        role: "Backend developer",
        status: "interview"
      }
    });
  console.log("Updated:", updatedApp);

  const deletedApp = await prisma.application.delete({
      where: {
        id: 3
      }
    });
  console.log("Deleted:", deletedApp);
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });