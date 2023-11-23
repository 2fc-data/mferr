import { PrismaClient } from '@prisma/client/edge';
const prisma = new PrismaClient();

async function main() {
  //const profile = await prisma.profile.create({ data: { name: 'Admin'} })
  //console.log(profile)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
