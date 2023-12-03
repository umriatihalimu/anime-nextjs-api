// dari dokumentasi namanya prisma singleton, harus pake kode ini spy klo di jalankan prismanya maka tdk overheat,overload
// fungsinya  membuat instance untuk 1 project, bukan masing2 query

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
